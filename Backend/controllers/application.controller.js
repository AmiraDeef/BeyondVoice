const Application = require("../models/Application")
const Candidate = require("../models/Candidate")
const Company = require("../models/Company")
const Job = require("../models/Job")
const calcMatchingScore=require("../utils/matchingEngineUtils")
const {updateStateSchema}=require("./validation/applicationValidation")

const getUserApplication = async (req, res, next) => {
    try {
        const userId = req.userId
        const userRole = req.userRole

        if (userRole === "candidate") {
            const candidate = await Candidate.findOne({ user: userId })
            if (!candidate) return res.status(404).json({ message: "Candidate profile not found!" });
            const canApplications = await Application.find({
                candidate: candidate.id,
            }).populate({
                path: "job",
                select: "title workType category",
                populate: {
                    path: "company",
                    select: "companyName "
                }
            }).sort("-createdAt");
            return res.status(200).json({
                count: canApplications.length,
                applications: canApplications
            });

        } if (userRole === "company") {
            const companyProfile = await Company.findOne({ user: userId });
            if (!companyProfile) return res.status(404).json({ message: "Company profile not found!" });

            // console.log(companyProfile.id);

            const myJobs = await Job.find({ company: companyProfile.id }).select("_id");
            const jobIds = myJobs.map(job => job._id);

            const applicants = await Application.find({ job: { $in: jobIds } })
                .populate("job", "title requirements city category")
                .populate({
                    path: "candidate",
                    select: "title skills city industry",
                    populate: { path: "user", select: "fullName" }
                });


                //calc match

                const appMatch=applicants.map(apps=>{
                    //convert to obj to access and modify doc
                    const appObj=apps.toObject();
                    if(appObj.candidate&&appObj.job){
                        appObj.matchScore = calcMatchingScore(appObj.candidate, appObj.job);
                    } else {
                    appObj.matchScore = 0;
                }
                
                return appObj;


                })
                appMatch.sort((a,b)=>b.matchedScore-a.matchedScore)

            return res.status(200).json({ count: appMatch.length, applications: appMatch });
        }

        return res.status(403).json({ message: "Invalid user role!" });
    } catch (error) {
        next(error)
    }

}

const applyJob = async (req, res, next) => {
    try {
        const compId = req.userId
        const userRole = req.userRole
        console.log(userRole);

        if (userRole !== "candidate") {
            return res.status(403).json({ message: "Unauthorized! Only candidates can apply for jobs." });
        }
        const { jobId } = req.body

        const job = await Job.findById(jobId)
        if (!job) return res.status(404).json({ message: "Job not found!" });
        if (job.status === "closed") {
            return res.status(400).json({ message: "Sorry, this job is already closed." });
        }
        const candidateProfile = await Candidate.findOne({ user: compId });
        if (!candidateProfile) {
            return res.status(404).json({ message: "Please complete your profile before applying." });
        }

        console.log(job.company);

        const existApplicator = await Application.findOne({
            job: jobId,
            candidate: candidateProfile.id
        })
        if (existApplicator) {
            return res.status(400).json({ message: "You have already applied for this job!" });
        }
        const finalScore = calcMatchingScore(candidateProfile, job);
        console.log(finalScore);
        
        const newApplication = await Application.create({
            job: jobId,
            company: job.company,
            candidate: candidateProfile.id,
            status: "pending",
            matchedScore: finalScore
        });
        return res.status(201).json({

            message: "Applied successfully!",
            application: newApplication
        });


    } catch (error) {
        next(error)
    }

}


//this for company dashboard

const upateApplicationState = async (req, res, next) => {
    try {
        const userId = req.userId
        const userRole = req.userRole
        if (userRole !== "company") {
            return res.status(403).json({ message: "Unauthorized! Only companies can update Applicator state ." });
        }
        const id = req.params.id;
   
        const {error,value}=updateStateSchema.validate(req.body,{
             abortEarly: false,
            stripUnknown: true
        })
        if (error) {
            return res.status(400).json({
                message: "Validation Error",
                errors: error.details.map(err => err.message)
            });
        }
        const { status } = value;
        const application = await Application.findById(id);
        
        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }
        application.status = status;

        await application.save();

        return res.status(200).json({
            message: "Status updated",
            application
        });

    } catch (error) {
        next(error)
    }

}


module.exports = {
    getUserApplication,
    applyJob,
    upateApplicationState
}
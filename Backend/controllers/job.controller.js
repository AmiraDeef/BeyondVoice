const {jobSchemaValidation} = require("./validation/jobVlidation")
const Job = require("../models/Job")
const Company = require("../models/Company")





const getCompanyJobs = async (req, res, next) => {
    try {
        const userId = req.userId
        const companyProfile = await Company.findOne({ user: userId });
        if (!companyProfile) {
            return res.status(404).json({ message: "Company profile not found!" });
        }
        // console.log();
        
        const compJobs = await Job.find({company:userId}).populate("company", "companyName")
        if (!compJobs || compJobs.length === 0) {
            return res.status(200).json({ message: "There are no jobs yet", jobs: [], count: 0 });
        }
        const jobCount=await Job.countDocuments({ company:userId });
        return res.status(200).json({ jobs: compJobs, count: jobCount })

    } catch (error) {
        next(error)
    }
}

const getJob = async (req, res, next) => {
    try {
        const jobId = req.params.id
        const singleJob = await Job.findById(jobId).populate("company", "companyName industry city country")
        if (!singleJob) return res.status(400).json({ message: "job not found" })

        return res.status(200).json(singleJob)
    } catch (error) {
        next(error)
    }



}
const createJob = async (req, res, next) => {
    try {
        const userId = req.userId
        const userRole = req.userRole
        if (!userRole == "company") return res.status(403).json({ message: "Unauthorized" })
        const { error, value } = jobSchemaValidation.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        if (error) return res.status(400).json({
            message: error.details.map((err) => err.message)
        })
        const company = await Company.findOne({ user: userId });
        console.log(company,userId);
        
        if (!company) return res.status(404).json({ message: "Company profile not found!"});
        const newJob = await Job.create({
            company:userId,
            ...value})

        return res.status(201).json({
            newJob
        })

    } catch (error) {
        next(error)
    }
}
const updateJob = async (req, res, next) => {
    try {
        const userId = req.userId;
        const userRole = req.userRole;
        const jobId = req.params.id;

        if (userRole !== "company") {
            return res.status(403).json({ message: "Unauthorized! Only companies can update jobs." });
        }

        
        const { error, value } = jobSchemaValidation.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            });
        }

        const companyProfile = await Company.findOne({ user: userId });
        if (!companyProfile) return res.status(404).json({ message: "Company profile not found!" });

    
        const updatedJob = await Job.findOneAndUpdate(
            { _id: jobId, company: companyProfile._id },
            value,
            { new: true, runValidators: true }
        );

        if (!updatedJob) {
            return res.status(404).json({ message: "Job not found or you are not authorized to update it." });
        }

        return res.status(200).json({
      
            message: "Job updated successfully",
            updatedJob
        });

    } catch (error) {
        next(error);
    }

    
}
const deleteJob = async (req, res, next) => {
    try {
        const userId = req.userId;
        const userRole = req.userRole;
        const jobId = req.params.id;

        if (userRole !== "company") {
            return res.status(403).json({ message: "Unauthorized! Only companies can delete jobs." });
        }

        const companyProfile = await Company.findOne({ user: userId });
        if (!companyProfile) return res.status(404).json({ message: "Company profile not found!" });

        const deletedJob = await Job.findOneAndDelete({ _id: jobId, company: companyProfile._id });

        if (!deletedJob) {
            return res.status(404).json({ message: "Job not found or you are not authorized to delete it." });
        }
        await Application.deleteMany({ job: jobId });

        return res.status(200).json({
          
            message: "Job and its related applications deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCompanyJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};

const { jobSchemaValidation } = require("./validation/jobVlidation")
const Job = require("../models/Job")
const Company = require("../models/Company")
const Application = require("../models/Application")
const { options } = require("joi")




const getAllJobs = async (req, res, next) => {
    try {

        const { search } = req.query
        let query = { status: "open" };
        if (search) {
            const campanies = await Company.find({ companyName: { $regex: search, $options: "i" } }).select("_id")
            // console.log(campanies);
            const matchedComId = campanies.map((com) => com.id)

            query.$or = [
                { company: { $in: matchedComId } },
                { title: { $regex: search, $options: "i" } },
                { category: { $regex: search, $options: "i" } },
                { workType: { $regex: search, $options: "i" } },
            ]
        }
        const jobs = await Job.find(query).populate("company", "companyName")
        console.log(jobs);

        if (!jobs || jobs.length === 0) {
            return res.status(200).json({ message: "There are no jobs yet", jobs: [], count: 0 });
        }
        const jobsCount = await Job.countDocuments(query);
        return res.status(200).json({ jobs: jobs, count: jobsCount })

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
        const company = await Company.findOne({ user: userId }).select("_id");
        // console.log(company, userId);

        if (!company) return res.status(404).json({ message: "Company profile not found!" });
        const newJob = await Job.create({
            company: company.id,
            ...value
        })

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

        // console.log(jobId);

        const { error, value } = jobSchemaValidation.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            });
        }

        const companyProfile = await Company.findOne({ user: userId }).select("_id");
        if (!companyProfile) return res.status(404).json({ message: "Company profile not found!" });

        // console.log(companyProfile.id);

        const updatedJob = await Job.findOneAndUpdate(
            { _id: jobId, company: companyProfile.id },
            value,
            { returnDocument: 'after', runValidators: true }
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

        const companyProfile = await Company.findOne({ user: userId }).select("_id");
        if (!companyProfile) return res.status(404).json({ message: "Company profile not found!" });

        const deletedJob = await Job.findOneAndDelete({ _id: jobId, company: companyProfile.id });

        if (!deletedJob) {
            return res.status(404).json({ message: "Job not found or you are not authorized to delete it." });
        }
        //if any one apply 
        await Application.deleteMany({ job: jobId });

        return res.status(200).json({

            message: "Job and its related applications deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};

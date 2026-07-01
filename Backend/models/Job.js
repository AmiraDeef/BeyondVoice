const mongoose = require("mongoose");
const { type } = require("../controllers/validation/companyProfileValidation");
const jobSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    title: {
        type: String,
        required: [true, 'Job title is required'],
        trim: true
    },
    desc: {
        type: String,
        required: [true, 'Job description is required'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Job category/industry is required'],
        trim: true
    },
    requirements: {
        type: String,
        required: [true, 'Requirements is required'],
        trim: true
    },
    workType: {
        type: String,
        enum: [
            "remote",
            "onsite",
            "hybrid"
        ]
    },
    salary: {
        type: Number,
        min: [500, "minimume salary 500"],
        default: 0
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    
    //for future work with sign language 

    // accessabilitySupport: {
    //     type: String,
    //     enum: [
    //         "textInterview",
    //         "writtenInstructions",
    //         "signLangueageInterview"
    //     ],
    //     required: [true, 'Accessability Support is required'],
    // }
}, { timestamps: true });
const Job = mongoose.model("Job", jobSchema)
module.exports = Job
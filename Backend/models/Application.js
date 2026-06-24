const mongoose = require("mongoose");
const { type } = require("../controllers/validation/companyProfileValidation");

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'interview', 'accepted', 'rejected'],
        default: 'pending'
    }, matchedScore: {
        type: Number,
        max: 100,
        default:0
    },
    // addition question before submit

    // additionNotes:{
    //     type: String,
    //    required: [true, 'This Field  is required'],
    //     trim: true
    // }
}, { timestamps: true });

//just one application job for one candidate
applicationSchema.index({ "job": 1, "candidate": 1 }, { unique: true })

const Application = mongoose.model("Application", applicationSchema)

module.exports = Application
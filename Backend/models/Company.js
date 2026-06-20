const { required } = require("joi")
const mongoose = require("mongoose")

const companySchema =new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    }, companyName: {
        type: String,
        required: [true, 'companyName is required'],
        trim: true
    }, desc: {
        type: String,
        trim: true
    },
    websiteUrl: {
        type: String
    }, industry: {
        required: [true, 'Industry is required'],
        type: String

    }, city: {
        type: String,
        required: [true, 'City is required'],
        trim: true
    },
    country: {
        type: String,
        required: [true, 'Country is required'],
        trim: true,
        default: "Egypt"
    },
    companySize: {
        type: Number,
        min: 0,
        default: 0
    },
    PWD: {
        type: Number,
        min: 0,
        default: 0
    },


},{ timestamps: true });
const Company = mongoose.model("Company", companySchema)
module.exports = Company;


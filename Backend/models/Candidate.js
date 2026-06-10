const mongoose=require("mongoose")

const candidateSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },title: {
        type: String,
        required: [true, 'Professional title is required'], 
        trim: true
    },
    skills: {
        type: [String], 
        required: true
    },
    experience: [
        {
            companyName: String,
            role: String,
            startDate: Date,
            endDate: Date,
            current: Boolean,
            description: String
        }
    ],
    education: [
        {
            institution: String, 
            degree: String,
            fieldOfStudy: String,
            graduationYear: Number
        }
    ],
    bio: {
        type: String,
        trim: true
    },
    resumeUrl: {
        type: String 
    },
    githubUrl: {
        type: String
    },
    linkedinUrl: {
        type: String
    },
    portfolioUrl:{
        type:String
    }
}, { timestamps: true });

const Candidate=mongoose.model("Candidate",candidateSchema)
module.exports=Candidate;


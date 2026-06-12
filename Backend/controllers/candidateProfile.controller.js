const Candidate = require("../models/Candidate")
const { candidateProfileSchema } = require("./validation/candidateProfileValidation")

const getProfile = async (req, res) => {
    try {

        const userId = req.user.id;
        const canProfile = await Candidate.findOne({ user: userId }).populate('user', 'fullName email profilePhoto')
        if (!canProfile) return res.status(404).json({ message: "Profile not found" })

        return res.status(200).json({ canProfile });

    } catch (error) {
        next(error)
    }

}

const createProfile = async (req, res, next) => {
    try {

        const { error, value } = candidateProfileSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }
        const userId = req.user.id;
        const alreadyHasProfile = await Candidate.findOne({ user: userId });
        if (alreadyHasProfile) {
            return res.status(400).json({ message: "Profile already exists!" });
        }

        const profile = await Candidate.create({
            user: userId,
            ...value
        });
     const populatedProfile = await profile.populate('user', 'fullName email profilePhoto');
        return res.status(201).json({
            message: "profile is competed",
            populatedProfile
        })

    } catch (error) {
        next(error)
    }
}

const updateProfile = async (req, res, next) => {
    try {

        const { error, value } = candidateProfileSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
            presence: 'optional'
        })
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }
        const userId = req.user.id;
      
       const updatedProfile = await Candidate.findOneAndUpdate(
            { user: req.user.id },
            { $set: value },
            { new: true, runValidators: true }
        );

        if (!updatedProfile) return res.status(404).json({ message: "Profile not found" });
     const populatedProfile = await updatedProfile.populate('user', 'fullName email profilePhoto');

        return res.status(200).json({ message: "Profile updated successfully", profile: populatedProfile });

    } catch (error) {
        next(error)
    }
}

const deleteProfile=async (req,res) => {
   const userId=req.user.id
       const canProfile = await Candidate.findOneAndDelete({ user: userId })
        if (!canProfile) return res.status(404).json({ message: "Profile not found" })

        return res.status(200).json({
            message:"profile is deleted successfully"
        })
        


    
}

module.exports={
    getProfile,createProfile,updateProfile,deleteProfile
}











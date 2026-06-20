const Candidate = require("../models/Candidate")
const User = require("../models/User")
const { candidateProfileSchema } = require("./validation/candidateProfileValidation")

const getProfile = async (req, res, next) => {
    try {

        const userId = req.userId;
        console.log(userId, req.userRole);

        const canProfile = await Candidate.findOne({ user: userId }).populate('user', 'fullName email profilePhoto')
        if (!canProfile) return res.status(404).json({ message: "Profile not found" })
        const proCount = {
            fullName: canProfile.user?.fullName ? 10 : 0,
            profilePhoto: canProfile.user?.profilePhoto ? 10 : 0,
            title: canProfile.title ? 15 : 0,
            bio: canProfile.bio ? 10 : 0,
            skills: canProfile.skills?.length > 0 ? 15 : 0,
            experience: canProfile.experience?.length > 0 ? 20 : 0,
            education: canProfile.education?.length > 0 ? 10 : 0,
            links: (canProfile.githubUrl || canProfile.linkedinUrl || canProfile.portfolioUrl) ? 10 : 0
        };
        const completeScore = proCount.fullName + proCount.bio + proCount.education + proCount.experience + proCount.links + proCount.profilePhoto + proCount.skills + proCount.title
        // console.log(completeScore)

        return res.status(200).json({ canProfile, completeScore });

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
        const userId = req.userId;
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
        const userId = req.userId;

        const updatedProfile = await Candidate.findOneAndUpdate(
            { user: userId },
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

const deleteProfile = async (req, res, next) => {
    try {
        const userId = req.userId
        const canProfile = await Candidate.findOneAndDelete({ user: userId })

        if (!canProfile) return res.status(404).json({ message: "Profile not found" })
        await User.findByIdAndDelete(userId);
        return res.status(200).json({
            message: "profile is deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getProfile, createProfile, updateProfile, deleteProfile
}











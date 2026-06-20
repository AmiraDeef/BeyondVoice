const Company=require("../models/Company")
const companyProSchema=require("./validation/companyProfileValidation")
const User=require("../models/User")

const getProfile = async (req, res, next) => {
    try {

        const userId = req.userId;
        console.log(userId, req.userRole);

        const campProfile = await Company.findOne({ user: userId }).populate('user', 'fullName email profilePhoto')
        if (!campProfile) return res.status(404).json({ message: "Profile not found" })
       
        return res.status(200).json({ campProfile });

    } catch (error) {
        next(error)
    }

}

const createProfile = async (req, res, next) => {
    try {

        const { error, value } = companyProSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }
        const userId = req.userId;
        const existingProfile = await Company.findOne({ user: userId });
        if (existingProfile) {
            return res.status(400).json({ message: "Profile already exists!" });
        }

        const profile = await Company.create({
            user: userId,
            ...value
        });
        const fullProfile = await profile.populate('user', 'fullName email profilePhoto');
        return res.status(201).json({
            message: "profile is competed",
            fullProfile
        })

    } catch (error) {
        next(error)
    }
}

const updateProfile = async (req, res, next) => {
    try {

        const { error, value } = companyProSchema.validate(req.body, {
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

        const updatedProfile = await Company.findOneAndUpdate(
            { user: userId },
            { $set: value },
            { new: true, runValidators: true }
        );

        if (!updatedProfile) return res.status(404).json({ message: "Profile not found" });
        const fullProfile = await updatedProfile.populate('user', 'fullName email profilePhoto');

        return res.status(200).json({ message: "Profile updated successfully", profile: fullProfile });

    } catch (error) {
        next(error)
    }
}

const deleteProfile = async (req, res, next) => {
    try {
        const userId = req.userId
        const campProfile = await Company.findOneAndDelete({ user: userId })

        if (!campProfile) return res.status(404).json({ message: "Profile not found" })
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











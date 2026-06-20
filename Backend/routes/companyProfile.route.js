const express=require("express")
const router=express.Router()

const {getProfile,createProfile,updateProfile,deleteProfile}=require("../controllers/companyProfile.controller")
const {authMiddleware}=require('../middlewares/authMiddleware')



router.get("/profile",authMiddleware,getProfile)
router.post("/profile",authMiddleware,createProfile)
router.put("/profile",authMiddleware,updateProfile)
router.delete("/profile",authMiddleware,deleteProfile)

module.exports=router
 
 const express=require("express")
 const router=express.Router()
 const{
    getCompanyJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}=require("../controllers/job.controller")
const {authMiddleware}=require('../middlewares/authMiddleware')


router.get("/",getCompanyJobs)
router.get("/:id",getJob)
router.post("/",authMiddleware,createJob)
router.put("/:id",authMiddleware,updateJob)
router.delete("/:id",authMiddleware,deleteJob)

module.exports=router
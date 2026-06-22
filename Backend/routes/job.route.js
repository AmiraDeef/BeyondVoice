 
 const express=require("express")
 const router=express.Router()
 const{
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}=require("../controllers/job.controller")
const {authMiddleware}=require('../middlewares/authMiddleware')


router.get("/",authMiddleware,getAllJobs)
router.get("/:id",authMiddleware,getJob)
router.post("/",authMiddleware,createJob)
router.put("/:id",authMiddleware,updateJob)
router.delete("/:id",authMiddleware,deleteJob)

module.exports=router
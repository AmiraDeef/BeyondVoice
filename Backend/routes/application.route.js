const express=require('express')
const router=express.Router()

const { getUserApplication,
    applyJob,
    upateApplicationState}=require("../controllers/application.controller")
//midd
const {authMiddleware}=require('../middlewares/authMiddleware')


router.get("/",authMiddleware,getUserApplication)
router.post("/apply",authMiddleware,applyJob)
router.put("/update/:id",authMiddleware,upateApplicationState)


module.exports=router
const joi=require("joi")


const registerSchema=joi.object({
    fullName:joi.string().min(10).max(100).required(),
    email:joi.string().email().required(),
    password:joi.string().min(6).max(30).required(),
    role: joi.string().valid('candidate', 'company', 'admin').required()
   
})

const loginSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(6).max(30).required()
})

module.exports={registerSchema,loginSchema}
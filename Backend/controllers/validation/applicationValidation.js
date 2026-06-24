const joi=require("joi")


const updateStateSchema=joi.object({
 
    status: joi.string().valid('pending', 'reviewed', 'interview', 'accepted', 'rejected').required()
   
})



const applyToJobSchema=joi.object({
    
 
    status: joi.string().valid('pending', 'reviewed', 'interview', 'accepted', 'rejected').required()
   
})


module.exports={
    updateStateSchema,
    applyToJobSchema
}
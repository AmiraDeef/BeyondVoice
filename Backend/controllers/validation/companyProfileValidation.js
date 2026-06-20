const joi =require("joi");

const companyProSchema=joi.object({
    companyName: joi.string().trim().required().messages({
        'string.empty': 'Company name is required.'
    }),
    desc: joi.string().trim().max(1000).allow(''),
    websiteUrl: joi.string().uri().allow('').messages({
        'string.uri': 'Please enter a valid website URL.'
    }),
   
    industry: joi.string().trim().required().messages({
        'string.empty': 'Industry field is required.'
    }),

    city: joi.string().trim().required().messages({
        'string.empty': 'City is required.'
    }),
    country: joi.string().trim().required().default('Egypt'),
    
 
    companySize: joi.number().integer().min(0).default(0),
    PWD: joi.number().integer().min(0).max(joi.ref('companySize')).default(0).messages({
        'number.max': 'PWD count cannot be greater than the total company size!'})


})

module.exports=companyProSchema
const joi = require("joi")

const candidateProfileSchema = joi.object({
    title: joi.string().trim().required().max(100).min(10).message({
        'string.empty': ' Title is required',
        'string.min': 'Title should be at least 3 characters'
    }),
    skills: Joi.array()
        .items(Joi.string()).min(1).required().messages({
            'array.min': 'Please add at least one skill'
        }),

    bio: Joi.string().max(500).optional(),

    experience: Joi.array().items(
        Joi.object({
            companyName: Joi.string().required(),
            role: Joi.string().required(),
            startDate: Joi.date().required(),
            endDate: Joi.date().allow(null),
            current: Joi.boolean().default(false),
            description: Joi.string().max(1000)
        })
    ).optional(),

    education: Joi.array().items(
        Joi.object({
            institution: Joi.string().required(),
            degree: Joi.string().required(),
            fieldOfStudy: Joi.string().required(),
            graduationYear: Joi.number().integer().min(1950).max(2028)
        })
    ).optional(),

    githubUrl: Joi.string().uri().optional().allow(''),
    linkedinUrl: Joi.string().uri().optional().allow(''),
    portfolioUrl: Joi.string().uri().optional().allow('')



})




module.exports={
   candidateProfileSchema
}
const joi = require("joi");

const jobSchemaValidation = joi.object({
   
    title: joi.string().trim().required().messages({
        'string.empty': 'Job title is required.'
    }),
    desc: joi.string().trim().required().messages({
        'string.empty': 'Job description is required.'
    }),
    category: joi.string().trim().required().messages({
        'string.empty': 'Job category/industry is required.'
    }),
    requirements: joi.string().trim().required().messages({
        'string.empty': 'Requirements are required.'
    }),
    workType: joi.string().valid('remote', 'onsite', 'hybrid').required().messages({
        'any.only': 'Work type must be either remote, onsite, or hybrid.'
    }),
    salary: joi.number().min(500).default(500).messages({
        'number.min': 'Minimum salary is 500.'
    }),
    status: joi.string().valid('open', 'closed').default('open')
});

module.exports = { jobSchemaValidation };
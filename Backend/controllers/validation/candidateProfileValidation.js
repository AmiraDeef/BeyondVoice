const joi = require("joi");

const candidateProfileSchema = joi.object({
  title: joi.string().trim().required().max(100).min(10).messages({
    "string.empty": " Title is required",
    "string.min": "Title should be at least 3 characters",
  }),
  skills: joi.array().items(joi.string()).min(1).required().messages({
    "array.min": "Please add at least one skill",
  }),

  bio: joi.string().max(500).optional(),

  experience: joi
    .array()
    .items(
      joi.object({
        companyName: joi.string().required(),
        role: joi.string().required(),
        startDate: joi.date().required(),
        endDate: joi.date().allow(null),
        current: joi.boolean().default(false),
        description: joi.string().max(1000),
      }),
    )
    .optional(),

  education: joi
    .array()
    .items(
      joi.object({
        institution: joi.string().required(),
        degree: joi.string().required(),
        fieldOfStudy: joi.string().required(),
        graduationYear: joi.number().integer().min(1950).max(2028),
      }),
    )
    .optional(),
  industry: joi.string().trim().required().messages({
    "string.empty": "Industry Field is required",
  }),
  githubUrl: joi.string().uri().optional().allow(""),
  linkedinUrl: joi.string().uri().optional().allow(""),
  portfolioUrl: joi.string().uri().optional().allow(""),
});

module.exports = {
  candidateProfileSchema,
};

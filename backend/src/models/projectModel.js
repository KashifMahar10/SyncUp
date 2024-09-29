const Joi = require('joi');

// Define the validation schema
const projectSchema = Joi.object({
    title: Joi.string().required()
});

// Function to validate the project data
const validateProject = (project) => {
    const { error, value } = projectSchema.validate(project); 
    if (error) {
        throw new Error(error.details[0].message);
    }
    return value; 
};

module.exports = { validateProject };

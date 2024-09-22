const Joi = require('joi');

// Define the schema
const userSchema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
});

// Validation function
const validateUser = (user) => {
    const { error, value } = userSchema.validate(user);
    if (error) {
        throw new Error(error.details[0].message);
    }
    return value; 
};

module.exports = { validateUser };

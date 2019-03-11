import Joi from 'joi';

function validateUser(user){
    const userSchema = {
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email({ minDomainAtoms: 2}).required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().min(6).required()
    };

    return Joi.validate(user, userSchema);
}


module.exports = validateUser;
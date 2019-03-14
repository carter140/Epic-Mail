import Joi from 'joi';
function validateLogin(req){
    const userSchema = {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    };

    return Joi.validate(req, userSchema);
}
module.exports=validateLogin;
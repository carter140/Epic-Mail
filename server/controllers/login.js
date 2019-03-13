import users from '../models/users';
import validate from '../helpers/loginValidation';

 const login=(req, res)=>{
    
    const {error} = validate(req.body);

    if(error){
    res.send({status: 400, error: error.details[0].message});
    return;
    }

    let user = users.find( email => email.email === req.body.email && email.password === req.body.password);
    if(!user) return res.send({ status: 400, error: 'User not found'});

    res.send( {status: 200, message: "Logged in successfully"});
}

module.exports=login;
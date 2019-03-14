import messages from '../models/messages';

const getOneMessage= (req, res) =>{
    const message = messages.find(c => c.id === parseInt(req.params.id));
    if(!message) return res.send({
        status:404,
        message: "the message with the given id is not available"
    });// object not found
    res.send(message);
}
export default getOneMessage;
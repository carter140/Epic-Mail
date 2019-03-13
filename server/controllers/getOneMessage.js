import messages from '../models/messages';
const getOneMessage= (req, res) =>{
    const message = messages.find(c => c.id === parseInt(req.params.id));
    if(!message) return res.send(404).send('The message with the given id was not found');// object not found
    res.send(message);
}
export default getOneMessage;
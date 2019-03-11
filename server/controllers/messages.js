
import moment from 'moment';
const messages = [
    {id: 1, subject: 'Hello', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '4',    receiverId: '2', parentMessageId:'12',status: 'unread'},
    {id: 2, subject: 'Hi', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '6', receiverId: '1', parentMessageId:'6',status: 'unread'},
    {id: 3, subject: 'Greetings', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '2', receiverId: '6', parentMessageId:'5',status: 'read'}
];

const newMessage=(req, res) => {

    //input Valiidation
      if(!req.body.msg || req.body.msg.length < 3)  return res.status(404).send('Name is required and should be minimum 3 characters.');
          // 404 bad request
        
          
      
        const message = {
          id: messages.length + 1,
          createdOn: moment(Date.now()),
          subject: req.body.subject,
          msg: req.body.msg,
          senderId: req.body.senderId,
          receiverId: req.body.receiverId,
          parentMessageId: req.body.parentMessageId,
          status: req.body.status
        };
        messages.push(message);
        res.send(message);
    }

export default newMessage;

import moment from 'moment';
import messages from '../models/messages';


const newMessage=(req, res) => {

    //input Valiidation
      if(!req.body.msg || req.body.msg.length < 3)  return res.status(404).send('Message is required and should be minimum 3 characters.');
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
        return res.send({
          status: 200,
          data: message
        });


    }

export default newMessage;
import express from 'express';
import moment from  'moment';
import signup from './signUp';
import login from './login';
import messageRoutes from './routes/messagesRoutes';
const app = express()

//this is needed to get access to request body
app.use(express.urlencoded({extended:false}));


// add a piece of middleware
app.use(express.json());

const messages = [
    {id: 1, subject: 'Hello', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '4',    receiverId: '2', parentMessageId:'12',status: 'unread'},
    {id: 2, subject: 'Hi', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '6', receiverId: '1', parentMessageId:'6',status: 'unread'},
    {id: 3, subject: 'Greetings', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '2', receiverId: '6', parentMessageId:'5',status: 'read'}
];

app.get('/', (req, res) => {
    res.send('welcome to epic mail version 1');
});

app.use('/api/auth/signup',signup)

app.use('/api/auth/login',login)

app.get('/api/messages', (req, res)=> {
  res.status(200).send({
      status : 200,
      data : messages 
    });      
   });

// new Data

app.use('/api/messages', messageRoutes);



app.delete('/api/messages/:id', (req, res) => {
  const message = messages.find(c => c.id === parseInt(req.params.id));
    if(!message) return res.send(404).send('The message with the given id was not found');

    const index = messages.indexOf(message);
    messages.splice(index, 1);

    res.send(message);
});

const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
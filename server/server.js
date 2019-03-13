import express from 'express';
import messageRoutes from './routes/messagesRoutes';
import usersRoutes from './routes/usersRoutes';
import messages from './models/messages';
const app = express()

//this is needed to get access to request body
app.use(express.urlencoded({extended:false}));

// add a piece of middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to epic mail version 1');
});

app.get('/api/messages', (req, res)=> {
  res.status(200).send({
      status : 200,
      data : messages 
    });      
   });

app.use('/api/messages', messageRoutes);
app.use('/api/auth', usersRoutes);

app.delete('/api/messages/:id', (req, res) => {
  const message = messages.find(c => c.id === parseInt(req.params.id));
    if(!message) return res.send(404).send('The message with the given id was not found');

    const index = messages.indexOf(message);
    messages.splice(index, 1);

    res.send(message);
});

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports=app;
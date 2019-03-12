import moment from 'moment';
const messages = [
    {id: 1, subject: 'Hello', msg: 'i would like to let you know that Andela is hiring', createdOn: moment(Date.now()), senderId: '4',    receiverId: '2', parentMessageId:'12',status: 'unread'},
    {id: 2, subject: 'Hi', msg: 'i would like to let you know that Andela is hiring', createdOn: moment(Date.now()), senderId: '6', receiverId: '1', parentMessageId:'6',status: 'unread'},
    {id: 3, subject: 'Greetings', msg: 'i would like to let you know that Andela is hiring', createdOn: moment(Date.now()), senderId: '2', receiverId: '6', parentMessageId:'5',status: 'read'}
];

module.exports = messages;



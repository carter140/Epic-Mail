'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _signUp = require('./signUp');

var _signUp2 = _interopRequireDefault(_signUp);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _messagesRoutes = require('./routes/messagesRoutes');

var _messagesRoutes2 = _interopRequireDefault(_messagesRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//this is needed to get access to request body
app.use(_express2.default.urlencoded({ extended: false }));

// add a piece of middleware
app.use(_express2.default.json());

var messages = [{ id: 1, subject: 'Hello', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '4', receiverId: '2', parentMessageId: '12', status: 'unread' }, { id: 2, subject: 'Hi', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '6', receiverId: '1', parentMessageId: '6', status: 'unread' }, { id: 3, subject: 'Greetings', msg: 'i would like to let you know that Andela is hiring', createdOn: 'moment(Date.now())', senderId: '2', receiverId: '6', parentMessageId: '5', status: 'read' }];

app.get('/', function (req, res) {
    res.send('welcome to epic mail version 1');
});

app.use('/api/auth/signup', _signUp2.default);

app.use('/api/auth/login', _login2.default);

app.get('/api/messages', function (req, res) {
    res.status(200).send({
        status: 200,
        data: messages
    });
});

// new Data

app.use('/api/messages', _messagesRoutes2.default);

app.delete('/api/messages/:id', function (req, res) {
    var message = messages.find(function (c) {
        return c.id === parseInt(req.params.id);
    });
    if (!message) return res.send(404).send('The message with the given id was not found');

    var index = messages.indexOf(message);
    messages.splice(index, 1);

    res.send(message);
});

var port = process.env.PORT || 6000;
app.listen(port, function () {
    return console.log('Listening on port ' + port + '...');
});
const express = require('express');
const server = express();

const authenticate = require('../auth/authnMiddleware.js');
const configureMiddleware = require('./config/configMiddleware');
const checkFor = require('../auth/checkfor.js');

const authRouter = require('../auth/auth-router.js');
const listingsRouter = require('../listings/listings-router.js');
const reservationsRouter = require('../reservations/reservations-router.js');

configureMiddleware(server);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'uppp' });
});
server.use('/api/auth', checkFor('username'), checkFor('password'), authRouter);
server.use('/api/listings', authenticate, listingsRouter);
server.use('/api/reserve', authenticate, reservationsRouter);

module.exports = server;

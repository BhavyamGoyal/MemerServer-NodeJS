const routes = require('express').Router();
const memeRoutes = require('./MemesRoutes');


routes.use('/memes', memeRoutes);

module.exports = routes;
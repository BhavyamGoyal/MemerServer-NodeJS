const routes = require('express').Router();

routes.get('/', function(req, res, next)
{
    res.send('Sending Data');
});

routes.get('/:id', function(req, res, next)
{
    res.send('Sending ID: '+ req.params.id);
});

module.exports = routes;
const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionsController = require('./controllers/SessionController');


routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/sessions', sessionsController.login);


module.exports = routes;
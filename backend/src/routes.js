const express = require('express')
const routes = express.Router()

const ongsController = require('./controllers/ongsController')
const incidentsController = require('./controllers/incidentsController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

routes.post('/sessions', sessionController.createSession)

routes.post('/ongs', ongsController.createOng)
routes.get('/ongs', ongsController.listOngs)
routes.get('/ongs/:id', ongsController.showOng)

routes.post('/incidents', incidentsController.createIncident )
routes.get('/incidents', incidentsController.listIncidents )
routes.delete('/incidents/:id', incidentsController.deleteIncident )

routes.get('/profile', profileController.index )

module.exports = routes

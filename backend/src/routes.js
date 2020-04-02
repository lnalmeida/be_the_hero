const express = require('express')
const routes = express.Router()
const { celebrate, Segments, Joi } = require('celebrate')

const ongsController = require('./controllers/ongsController')
const incidentsController = require('./controllers/incidentsController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

routes.post('/sessions', sessionController.createSession)

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(1),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required().min(1),
    uf: Joi.string().required().length(2)
  })
}), ongsController.createOng)
routes.get('/ongs', ongsController.listOngs)
routes.get('/ongs/:id', ongsController.showOng)

routes.post('/incidents', incidentsController.createIncident)
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), incidentsController.listIncidents)
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({ id: Joi.number().required() })
}), incidentsController.deleteIncident)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), profileController.index)

module.exports = routes

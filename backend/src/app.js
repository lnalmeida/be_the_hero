const express = require('express')
const routes = require('./routes')
// const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { errors } = require('celebrate')

const app = express()

app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.use(errors())
app.use(morgan('tiny'))

module.exports = app

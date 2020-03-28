const express = require('express')
const routes = require('./routes')
const port = 3333 || process.env.PORT
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(morgan('tiny'))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!!`))

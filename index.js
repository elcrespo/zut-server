const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bluebird = require('bluebird')

const config = require('./config')
const routes = require('./routes')
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

const app = express()
const cors = require('cors');

mongoose.Promise = bluebird
console.log('config.mongo.url', config.mongo.url);
mongoose.connect(config.mongo.url)

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))

// use JWT auth to secure the api
app.use(jwt())

app.use('/', routes)

// global error handler
app.use(errorHandler);

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`)
})

module.exports = app

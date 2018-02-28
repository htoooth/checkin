const express = require('express')
const bodyParser = require('body-parser')
const route = require('./server/route')
const cors = require('cors')
const timeout = require('connect-timeout')
const _ = require('lodash')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(timeout('5s'))

app.use(function(req, res, next) {
  res.error = function error(data) {
    res.json(Object.assign({
      code: 400,
      message: 'params wrong'
    }, data))
  }

  res.success = function(data) {
    res.json(Object.assign({
      code: 200,
      message: 'successful'
    }, data))
  }

  req.body = req.method.toUpperCase() === 'GET' ? req.query: req.body

  next()
})

app.use('/api/v1/yoho', cors(), route)

app.all('*', function(req, res, next) {
  res.json({
    code: 500,
    message: 'server wrong'
  })
})

app.use(function(err, req, res, next) {
  console.error(err)

  res.json({
    code: 500,
    message: err
  })
})

module.exports = app
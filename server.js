const express = require('express')
const server = express() 
const hbs = require('express-handlebars')

module.exports = server

server.get('/', (req, res) => {
  res.send('home', data)
})
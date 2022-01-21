const express = require('express') // imports
const recipesRouter = require('./recipes/recipes-router') // imports

const server = express() // server

server.use(express.json()) // server parse json

server.use('/api/recipes', recipesRouter) // server plugging into router

module.exports = server // exposing server
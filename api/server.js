const express = require('express') // imports
const recipesRouter = require('./recipes/recipes-router') // imports

const server = express() // server

server.use(express.json()) // server parse json

server.use('/api/recipes', recipesRouter) // server plugging into router, telling url what path to follow, continues following path on router

server.use('*', (req, res) => {
    res.json({ api: 'is working' }) // catch all endpoint goes after recipes router so that it catches anything that doesn't have an address for router to send to
})

module.exports = server // exposing server
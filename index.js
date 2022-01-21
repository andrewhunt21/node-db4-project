require('dotenv').config()

const server = require("./api/server.js") // pulling server in

const port = process.env.PORT // setting port with env

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`)) // running server
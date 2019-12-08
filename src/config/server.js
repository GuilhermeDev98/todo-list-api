const port = process.env.PORT || 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

//Middlewares

//ativa o body parser para todos as requisições
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
//server.use(cors)

//registra porta
server.listen(port, function(){
    console.log(`Backend sendo executado na porta ${port}`)
})

module.exports = server

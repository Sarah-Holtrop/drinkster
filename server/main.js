import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
import DbContext from './dbconfig'

const server = express()

DbContext.connect()
var port = process.env.PORT || 3000
server.use(express.static(__dirname + '/../client/dist'))

var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted)
  },
  credentials: true
};

server.use(cors(corsOptions))

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

import AuthController from './controllers/AuthController'
import Session from "./middleware/session"
server.use(new Session().express)
server.use('/account', new AuthController().router)

// Register other routes here
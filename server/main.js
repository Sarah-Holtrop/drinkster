import express from 'express'
import cors from 'cors'
import bp from 'body-parser'
import DbContext from './dbconfig'

const server = express()

DbContext.connect()
var port = process.env.PORT || 3000
server.use(express.static(__dirname + '/../client/dist'))

var whitelist = ['http://localhost:8080', 'http://localhost:3000/api'];
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

// Register your session
import AuthController from './controllers/AuthController'
import Session from "./middleware/session"
server.use(new Session().express)
server.use('/account', new AuthController().router)


// Register other routes here
import CreatedDrinksController from './controllers/CreatedDrinksController.js'
import FavoriteDrinksController from './controllers/FavoriteDrinksController.js'

server.use('/api/createdDrinks', new CreatedDrinksController().router)
server.use('/api/favoritedDrinks', new FavoriteDrinksController().router)


// Default error handler
server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})

server.listen(port, () => {
  console.log('Server is running on port: ', port)
})
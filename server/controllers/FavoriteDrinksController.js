import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import _favoriteDrinksService from '../services/FavoriteDrinksService.js'

export default class FavoriteDrinksController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAllFavoriteDrinksByUserId)
  }
  async getAllFavoriteDrinksByUserId(req, res, next) {
    try {
      let data = await _favoriteDrinksService.find({ userId: req.session.uid })
      return res.send(data)
    } catch (error) { next(error) }
  }
  async saveFavoriteDrink(req, res, next) {
    try {
      let data = await _favoriteDrinksService.post()
    } catch (error) { next(error) }
  }
}
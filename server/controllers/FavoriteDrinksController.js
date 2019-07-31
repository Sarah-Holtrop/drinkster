import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import _favoriteDrinksService from '../services/FavoriteDrinksService.js'

export default class FavoriteDrinksController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAllFavoriteDrinksByUserId)
      .delete('/:id', this.deleteOneFavoriteDrink)
      // need userId to post newFavoriteDrink
      .post('', this.saveNewFavoriteDrink)
  }
  async getAllFavoriteDrinksByUserId(req, res, next) {
    try {
      let data = await _favoriteDrinksService.find({ userId: req.session.uid })
      return res.send(data)
    } catch (error) { next(error) }
  }
  // NOTE Waiting for model from front end on SaveToFavorites or whatever
  async saveNewFavoriteDrink(req, res, next) {
    try {
      let data = await _favoriteDrinksService.post()
    } catch (error) { next(error) }
  }
  async deleteOneFavoriteDrink(req, res, next) {
    try {
      await _favoriteDrinksService.findOneAndRemove({ drinkId: req.params.idDrink, userId: req.session.uid })
      return res.send("Successfully deleted!")
    } catch (error) { next(error) }
  }
}
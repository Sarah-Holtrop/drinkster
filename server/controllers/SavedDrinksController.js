import _savedDrinkService from '../services/SavedDrinksService.js'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

export default class SavedDrinksController {
  constructor() {
    .post('', this.createDrink)

  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async createDrink(req, res, next) {
    try {
      req.body.drinkId = req.session.uid
      let data = await _savedDrinkService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
}
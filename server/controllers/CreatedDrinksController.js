import _createdDrinksService from '../services/CreatedDrinksService.js'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

export default class CreatedDrinksController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAllCreatedDrinksByUserId)
      .post('', this.createDrink)
      .delete('/:id', this.deleteDrink)
      .put('/:id', this.editDrink)

  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async createDrink(req, res, next) {
    try {
      req.body.userId = req.session.uid
      let data = await _createdDrinksService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async deleteDrink(req, res, next) {
    try {
      await _createdDrinksService.findOneAndRemove({ _id: req.params.id, userId: req.session.uid })
      return res.send("Successfully deleted")
    } catch (error) { { next(error) } }
  }
  async editDrink(req, res, next) {
    try {
      let data = await _createdDrinksService.findOneAndUpdate({ _id: req.params.id, userId: req.session.uid }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) {
      next(error)
    }
  }
  async getAllCreatedDrinksByUserId(req, res, next) {
    try {
      // console.log(req.session.uid)
      let data = await _createdDrinksService.find({ userId: req.session.uid })
      return res.send(data)
    } catch (error) { next(error) }
  }
}

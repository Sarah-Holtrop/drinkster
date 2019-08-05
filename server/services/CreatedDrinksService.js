import mongoose from "mongoose"


let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let _ingredients = new Schema({
  name: { type: String, required: true }
})

let _schema = new Schema({
  title: { type: String, required: true },
  ingredients: [_ingredients],
  instructions: { type: String, required: true },
  description: { type: String, required: true },
  // drinkCategory: { type: String, required: true },
  userId: { type: ObjectId, ref: 'User', required: true },
  img: { type: String }
})

export default mongoose.model('CreatedDrinks', _schema)
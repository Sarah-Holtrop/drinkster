import mongoose from "mongoose"


let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  description: { type: String, required: true },
  drinkCategory: { type: String, required: true },
  userId: { type: ObjectId, ref: 'User', required: true },
  img: { type: String }
})

export default mongoose.model('CreatedDrinks', _schema)
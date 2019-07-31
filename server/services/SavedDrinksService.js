import mongoose from "mongoose"


let Schema = mongoose.Schema
Let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  description: { type: String, required: true },
  drinkCategory: { type: String, required: true },
  drinkId: { type: ObjectId, ref: 'User', required: true },
  img: { type: String }
  // drink has a thumbnail on api drinkThumb { type: String, required: true }
})

export default mongoose.model('SavedDrinks', _schema)
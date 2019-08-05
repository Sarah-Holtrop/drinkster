import mongoose from 'mongoose'

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  drinkId: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true }
})
export default mongoose.model('FavoritedDrinks', _schema)

// new model on front end to match our back-end naming conventions, all names change when user favorites
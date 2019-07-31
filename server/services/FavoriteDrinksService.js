import mongoose from 'mongoose'

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  drinkId: { type: String },
  name: { type: String },
  image: { type: String }
})
export default mongoose.model('FavoritedDrinks', _schema)

// new model on front end to match our back-end naming conventions, all names change when user favorites
import mongoose from "mongoose"

mongoose.set('useNewUrlParser', true);
mongoose.set("useFindAndModify", false);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

const connectionString = "mongodb+srv://student:student@cluster0-x0n3g.mongodb.net/Drinkster?retryWrites=true&w=majority"

export default class dbContext {
  static async connect() {
    try {
      let status = await mongoose.connect(connectionString)
      console.log("CONNECTED!")
      return status
    } catch (err) {
      console.error(err)
    }
  }
}
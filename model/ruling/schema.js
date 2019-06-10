const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rulingSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  closeDate: { type: Date },
  imgPath: {type: String}
})

module.exports = rulingSchema

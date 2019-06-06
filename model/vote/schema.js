const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
})

module.exports = voteSchema

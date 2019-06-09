const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
  vote: { type: String, enum: ['-1', '1'], required: true },
  user:  {type: Schema.Types.ObjectId, ref: 'User', required: true},
  ruling:  {type: Schema.Types.ObjectId, ref: 'Ruling', required: true},
})

module.exports = voteSchema

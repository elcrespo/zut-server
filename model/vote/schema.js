const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
  vote: { type: Number, enum: [-1, 1] },
  user:  {type: Schema.Types.ObjectId, ref: 'User'},
  ruling:  {type: Schema.Types.ObjectId, ref: 'Ruling'},
})

module.exports = voteSchema

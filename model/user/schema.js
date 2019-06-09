const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  marrieageStatus: { type: Schema.Types.ObjectId,  ref: 'MarriageStatus', required: true },
  birthdate: {type: Date, required: true}
});

module.exports = userSchema

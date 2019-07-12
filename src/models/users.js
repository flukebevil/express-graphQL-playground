const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  surname: String,
  age: Number,
  sex: String
});

module.exports = mongoose.model("user", User);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { user } = require("./config");

module.exports = mongoose.model("user", new Schema(user));

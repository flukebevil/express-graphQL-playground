const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const payload = require("./config");

module.exports = mongoose.model("movie", new Schema(payload.movie));

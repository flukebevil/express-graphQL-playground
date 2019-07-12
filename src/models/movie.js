const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const payload = require("./constant");

const MovieSchema = new Schema(payload.movie);

module.exports = mongoose.model("movie", MovieSchema);

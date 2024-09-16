const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const imageSchema = new Schema({
    url: String
})

module.exports = model("Image", imageSchema);
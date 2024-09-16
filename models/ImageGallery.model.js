const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const imageGallerySchema = new Schema({
    images: [{
        _id: {type: Schema.Types.ObjectId, require: true}, // Image ID
        url: {type: String, required: true} //Images URL
    }]
})

module.exports = model("ImageGallery", imageGallerySchema);

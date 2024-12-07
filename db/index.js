// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
console.log('yy MONGO 🚕🚕🚕🚕', process.env.MONGODB_URI)


const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project-management-server";
// const MONGO_URI = "mongodb+srv://alexanderley:S9bmz2e8JjaGifOG@cluster0.6lf1q.mongodb.net/?retryWrites=true&w=majority&";
// const MONGO_URI = "mongodb+srv://alexanderley:S9bmz2e8JjaGifOG@cluster0.6lf1q.mongodb.net/imageProject?retryWrites=true&w=majority&appName=Cluster0";


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

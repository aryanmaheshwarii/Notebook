const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://kartikgoyal794:kartikgoyal794@cluster0.a2iax33.mongodb.net/Notes?retryWrites=true&w=majority"

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    console.log("connect to Mongo successfully");
}

module.exports = connectToMongo;
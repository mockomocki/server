const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    movietitle: String,
    review: String, 
    rating: String
})

module.exports = mongoose.model('movie', movieSchema);
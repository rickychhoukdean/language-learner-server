const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('picture', pictureSchema);
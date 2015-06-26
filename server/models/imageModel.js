var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: String,
    description: String,
    filename: String,
    path: String
});

var Image = mongoose.model('Image', imageSchema);
/**
 * Created by pmfarnsw on 5/6/15.
 */
var mongoose = require('mongoose');
var Image = mongoose.model('Image');

exports.index = function(req, res){
    res.render('index');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};

exports.getImages = function(req, res) {
    Image.find(function(err, images) {
        if (err) {
            return console.error(err);
        } 
        res.send(images);
    });
    
};
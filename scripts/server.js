var express = require('express');

var app = express();
app.use(express.static(__dirname + '/app')); //where your static content is located in your filesystem
app.listen(process.env.PORT || 3000);
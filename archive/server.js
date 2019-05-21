
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json()); 

// require('./express/routes/routes')(app)    <---- commented this out, it wasn't working otherwise

app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(8000, function() {
    console.log("listening on 8000")
})

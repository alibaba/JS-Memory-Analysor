var express = require("express");
var app = express();
var path = require("path");
var program = require("commander")


var port = process.argv[3] || 9999;

app.use(express.static(path.join(__dirname, 'front_end')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './front_end/inspector.html'));
});

app.listen(port, function(){
    console.log(`Please Visit URL: http://127.0.0.1:${port} with Chrome Browser`);
});





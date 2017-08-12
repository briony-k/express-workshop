var fs = require('fs');

var express = require('express');

var app = express();

var formidable = require('express-formidable');




app.use(express.static("public")); 

app.use(formidable());

app.post('/create-post',function(req,res){console.log(req.fields)});


app.listen(8080, function () {
  console.log('Server is listening on port 8080. Ready to accept requests!');
});
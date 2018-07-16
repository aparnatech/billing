var express = require('express');
var app = express();
var ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));
var db = null;
MongoClient.connect("mongodb://localhost:27017/mittens", function(err, dbconn) {
  if(!err) {
    console.log("we are connected");
    db=dbconn;
    }
});

app.get('/lines',function(req, res, next) {

  db.collection('lines',function(err, linescollection) {

    linescollection.find().toArray(function(err, lines) {

      return res.json(lines);

    });
  });
});

app.post('/lines', function(req, res, next) {

  db.collection('lines', function(err, linescollection) {

    var newlines = {
    text: req.body.newlines
  };

  linescollection.insert(newlines, {w:1}, function(err) {
    return res.send();
    });
  });

});

app.put('/lines/remove', function(req, res, next) {

  db.collection('lines', function(err, linescollection) {
    var newlinesId = req.body.line._id;
    linescollection.remove({_id: ObjectId(newlinesId)}, {w:1}, function(err, result) {
      return res.send();
    });
  });
});


app.listen(3000,function() {
console.log('Example app listening on port 3000');
});

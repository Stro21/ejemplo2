var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    tropasModels = require("./node_modules/models/tropasModelo");

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

router.get('/perro', function(req, res) {
   res.send("Hello Perro!");
});


app.use(router);

mongoose.connect('mongodb://localhost/tropas', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});

var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    tropasModels = require("./node_modules/models/tropasModelo")
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

router.get('/perro', function(req, res) {
   res.send("Hello Perro!");
});

router.post('/evento', function(req, res, next){
	var nuevoEvento = new Evento({
		nombreUsurio: req.decoded._doc.nombreUsuario,
	    categoria: req.body.categoria,
	    descripcion: req.body.descripcion

	});

	nuevoEvento.save(function(err, evento) {
		if(err) return res.send(500, err.message);

                res.json(evento);
	});
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

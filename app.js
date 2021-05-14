const express = require( 'express' );
const morgan = require('morgan'); 
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const bodyParser = require('body-parser')
const socketio = require('socket.io');
const app = express(); 


// Configurando Nunjucks
app.set('view engine', 'html'); 
app.engine('html', nunjucks.render); 
nunjucks.configure('views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(morgan('tiny'))
app.use(express.static('./public'))

var server = app.listen(3000, ()=> {
    console.log("Escuchando en: http://localhost:3000");
});

//socket.io
var io = socketio(server);
app.use('/', routes(io));


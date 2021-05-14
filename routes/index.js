const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

module.exports = router;

// // digamos que el cliente pide un GET a /users/guille
// router.get( '/users/:name', function (req, res) {
//     console.log( req.params.name ); // --> 'guille'
//   });

// tweetBank.add("pipo", "Holis ke tul?")
// tweetBank.add("alber", "Re piola vagooo")
// tweetBank.add("brayan", "con 5 peso me hago alto guiso")
// tweetBank.add("yenny", "awantiiiiiiiaaaaaaaaaaaa")

router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( { name: name } );
    res.render( 'index', { tweets: list, showForm: true, twitero: name } );
  });

  router.get('/tweets/:id', function(req, res) {
    var id = Number(req.params.id);
    var list = tweetBank.find( { id: id } );
    res.render( 'index', { tweets: list } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

const _ = require('lodash');

const data = [];

let contadorDeId = 1;

function add (name, content) {
    
    data.push({ name: name, content: content, id: contadorDeId});
    contadorDeId++
  }
  function list () {
    return _.cloneDeep(data);
  }
  function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }
  module.exports = { add: add, list: list, find: find };

//   add("pipo", "Holis ke tul?")
// add("alber", "Re piola vagooo")
// add("brayan", "con 5 peso me hago alto guiso")
// add("yenny", "awantiiiiiiiaaaaaaaaaaaa")

// console.log(find({id: 2}))


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Lojista = new Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  lojista: {
    type: String,
    require: true
  },
  endereco: {
    type: String,
    require: true
  },
  cidade: {
    type: String,
    require: true
  },
  estado: {
    type: String,
    require: true
  },
  cep: {
    type: String,
    require: true
  }
},
{
  timestamps: true
});

mongoose.model('lojista', Lojista);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cadastro = new Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  fornecedor: {
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

mongoose.model('cadastro', Cadastro);
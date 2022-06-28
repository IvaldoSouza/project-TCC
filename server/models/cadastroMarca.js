const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Marca = new Schema({
  id: {
    type: String,
    require: true
  },
  marca: {
    type: String,
    require: true
  },
  nota: {
    type: String,
    require: true
  },
  fabricante: {
    type: String,
    require: true
  },
  fornecedor: {
    type: String,
    require: true
  },
},
{
  timestamps: true
});

mongoose.model('marca', Marca);
const mongoose = require('mongoose')
const { Schema } = mongoose

const TramiteSchema = new Schema({
  tramite_id: {
    type: Number,
    require: true
  },
  personal_id: {
    type: Number,
    require: true
  },
  boveda_id: {
    type: Number,
    require: true
  },
  propietario_id: {
    type: Number,
    require: true
  },
  tramite_fecha: {
    type: Date,
  },
  tramite_tipo: {
    type: String,
  },
  tramite_cantidad: {
    type: Number,
  }
}, { versionKey: false })

module.exports = mongoose.model('tramite', TramiteSchema)
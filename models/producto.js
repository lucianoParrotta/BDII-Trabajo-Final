const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  categoria: String,
  precio: Number,
  stockActual: { type: Number, default: 0 },
  stockMinimo: { type: Number, default: 0 },
  proveedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' },
  fechaUltimaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', productoSchema);
const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  contacto: String,
  telefono: String,
  email: String,
  productosOfrecidos: [String] // códigos de producto
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
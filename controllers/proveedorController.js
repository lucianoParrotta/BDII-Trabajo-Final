const Proveedor = require('../models/proveedor');

exports.listarProveedores = async (req, res) => {
  const proveedores = await Proveedor.find();
  res.render('proveedores', { proveedores });
};

exports.formNuevoProveedor = (req, res) => {
  res.render('nuevoProveedor');
};

exports.crearProveedor = async (req, res) => {
  try {
    const { nombre, contacto, telefono, email, productosOfrecidos } = req.body;

    const nuevoProveedor = new Proveedor({
      nombre,
      contacto,
      telefono,
      email,
      productosOfrecidos: productosOfrecidos.split(',').map(c => c.trim())
    });

    await nuevoProveedor.save();
    res.redirect('/proveedores');
  } catch (err) {
    res.status(500).send("Error al guardar proveedor: " + err.message);
  }
};
const Producto = require('../models/producto');

exports.listarProductos = async (req, res) => {
  const productos = await Producto.find();
  res.render('index', { productos });
};

exports.formNuevoProducto = (req, res) => {
  res.render('nuevoProducto');
};

exports.crearProducto = async (req, res) => {
  try {
    const { codigo, nombre, categoria, precio, stockActual, stockMinimo } = req.body;
    const nuevoProducto = new Producto({
      codigo,
      nombre,
      categoria,
      precio: parseFloat(precio),
      stockActual: parseInt(stockActual),
      stockMinimo: parseInt(stockMinimo),
      fechaUltimaActualizacion: new Date()
    });
    await nuevoProducto.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).send("Error al guardar producto: " + error.message);
  }
};

exports.formConsultarStock = (req, res) => {
  res.render('consultarStock', { producto: null, error: null });
};

exports.consultarStock = async (req, res) => {
  const { codigo } = req.body;

  try {
    const producto = await Producto.findOne({ codigo });

    if (!producto) {
      return res.render('consultarStock', {
        producto: null,
        error: 'Producto no encontrado con ese código.'
      });
    }

    res.render('consultarStock', { producto, error: null });
  } catch (err) {
    res.render('consultarStock', {
      producto: null,
      error: 'Ocurrió un error al buscar el producto.'
    });
  }
};

exports.productosStockBajo = async (req, res) => {
  try {
    const productos = await Producto.find({
      $expr: { $lt: ["$stockActual", "$stockMinimo"] }
    });

    res.render('stockBajo', { productos });
  } catch (err) {
    res.status(500).send("Error al obtener productos con stock bajo: " + err.message);
  }
};



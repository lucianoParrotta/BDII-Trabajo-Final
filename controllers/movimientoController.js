const Movimiento = require('../models/movimiento');
const Producto = require('../models/producto');

exports.formNuevoMovimiento = async (req, res) => {
  const productos = await Producto.find();
  res.render('nuevoMovimiento', { productos });
};

exports.registrarMovimiento = async (req, res) => {
  try {
    const { productoId, tipo, cantidad, motivo, usuario } = req.body;
    const producto = await Producto.findById(productoId);

    if (!producto) {
      return res.status(404).send("Producto no encontrado");
    }

    const cantidadNum = parseInt(cantidad);

    if (tipo === 'entrada') {
      producto.stockActual += cantidadNum;
    } else if (tipo === 'salida') {
      if (producto.stockActual < cantidadNum) {
        return res.status(400).send("Stock insuficiente para salida");
      }
      producto.stockActual -= cantidadNum;
    }

    producto.fechaUltimaActualizacion = new Date();
    await producto.save();

    const nuevoMovimiento = new Movimiento({
      productoId,
      tipo,
      cantidad: cantidadNum,
      motivo,
      usuario
    });
    await nuevoMovimiento.save();

    res.redirect('/');
  } catch (err) {
    res.status(500).send("Error al registrar movimiento: " + err.message);
  }
};

exports.formReporteMovimientos = (req, res) => {
  res.render('reporteMovimientos', { movimientos: null });
};

exports.reporteMovimientos = async (req, res) => {
  const { fechaInicio, fechaFin } = req.body;

  try {
    const movimientos = await Movimiento.find({
      fecha: {
        $gte: new Date(fechaInicio),
        $lte: new Date(fechaFin)
      }
    }).populate('productoId');

    res.render('reporteMovimientos', { movimientos });
  } catch (err) {
    res.status(500).send("Error al generar el reporte: " + err.message);
  }
};

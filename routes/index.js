const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');
const movimientoController = require('../controllers/movimientoController');

const proveedorController = require('../controllers/proveedorController');

// Productos
router.get('/', productoController.listarProductos);
router.get('/productos/nuevo', productoController.formNuevoProducto);
router.post('/productos', productoController.crearProducto);

// Consultar stock por código
router.get('/productos/consultar-stock', productoController.formConsultarStock);
router.post('/productos/consultar-stock', productoController.consultarStock);

// Stock bajo
router.get('/productos/stock-bajo', productoController.productosStockBajo);


// Movimientos
router.get('/movimientos/nuevo', movimientoController.formNuevoMovimiento);
router.post('/movimientos', movimientoController.registrarMovimiento);

// Reporte de movimientos
router.get('/movimientos/reporte', movimientoController.formReporteMovimientos);
router.post('/movimientos/reporte', movimientoController.reporteMovimientos);

// Proveedores
router.get('/proveedores', proveedorController.listarProveedores);
router.get('/proveedores/nuevo', proveedorController.formNuevoProveedor);
router.post('/proveedores', proveedorController.crearProveedor);



module.exports = router;
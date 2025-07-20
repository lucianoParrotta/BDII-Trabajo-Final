require('dotenv').config();
const mongoose = require('mongoose');
const Producto = require('./models/producto');
const Proveedor = require('./models/proveedor');
const Movimiento = require('./models/movimiento');

async function init() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Limpiar colecciones
    await Producto.deleteMany();
    await Proveedor.deleteMany();
    await Movimiento.deleteMany();

    // Crear proveedores
    const proveedor1 = await Proveedor.create({
      nombre: "Distribuidora Tech",
      contacto: "Juan López",
      telefono: "+1234567890",
      email: "ventas@distritech.com",
      productosOfrecidos: ["PROD001", "PROD002", "PROD004"]
    });

    const proveedor2 = await Proveedor.create({
      nombre: "Importadora Gadgets",
      contacto: "María Gómez",
      telefono: "+0987654321",
      email: "contacto@gadgets.com",
      productosOfrecidos: ["PROD003", "PROD005"]
    });

    // Crear productos
    const producto1 = await Producto.create({
      codigo: "PROD001",
      nombre: "Laptop HP",
      categoria: "Electrónicos",
      precio: 799.99,
      stockActual: 15,
      stockMinimo: 5,
      proveedorId: proveedor1._id,
      fechaUltimaActualizacion: new Date()
    });

    const producto2 = await Producto.create({
      codigo: "PROD002",
      nombre: "Mouse Logitech",
      categoria: "Electrónicos",
      precio: 25.50,
      stockActual: 10,
      stockMinimo: 3,
      proveedorId: proveedor1._id,
      fechaUltimaActualizacion: new Date()
    });

    const producto3 = await Producto.create({
      codigo: "PROD003",
      nombre: "Auriculares Sony",
      categoria: "Audio",
      precio: 99.99,
      stockActual: 2,
      stockMinimo: 4,
      proveedorId: proveedor2._id,
      fechaUltimaActualizacion: new Date()
    });

    const producto4 = await Producto.create({
      codigo: "PROD004",
      nombre: "Teclado Mecánico Redragon",
      categoria: "Periféricos",
      precio: 59.99,
      stockActual: 6,
      stockMinimo: 3,
      proveedorId: proveedor1._id,
      fechaUltimaActualizacion: new Date()
    });

    const producto5 = await Producto.create({
      codigo: "PROD005",
      nombre: "Smartwatch Xiaomi",
      categoria: "Wearables",
      precio: 120.00,
      stockActual: 1,
      stockMinimo: 3,
      proveedorId: proveedor2._id,
      fechaUltimaActualizacion: new Date()
    });

    // Crear movimientos
    await Movimiento.insertMany([
      {
        productoId: producto1._id,
        tipo: "entrada",
        cantidad: 10,
        motivo: "Compra inicial",
        fecha: new Date(),
        usuario: "admin"
      },
      {
        productoId: producto2._id,
        tipo: "salida",
        cantidad: 2,
        motivo: "Venta",
        fecha: new Date(),
        usuario: "admin"
      },
      {
        productoId: producto3._id,
        tipo: "salida",
        cantidad: 1,
        motivo: "Venta",
        fecha: new Date(),
        usuario: "admin"
      },
      {
        productoId: producto4._id,
        tipo: "entrada",
        cantidad: 4,
        motivo: "Reposición",
        fecha: new Date(),
        usuario: "admin"
      },
      {
        productoId: producto5._id,
        tipo: "salida",
        cantidad: 2,
        motivo: "Descuento especial",
        fecha: new Date(),
        usuario: "admin"
      }
    ]);

    console.log("Base de datos inicializada con 5 productos y 5 movimientos.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error al inicializar:", error);
  }
}

init();

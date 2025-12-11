# Consigna General

Se debe elegir alguno (solo uno) de los proyectos del documento de los proyectos elegibles. En el README.md se debe aclarar cuál de los proyectos es el que se implementó. Se admite el uso de Python con PyMongo o de Node.js (Javascript) con Mongoose. En el README.md se debe aclarar también esta elección.

La interface de uso puede ser la consola (o terminal), una app web o una API. Cualquiera de estas opciones es admisible y debe aclararse en el README.md del proyecto.


## Consign del Paroyecto Elegido Entre los Disponibles:

# Proyecto 4: Sistema de Inventario de Tienda

**Dificultad:** ⭐⭐⭐

## Descripción

Desarrollar un sistema de gestión de inventario para una tienda que
permita administrar productos, proveedores y controlar los movimientos
de stock (entradas y salidas).

## Objetivos del Proyecto

-   Modelar una base de datos NoSQL orientada a documentos.
-   Implementar lógica de negocio para la actualización automática de
    stock.
-   Generar reportes y alertas basados en el estado del inventario.

## Requerimientos Funcionales

-   [ ] **Catálogo de Productos:** CRUD de productos visualizando su
    stock actual.
-   [ ] **Gestión de Proveedores:** Registro de proveedores y
    vinculación con sus productos.
-   [ ] **Control de Movimientos:** Registro histórico de todas las
    entradas y salidas de mercancía.
-   [ ] **Sistema de Alertas:** Detección automática de productos con
    stock crítico.

## Estructura de Datos (Esquema Sugerido)

### 1. Colección: productos

``` json
{
  "_id": "ObjectId",
  "codigo": "PROD001",
  "nombre": "Laptop HP",
  "categoria": "Electrónicos",
  "precio": 799.99,
  "stockActual": 15,
  "stockMinimo": 5,
  "proveedorId": "ObjectId",
  "fechaUltimaActualizacion": "2023-10-01T00:00:00Z"
}
```

### 2. Colección: movimientos

``` json
{
  "_id": "ObjectId",
  "productoId": "ObjectId",
  "tipo": "entrada",
  "cantidad": 10,
  "motivo": "Compra a proveedor",
  "fecha": "2023-10-02T00:00:00Z",
  "usuario": "admin"
}
```

### 3. Colección: proveedores

``` json
{
  "_id": "ObjectId",
  "nombre": "Distribuidora Tech",
  "contacto": "Juan López",
  "telefono": "+1234567890",
  "email": "ventas@distritech.com",
  "productosOfrecidos": ["PROD001", "PROD002"]
}
```

## Tareas a Implementar

### Gestión de Inventario

-   [ ] **agregarProducto(producto)** --- Añadir un nuevo producto al
    catálogo validando que el código no exista.
-   [ ] **registrarMovimiento(movimiento)** --- Registrar una entrada o
    salida y actualizar el stock.

### Consultas y Reportes

-   [ ] **consultarStock(codigo)** --- Devolver el stock actual de un
    producto.
-   [ ] **productosStockBajo()** --- Listar productos con stock bajo.
-   [ ] **reporteMovimientos(fechaInicio, fechaFin)** --- Generar
    listado de movimientos en un rango de fechas.

## Entregables

-   Código fuente con las funciones implementadas.
-   Script de población de datos (seed) para pruebas.

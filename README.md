# Sistema de Inventario de Tienda

Este proyecto corresponde al Trabajo Práctico Final de la materia **Base de Datos 2**.

## Proyecto Elegido
**Proyecto 4: Sistema de Inventario de Tienda**  
(Gestión de inventario para una tienda con productos, proveedores y movimientos de stock)

## Tecnologías Utilizadas
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **EJS**
- **CSS**

## Tipo de Interfaz
Este proyecto fue desarrollado como una **app web**, accesible desde el navegador.

---

## Estructura del Sistema

### Entidades y relaciones principales:
- **Productos**
- **Proveedores**
- **Movimientos de Stock**

### Funcionalidades implementadas:
- Agregar producto
- Agregar proveedor
- Registrar entrada o salida de stock
- Consultar stock de un producto por su código
- Listar productos con stock bajo (por debajo del mínimo)
- Reporte de movimientos dentro de un rango de fechas
- Listar todos los proveedores

---

## Instrucciones de instalación detalladas

### 1. Clonar el repositorio o descargar el proyecto
```bash
git clone https://github.com/lucianoParrotta/BDII-Trabajo-Final.git
cd PROYECTO-FINAL-BD2-MAIN
```

### 2. Instalar Node.js y MongoDB
- Descargar Node.js: https://nodejs.org
- Descargar MongoDB Community Server: https://www.mongodb.com/try/download/community

Asegurarse de que MongoDB esté corriendo localmente:
```bash
net start MongoDB
```

### 3. Instalar dependencias del proyecto
```bash
npm install
```

### 4. Crear el archivo `.env` en la raíz del proyecto:
```env
MONGODB_URI=mongodb://localhost:27017/inventarioDB
PORT=3000
```

### 5. Inicializar la base de datos con datos de prueba
```bash
node init.js
```

### 6. Ejecutar el servidor
```bash
node app.js
```

### 7. Acceder desde el navegador
```
http://localhost:3000
```

---

## Datos de ejemplo creados por `init.js`

- 2 Proveedores
- 5 Productos
- 5 Movimientos (entradas y salidas)

Esto permite probar todas las funcionalidades del sistema de manera rápida.

---

## Estructura del proyecto

```
/models          → Esquemas de Mongoose
/controllers     → Lógica de negocio separada por entidad
/routes          → Rutas principales
/views           → Vistas EJS estilizadas
/public/css      → Estilo moderno minimalista
init.js          → Script de carga inicial
app.js           → Servidor Express principal
```

---

## Observaciones

- El sistema sigue una estructura modular (MVC simple).
- El diseño esta centrado en la funcionalidad.
- **funciona con MongoDB local.**

---

## Integrantes

- **[Luciano Parrotta]**

---
Base de Datos 2 |
**2025**
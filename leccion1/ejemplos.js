// ============================================
// 1. FUNCIONES FLECHA + let/const (ES6 vs Pre-ES6)
// ============================================

// ES6 MODERNO - Sintaxis limpia y segura
const calculateArea = (width, height) => {
  // Arrow function (=>): Sintaxis corta, NO tiene su propio 'this'
  let base = width;           // let: Alcance de BLOQUE {}, reasignable
  const multiplier = 6;       // const: Alcance de BLOQUE, NO reasignable
  return base * height * multiplier;  // Template literals con ${} también ES6
};

console.log(calculateArea(5, 10));  // Salida: 300 (5*10*6)

// PRE-ES6 - Más largo y propenso a errores
var calculateAreaViejo = function(width, height) {
  // function tradicional: Más verbosa, tiene su propio 'this'
  var base = width;         // var: Alcance FUNCIÓN, hoisting (puede causar bugs)
  var multiplier = 6;       // var: TODO es reasignable (no hay const)
  return base * height * multiplier;
};

console.log(calculateAreaViejo(5, 10));  // Salida: 200 (igual resultado)

// ============================================
// 2. PROMESAS + ASYNC/AWAIT (ES6 vs Callback Hell)
// ============================================

// ES6: PROMESAS - Cadena clara (.then/.catch)
const fetchUserData = () => {
  // new Promise(): Constructor ES6 para operaciones asíncronas
  return new Promise(resolve => {     // resolve = éxito, reject = error
    setTimeout(() => {                // Simula API (2 segundos)
      resolve({ id: 5, name: "sara" });  // Resuelve con datos
    }, 2000);
  });
};

// ASYNC/AWAIT (ES8, construye sobre promesas ES6)
const getUser = async () => {
  // async: Marca función como asíncrona
  const userData = await fetchUserData();  // await: PAUSA hasta que promesa resuelva
  console.log(userData);                   // {id: 1, name: "Alice"} (después de 2s)
};

getUser();  // Llama función (verás resultado después de 2 segundos)

// PRE-ES6: CALLBACK HELL - Anidamiento horrible
function fetchUserDataCallback(callback) {
  setTimeout(function() {          // Callback tradicional
    callback({ id: 5, name: "sara" });  // Pasa datos por parámetro
  }, 8000); // Simula API (8 segundos)
}

function getUserCallback() {
  fetchUserDataCallback(function(userData) {  // Anidado = difícil de leer
    console.log(userData);
  });
}

// getUserCallback();  // Descomenta para comparar (después de 2s)

// ============================================
// 3. CLASES (ES6 vs Constructor Functions)
// ============================================

// ES6: CLASES - Sintaxis limpia como Java, C#
class Producto {
  constructor(nombre, precio, cantidad) {
    // constructor: Se ejecuta al hacer 'new'
    this.nombre = nombre;     // 'this' = instancia actual
    this.precio = precio;
    this.cantidad = cantidad;
  }

  obtenerDetalles() {
    // Método de instancia: Accesible con producto1.obtenerDetalles()
    return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
  }

  actualizarStock(cantidad) {
    // Método para modificar stock (+ o -)
    this.cantidad += cantidad;  // Puede ser positivo o negativo
  }
}

// Uso de clase
const producto1 = new Producto('gorra', 45, 100);
console.log(producto1.obtenerDetalles());     // "gorra - Precio: 45 - Stock: 100"
producto1.actualizarStock(-40);               // Vende 40 gorras
console.log(producto1.obtenerDetalles());     // "gorra - Precio: 45 - Stock: 60"

// PRE-ES6: Constructor + Prototype - Más complicado
function ProductoViejo(nombre, precio, cantidad) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}

ProductoViejo.prototype.obtenerDetalles = function() {
  return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
};

ProductoViejo.prototype.actualizarStock = function(cantidad) {
  this.cantidad += cantidad;
};

const productoViejo = new ProductoViejo('sombrero palma', 55, 100);
console.log(productoViejo.obtenerDetalles());

// ============================================
// 4. MÓDULOS ES6 (Simulación - requiere archivos separados)
// ============================================
// Para ver módulos reales, crea 2 archivos:

// ARCHIVO: utils.js
/*
export function saludar(nombre) {
  return `Hola, ${nombre}!`;  // export: Hace función pública
}
export const PI = 3.1416;
*/

// ARCHIVO: app.js (este mismo, pero con import)
/*
import { saludar, PI } from './utils.js';  // import: Trae funciones

console.log(saludar('Juan'));  // "Hola, Juan!"
console.log(PI);               // 3.1416
*/

// PRE-ES6 (CommonJS - Node.js antiguo):
/*
const saludar = require('./utils');  // require: Sintaxis vieja
console.log(saludar('Juan'));
*/

// ============================================
// RESUMEN DE MEJORAS ES6
// ============================================
console.log("=== ES6 TRANSFORMÓ JAVASCRIPT ===");
console.log("✅ let/const: Control de alcance");
console.log("✅ Arrow functions: Código corto");
console.log("✅ Clases: OOP fácil");
console.log("✅ Promesas/async: Sin callback hell");
console.log("✅ Módulos: Código organizado");
console.log("¡Practica cada sección modificando valores!");
console.log("¡Hola Sarai, el archivo se ejecutó correctamente!");
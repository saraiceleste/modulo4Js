// EJEMPLO COMPLETO: Introducción a ECMAScript (ES6+)
// Este código demuestra las principales características de ECMAScript modernas:
// variables let/const, funciones flecha, clases, promesas, módulos (simulados),
// y estructuras de iteración como for...in, for...of, forEach y map.


// ============================================
// 1. DECLARACIÓN DE VARIABLES (ES6: let y const vs var antigua)
// ============================================
// 'var' tiene alcance de función y puede redeclararse (problemático en bloques).
var globalVar = "Soy global (var antigua, pre-ES6)";  // Alcance función/global, hoisting (se eleva).
console.log(globalVar);  // Salida: "Soy global"

// 'let' tiene alcance de bloque {}, se puede reasignar.
let nombre = "Juan";  // ES6: Alcance de bloque, no hoisting completo.
console.log(nombre);  // Salida: "Juan"
nombre = "Ana";  // Reasignación OK.
console.log(nombre);  // Salida: "Ana"

// 'const' tiene alcance de bloque, NO se puede reasignar (ideal para constantes).
const PI = 3.1416;  // ES6: Inmutable, pero objetos/constantes complejas sí mutables.
console.log(PI);  // Salida: 3.1416
// PI = 3.14;  // ¡Error! No reasignable.

// Ejemplo de bloque: diferencia con var.
if (true) {
  var varEnBloque = "Var sale del bloque";  // var ignora bloques {}.
  let letEnBloque = "Let se queda en bloque";  // let respeta bloques.
  const constEnBloque = "Const también";
}
console.log(varEnBloque);   // OK: "Var sale del bloque"
console.log(letEnBloque);   // Error: letEnBloque no definida (bloque {} limita). [web:6][web:17]

// ============================================
// 2. FUNCIONES FLECHA (=>) (ES6)
// ============================================
// Sintaxis corta para funciones anónimas. No tienen 'this' propio (heredan del padre).
// Antes (pre-ES6): function tradicional.
function sumaClasica(a, b) {
  return a + b;
}
console.log(sumaClasica(2, 3));  // Salida: 5

// ES6: Flecha corta. Si un solo return, omitimos {} y return.
const sumaFlecha = (a, b) => a + b;  // Más concisa, ideal para callbacks.
console.log(sumaFlecha(2, 3));  // Salida: 5

// Con cuerpo múltiple: usamos {}.
const saludar = (nombre) => {
  console.log(`Hola, ${nombre}!`);  // Template literals también ES6.
};
saludar("Juan");  // Salida: "Hola, Juan!" [web:2][web:11]

// ============================================
// 3. CLASES (ES6: OOP moderna)
// ============================================
// Sintaxis azúcar sobre prototipos. Facilita herencia y encapsulación.
class Animal {
  constructor(nombre) {  // Constructor se llama con 'new'.
    this.nombre = nombre;  // 'this' refiere a la instancia.
  }

  hablar() {  // Método de instancia.
    console.log(`${this.nombre} hace un ruido.`);
  }

  // Método estático (no necesita instancia).
  static especie() {
    return "Mamífero";
  }
}

const perro = new Animal("Firulais");  // Instancia.
perro.hablar();  // Salida: "Firulais hace un ruido."
console.log(Animal.especie());  // Salida: "Mamífero" [web:6]

// Herencia (extends).
class Perro extends Animal {
  constructor(nombre) {
    super(nombre);  // Llama constructor padre.
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

const miPerro = new Perro("Rex");
miPerro.ladrar();  // Salida: "Rex dice: ¡Guau!"
miPerro.hablar();  // Hereda: "Rex hace un ruido."

// ============================================
// 4. ESTRUCTURAS DE ITERACIÓN
// ============================================
// for...in: Para propiedades de OBJETOS (claves). Desde ES1, pero usa let en ES6+.
const persona = {
  nombre: "Luis",
  edad: 25,
  ciudad: "Madrid"
};
console.log("--- for...in (objetos: propiedades) ---");
for (let prop in persona) {  // 'prop' = clave (nombre, edad...).
  if (persona.hasOwnProperty(prop)) {  // Solo propiedades propias.
    console.log(`${prop}: ${persona[prop]}`);
  }
}
// Salida:
// nombre: Luis
// edad: 25
// ciudad: Madrid  [web:7]

// for...of: Para VALORES de iterables (arrays, strings). ES6.
const numeros = [10, 20, 30];
console.log("--- for...of (arrays: valores) ---");
for (let num of numeros) {  // Directo al valor.
  console.log(num * 2);
}
// Salida: 20, 40, 60  [web:3][web:7]

// forEach(): Método array ES5. Ejecuta función por elemento, retorna undefined.
console.log("--- forEach (arrays: acción por elemento) ---");
numeros.forEach((num, index) => {  // Callback: valor, índice.
  console.log(`Índice ${index}: ${num}`);
});
// Salida:
// Índice 0: 10
// etc.  No retorna array nuevo. [web:12][web:15]

// map(): ES5. Transforma array, retorna NUEVO array.
console.log("--- map (arrays: transformación) ---");
const duplicados = numeros.map(num => num * 2);  // Nuevo array.
console.log(duplicados);  // [20, 40, 60]  Ideal para transformaciones. [web:12][web:15]

// ============================================
// 5. PROMESAS Y ASINCRONÍA (ES6+)
// ============================================
// Promise: Maneja async (ej. setTimeout simula API).
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = true;  // Simula éxito/error.
    if (exito) {
      resolve("¡Datos cargados!");  // .then()
    } else {
      reject("Error al cargar");  // .catch()
    }
  }, 1000);
});

miPromesa
  .then(resultado => console.log(resultado))  // Salida después 1s: "¡Datos cargados!"
  .catch(error => console.error(error));  // No se ejecuta aquí.

// Bonus ES8: async/await (más legible).
async function fetchDatos() {
  try {
    const resultado = await miPromesa;  // Espera promesa.
    console.log("Con async/await:", resultado);
  } catch (error) {
    console.error(error);
  }
}
fetchDatos();  // Salida: "Con async/await: ¡Datos cargados!" [web:1][web:20]

// ============================================
// 6. MÓDULOS (ES6: import/export)
// ============================================
// En archivos reales: export en math.js, import aquí.
// Simulado: imagina esto en archivos separados.
const add = (a, b) => a + b;  // Para exportar: export const add = ...
// import { add } from './math.js';
// console.log(add(2, 3));  // 5  [web:6]

// ============================================
// FIN DEL EJEMPLO
// ============================================
// Historia breve: ES1(1997), ES5(2009: métodos array), ES6(2015: let/const/flechas/clases),
// ES8(2017: async/await). Usa ES6+ en proyectos modernos. ¡Practica paso a paso! [web:1][web:13][web:16][web:19]
console.log("¡Ejemplo ECMAScript completado! Abre consola para ver todo.");

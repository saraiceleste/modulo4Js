// Línea 1: Declaramos un arreglo llamado 'estudiantes' usando corchetes [].
let estudiantes = ["Ana", "Luis", "María", "Carlos"];

// Línea 2: Accedemos al primer elemento (índice 0) e imprimimos su valor.
console.log(estudiantes[0]); // Salida: "Ana"

// Línea 3: Agregamos un nuevo estudiante al final con el método push().
estudiantes.push("Sofía");

// Línea 4: Imprimimos la longitud del arreglo con la propiedad length.
console.log(estudiantes.length); // Salida: 5

// Línea 5: Recorremos el arreglo con un bucle for...of para mostrar todos los nombres.
for (let estudiante of estudiantes) {
  console.log("Estudiante: " + estudiante);
}

// Línea 1: Declaramos un objeto 'curso' usando llaves {}, con propiedades clave-valor separadas por dos puntos.
let curso = {
  nombre: "Programación JavaScript", // Propiedad 'nombre' con valor string.
  duracion: 40, // Propiedad 'duracion' con valor numérico (horas).
  profesor: "Juan Pérez", // Propiedad 'profesor' con valor string.
  alumnos: 25, // Propiedad 'alumnos' con valor numérico.
};

// Línea 2: Accedemos a una propiedad usando notación de punto (o corchetes ['nombre']).
console.log("Curso: " + curso.nombre); // Salida: "Curso: Programación JavaScript"

// Línea 3: Agregamos una nueva propiedad dinámicamente.
curso.modalidad = "Online";

// Línea 4: Listamos todas las claves del objeto con Object.keys().
console.log(Object.keys(curso)); // Salida: ["nombre", "duracion", "profesor", "alumnos", "modalidad"]

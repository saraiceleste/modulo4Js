// Línea 1: Declaramos un objeto 'curso' usando llaves {}, con propiedades clave-valor separadas por dos puntos.
let curso = {
    nombre: "Programación JavaScript",      // Propiedad 'nombre' con valor string.
    duracion: 40,                          // Propiedad 'duracion' con valor numérico (horas).
    profesor: "Juan Pérez",                 // Propiedad 'profesor' con valor string.
    alumnos: 25                            // Propiedad 'alumnos' con valor numérico.
};

// Línea 2: Accedemos a una propiedad usando notación de punto (o corchetes ['nombre']).
console.log("Curso: " + curso.nombre);  // Salida: "Curso: Programación JavaScript"

// Línea 3: Agregamos una nueva propiedad dinámicamente.
curso.modalidad = "Online";

// Línea 4: Listamos todas las claves del objeto con Object.keys().
console.log(Object.keys(curso));  // Salida: ["nombre", "duracion", "profesor", "alumnos", "modalidad"]

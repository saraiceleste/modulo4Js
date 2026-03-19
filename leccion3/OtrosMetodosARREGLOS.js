// Creamos un arreglo de estudiantes con propiedades: nombre, edad y calificación
const estudiantes = [
    { nombre: "Ana", edad: 20, calificacion: 85 },
    { nombre: "Luis", edad: 22, calificacion: 92 },
    { nombre: "María", edad: 19, calificacion: 78 },
    { nombre: "Carlos", edad: 21, calificacion: 95 },
    { nombre: "Sofía", edad: 20, calificacion: 88 }
];

// 1. MÉTODO SORT() - Ordena el arreglo original (muta el arreglo)
console.log("=== ANTES del sort ===");
console.log(estudiantes.map(e => `${e.nombre}: ${e.calificacion}`)); // Muestra orden original

// Ordenamos por calificación de menor a mayor
estudiantes.sort((a, b) => {
    // 'a' y 'b' son elementos consecutivos del arreglo que se comparan
    // Retornamos número negativo si a < b, positivo si a > b, 0 si son iguales
    return a.calificacion - b.calificacion; // Ascendente (menor a mayor)
});

console.log("\n=== DESPUÉS del sort (ordenado por calificación) ===");
console.log(estudiantes.map(e => `${e.nombre}: ${e.calificacion}`)); // ¡El arreglo cambió!

// 2. MÉTODO REDUCE() - Reduce el arreglo a un solo valor (acumulador)
const totalCalificaciones = estudiantes.reduce((acumulador, estudiante) => {
    // 'acumulador' guarda el resultado parcial (empieza en 0)
    // 'estudiante' es cada elemento del arreglo
    return acumulador + estudiante.calificacion; // Suma cada calificación al total
}, 0); // El 0 es el valor inicial del acumulador

const promedio = totalCalificaciones / estudiantes.length;
console.log(`\n=== REDUCE - Promedio: ${promedio.toFixed(2)}`);

// 3. MÉTODO SOME() - Devuelve true si AL MENOS UN elemento cumple la condición
const hayAprobados = estudiantes.some(estudiante => {
    // Recorre hasta encontrar UN estudiante que cumpla la condición
    // Si encuentra uno, retorna true inmediatamente y PARA
    return estudiante.calificacion >= 90;
});
console.log(`\n=== SOME - ¿Hay aprobados (>=90)? ${hayAprobados}`); // true

// 4. MÉTODO EVERY() - Devuelve true si TODOS los elementos cumplen la condición
const todosMayoresDeEdad = estudiantes.every(estudiante => {
    // Verifica TODOS los estudiantes
    // Si ALGUNO falla, retorna false inmediatamente
    return estudiante.edad >= 18;
});
console.log(`=== EVERY - ¿Todos mayores de edad? ${todosMayoresDeEdad}`); // true

const todosAprobados = estudiantes.every(estudiante => estudiante.calificacion >= 90);
console.log(`¿Todos tienen >=90? ${todosAprobados}`); // false

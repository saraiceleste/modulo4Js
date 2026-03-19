// Creamos un arreglo de estudiantes con sus propiedades
const estudiantes = [
  { nombre: "Ana", edad: 20, calificacion: 85, aprobado: true },
  { nombre: "Luis", edad: 22, calificacion: 92, aprobado: true },
  { nombre: "María", edad: 19, calificacion: 78, aprobado: false },
  { nombre: "Carlos", edad: 21, calificacion: 95, aprobado: true },
  { nombre: "Sofía", edad: 23, calificacion: 88, aprobado: true },
  { nombre: "Juan", edad: 20, calificacion: 65, aprobado: false }
];

// 1. MÉTODO FIND: Busca y RETORNA EL PRIMER elemento que cumpla la condición
const estudianteAprobadoPrimero = estudiantes.find(estudiante => {
  // Recibe cada estudiante y verifica si está aprobado
  // find() retorna SOLO el primer elemento que cumpla la condición (undefined si no encuentra ninguno)
  return estudiante.aprobado === true;
});
console.log("1. Find - Primer estudiante aprobado:", estudianteAprobadoPrimero);
// Resultado: {nombre: "Ana", edad: 20, calificacion: 85, aprobado: true}

// 2. MÉTODO FILTER: Crea un NUEVO arreglo con TODOS los elementos que cumplan la condición
const estudiantesAprobados = estudiantes.filter(estudiante => {
  // Recibe cada estudiante y crea un nuevo arreglo SOLO con los que pasan la condición
  // filter() NO modifica el arreglo original, siempre crea uno nuevo
  return estudiante.calificacion >= 80;
});
console.log("2. Filter - Todos los aprobados:", estudiantesAprobados);
// Resultado: Array con 4 estudiantes (Ana, Luis, Carlos, Sofía)

// 3. MÉTODO MAP: Crea un NUEVO arreglo transformando CADA elemento
const nombresAprobados = estudiantesAprobados.map(estudiante => {
  // Recibe cada estudiante y RETORNA un nuevo valor transformado
  // map() SIEMPRE crea un nuevo arreglo del MISMO tamaño que el original
  // Útil para transformar datos (ej: solo nombres, duplicar valores, formatear)
  return estudiante.nombre.toUpperCase();
});
console.log("3. Map - Nombres en mayúsculas:", nombresAprobados);
// Resultado: ["ANA", "LUIS", "CARLOS", "SOFÍA"]

// 4. MÉTODO FOREACH: RECORRE cada elemento SIN retornar nada (solo ejecuta acciones)
console.log("4. ForEach - Imprimiendo cada estudiante:");
estudiantes.forEach((estudiante, indice) => {
  // Recibe cada estudiante y su índice (opcional), pero NO retorna nada
  // Perfecto para mostrar datos, hacer cálculos laterales, o efectos secundarios
  // NO crea nuevo arreglo, NO modifica el original
  console.log(`${indice + 1}. ${estudiante.nombre} - Calificación: ${estudiante.calificacion}`);
});
// Resultado: Imprime cada estudiante numerado en consola

// REGLA DE ORO para recordar cuál usar:
// - find: "¿Necesito EL PRIMERO que cumpla?"
// - filter: "¿Necesito TODOS los que cumplan?"
// - map: "¿Necesito TRANSFORMAR cada uno?"
// - forEach: "¿Solo quiero RECORRER y hacer algo con cada uno?"

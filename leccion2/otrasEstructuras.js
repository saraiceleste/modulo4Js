// =================================================================
// DEMOSTRACIÓN COMPLETA: Todas las estructuras de datos en UN archivo
// =================================================================

// ================================
// 1. LISTAS (Arrays) - Colección ordenada por índice
// ================================
let lista = ["Ana", "Luis", "María"];                    // Línea 1: Creamos lista ordenada (estática/dinámica)
lista.push("Carlos");                                    // Línea 2: Agregamos al final (dinámica)
console.log(lista[1]);                                   // Línea 3: Acceso directo por índice O(1) → "Luis"

// ================================
// 2. LISTAS LIGADAS - Nodos encadenados
// ================================
class Nodo {                                             // Línea 6: Clase para cada nodo (dato + puntero)
    constructor(dato) {
        this.dato = dato;                                // Línea 8: Almacena el valor
        this.siguiente = null;                           // Línea 9: Puntero al siguiente nodo (null = final)
    }
}

class ListaLigada {                                      // Línea 12: Clase que maneja la lista
    constructor() {
        this.cabeza = null;                              // Línea 14: Puntero al primer nodo
    }
    
    agregar(dato) {                                      // Línea 17: Método para insertar al final
        let nuevo = new Nodo(dato);                      // Línea 18: Crea nuevo nodo
        if (!this.cabeza) {                              // Línea 19: Si está vacía
            this.cabeza = nuevo;                         // Línea 20: Primer nodo es cabeza
        } else {
            let actual = this.cabeza;                    // Línea 22: Empezamos desde cabeza
            while (actual.siguiente) {                   // Línea 23: Mientras tenga siguiente
                actual = actual.siguiente;               // Línea 24: Avanzar
            }
            actual.siguiente = nuevo;                    // Línea 26: Último apunta al nuevo
        }
    }
}

let listaLig = new ListaLigada();                        // Línea 30: Creamos lista ligada
listaLig.agregar("Ana"); listaLig.agregar("Luis");       // Línea 31: Insertamos eficientemente O(n)

// ================================
// 3. CONJUNTOS (Set) y BAGS - Sin orden, únicos/duplicados
// ================================
let conjunto = new Set();                                // Línea 35: Set (sin duplicados)
conjunto.add("Ana"); conjunto.add("Luis");               // Línea 36: Agregar elementos
conjunto.add("Ana");                                     // Línea 37: Duplicado IGNORADO
console.log(conjunto.has("Ana"));                        // Línea 38: Verificar existencia O(1) → true

let bag = ["Ana", "Ana", "Luis"];                        // Línea 40: Bag/Array (permite duplicados)
console.log(bag.length);                                 // Línea 41: → 3 (dos "Ana")

// ================================
// 4. TABLAS HASH (Map) - Clave → Valor
// ================================
let tablaHash = new Map();                               // Línea 45: Map para clave-valor eficiente
tablaHash.set("Ana", 22);                                // Línea 46: Clave "Ana" → Valor 22
tablaHash.set("Luis", 25);                               // Línea 47: Otra entrada
console.log(tablaHash.get("Ana"));                       // Línea 48: Búsqueda O(1) → 22

// ================================
// 5. COLA DE PRIORIDAD - Sale el más prioritario primero
// ================================
class ColaPrioridad {                                    // Línea 52: Clase para manejar prioridades
    constructor() {
        this.elementos = [];                             // Línea 54: Array auxiliar
    }
    
    encolar(prioridad, dato) {                           // Línea 57: Agregar con prioridad (número mayor = más urgente)
        this.elementos.push({prioridad, dato});          // Línea 58: Guardamos prioridad+dato
        this.elementos.sort((a, b) => b.prioridad - a.prioridad); // Línea 59: Ordenamos (mayor prioridad primero)
    }
    
    desencolar() {                                       // Línea 62: Sacar el más prioritario
        return this.elementos.shift();                   // Línea 63: Quitamos el primero (mayor prioridad)
    }
}

let cola = new ColaPrioridad();                          // Línea 66: Creamos cola de prioridad
cola.encolar(5, "Emergencia");                           // Línea 67: Alta prioridad (5)
cola.encolar(1, "Normal");                               // Línea 68: Baja prioridad (1)
console.log(cola.desencolar().dato);                     // Línea 69: → "Emergencia" (sale primero)

// ================================
// DEMOSTRACIÓN DE EFICIENCIA
// ================================
console.log("\n=== RESUMEN ===");
console.log("Lista[1]:", lista[1]);                      // Línea 74: Array acceso directo
console.log("Hash['Ana']:", tablaHash.get("Ana"));       // Línea 75: Hash búsqueda rápida
console.log("Set tiene Ana:", conjunto.has("Ana"));      // Línea 76: Set verificación O(1)

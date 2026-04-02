function encontrarPalabraMasLarga(texto) {
    // Usamos .split(' ') para convertir texto en array de palabras
    const palabras = texto.split(' ');  // Divide por espacios
    
    // Si no hay palabras, devolvemos vacío
    if (palabras.length === 0) {
        return '';
    }
    
    // Inicializamos con la primera palabra
    let longestWord = palabras[0];  // Variable que guarda la palabra más larga
    
    // SLIDING WINDOW - recorremos cada palabra
    for (let i = 1; i < palabras.length; i++) {
        // Comparamos longitudes usando .length
        if (palabras[i].length > longestWord.length) {
            // Actualizamos la ventana con la nueva palabra más larga
            longestWord = palabras[i];
        }
    }
    
    return longestWord;
}

// Prueba
const texto = "Hola mundo JavaScript es poderoso";
console.log(encontrarPalabraMasLarga(texto));  
// Resultado: "JavaScript" (10 caracteres)
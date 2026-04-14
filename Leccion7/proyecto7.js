
function buscadorMaximoVisual(arr) {
    console.log(`🎬 Procesando: [${arr.join(', ')}]`); // ← MUESTRA el arreglo actual
    
  
    if (arr.length === 1) {
        console.log(`✅ CAMPEÓN ENCONTRADO: ${arr[0]}`);
        return arr[0];
    }
    
    
    const medio = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, medio);
    const derecha = arr.slice(medio);
    
    console.log(`   🔪 DIVIDIENDO en: [${izquierda.join(', ')}]  y  [${derecha.join(', ')}]`);
    
    
    console.log("    Izquierda...");
    const maxIzq = buscadorMaximoVisual(izquierda);
    
    console.log("    Derecha...");
    const maxDer = buscadorMaximoVisual(derecha);
  
    const ganador = Math.max(maxIzq, maxDer);
    console.log(`   ⚔️  BATALLA: ${maxIzq} vs ${maxDer} → GANADOR: ${ganador}`);
    console.log(""); 
    
    return ganador;
}

console.log("🎥 === PELÍCULA: BUSCANDO EL MÁXIMO EN [8, 3, 11, 2, 7] ===\n");
buscadorMaximoVisual([8, 3, 11, 2, 7]);
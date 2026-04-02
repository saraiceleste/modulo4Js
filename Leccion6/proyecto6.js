function buscarRegalo(gifts, giftName, index = 0) {
    
    if (index === gifts.length) {
        return `❌ "${giftName}" no está en la lista`;
    }
    
    if (gifts[index] === giftName) {
        return `🎁 "${giftName}" está en la posición ${index}`;
    }
    
    // LLAMADA RECURSIVA: Aumentamos index + 1
    return buscarRegalo(gifts, giftName, index + 1);
}

// Pruebas
const gifts = ["peluche", "bicicleta", "consola", "libro"];

console.log(buscarRegalo(gifts, "consola")); 
// 🎁 "consola" está en la posición 2

console.log(buscarRegalo(gifts, "muñeca"));  
// ❌ "muñeca" no está en la lista
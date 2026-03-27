/**
  @param {string[]} invitados - Lista de nombres de invitados.
  @return {string[]|null} - Par de nombres [invitado1, invitado2] o null si no hay par.
 **/
function encontrarInvitadosJuntos(invitados) {
  // Puntero izquierdo: índice del primer invitado del par.
  let left = 0;
  
  // Puntero derecho: índice del invitado siguiente (consecutivo).
  let right = 1;

  // Mientras aún haya pareja consecutiva por revisar.
  while (right < invitados.length) {
    // Obtenemos el primer carácter del nombre del invitado en "left".
    // Esto nos da la letra inicial.
    const inicialIzq = invitados[left][0];

    // Obtenemos el primer carácter del nombre del invitado en "right".
    const inicialDer = invitados[right][0];

    // Comparamos ambas iniciales (letras).
    if (inicialIzq === inicialDer) {
      // Si coinciden, devolvemos el PAR DE VALUES (nombres) que cumplen la condición.
      return [invitados[left], invitados[right]];
    }

    // Si NO coinciden, avanzamos AMBOS punteros para revisar la siguiente pareja consecutiva.
    left = left + 1;   // avanzamos el puntero izquierdo
    right = right + 1; // avanzamos el puntero derecho
  }

  // Si recorrimos toda la lista sin encontrar par, devolvemos null.
  return null;
}

const listaInvitados = [
  "Ana",
  "Andrea",
  "Beto",
  "Camila",
  "Carlos",
  "Carmen"
];

const par = encontrarInvitadosJuntos(listaInvitados);
console.log(par); // ["Ana", "Andrea"] → tienen la misma inicial "A".
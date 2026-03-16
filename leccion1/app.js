// app.js - Aplicación Principal (Actualizada)
// Yo ejecuto todo. Registro ejemplos y muestro cómo usar.

const iniciarApp = () => {
  console.log("🚀 App de Viajes ES6+ Iniciada!");

  // Registros de ejemplo (NUEVO: con alojamiento)
  registrarDestino("Paris", "2026-06-15", "Avion", "Hotel"); // ~850
  registrarDestino("Londres", "2026-07-01", "Tren", "Hostal"); // ~550
  registrarDestino("New York", "2026-08-20", "Avion", "Airbnb"); // ~900
  registrarDestino("Tokyo", "2026-10-10", "Avion", "Hotel"); // ~1150

  // Muestro itinerario completo
  mostrarItinerario();

  // DEMO extras
  console.log("\n🎁 Demo Extras:");
  estadisticas(); // Estadísticas
  eliminarUltimoViaje(); // Borra Tokyo
  mostrarItinerario(); // Itinerario actualizado
};

// 🔥 Ejecutar app
iniciarApp();

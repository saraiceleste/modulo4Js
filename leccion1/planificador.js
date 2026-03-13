const destinos = [];  // Array global de viajes

// 1. REGISTRAR DESTINO 
const registrarDestino = (destino, fecha, transporte, alojamiento) => {
    if (!destino || !fecha || !transporte || !alojamiento) {
        alert("❌ Completa todos los campos");
        return false;
    }

    const nuevoViaje = {
        destino: destino.toUpperCase(),
        fecha: fecha,
        transporte: transporte,
        alojamiento: alojamiento,
        costo: calcularCosto(destino.toUpperCase(), transporte, alojamiento)
    };

    destinos.push(nuevoViaje);
    console.log(`✅ ${nuevoViaje.destino}: $${nuevoViaje.costo}`);
    return true;
};

// 2. CALCULADORA DE COSTOS
const calcularCosto = (destino, transporte, alojamiento) => {
    let costoBase = 0;
    
    // Costos por destino
    const costosDestino = { 
        "PARIS": 500, "LONDRES": 400, "NEW YORK": 600, 
        "TOKYO": 800, "ROMA": 450 
    };
    
    // DESTINO
    costoBase += costosDestino[destino] || 300;
    
    //. TRANSPORTE
    const costosTransporte = { "AVION": 1200, "TREN": 600, "BUS": 450 };
    costoBase += costosTransporte[transporte] || 0;
    
    // ALOJAMIENTO
    const costosAlojamiento = { "HOTEL": 2150, "HOSTAL": 300, "AIRBNB": 700 };
    costoBase += costosAlojamiento[alojamiento] || 0;
    
    return costoBase;
};

// 3. MOSTRAR ITINERARIO 
const mostrarItinerario = () => {
    const itinerarioDiv = document.getElementById('itinerario');
    if (destinos.length === 0) {
        itinerarioDiv.innerHTML = '<p>📭 Agrega tu primer viaje</p>';
        document.getElementById('stats').style.display = 'none';
        return;
    }

    let html = `<h3>🗺️ Itinerario (${destinos.length} viajes)</h3>`;
    let total = 0;

    for (const viaje of destinos) {
        html += `
            <div class="viaje-card">
                <div class="viaje-destino">${viaje.destino}</div>
                <div class="viaje-info">
                    <span>📅 ${viaje.fecha}</span>
                    <span>✈️ ${viaje.transporte}</span>
                    <span>🏨 ${viaje.alojamiento}</span>
                    <span>💰 $${viaje.costo}</span>
                </div>
            </div>
        `;
        total += viaje.costo;
    }

    html += `<div class="costo-total">💎 TOTAL: $${total}</div>`;
    itinerarioDiv.innerHTML = html;

  
    document.getElementById('totalViajes').textContent = destinos.length;
    document.getElementById('totalGasto').textContent = total;
    document.getElementById('promedio').textContent = (total / destinos.length).toFixed(0);
    document.getElementById('stats').style.display = 'flex';
};

const agregarViaje = () => {
    // Tomo datos del formulario
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const transporte = document.getElementById('transporte').value;
    const alojamiento = document.getElementById('alojamiento').value;

    // Registro y actualizo vista
    if (registrarDestino(destino, fecha, transporte, alojamiento)) {
        // Limpio formulario
        document.getElementById('destino').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('transporte').value = '';
        document.getElementById('alojamiento').value = '';
        
        // Muestro itinerario actualizado
        mostrarItinerario();
    }
};

const limpiarTodo = () => {
    if (confirm('¿Borrar todos los viajes?')) {
        destinos.length = 0;
        document.getElementById('itinerario').innerHTML = '<p>📭 Lista limpiada</p>';
        document.getElementById('stats').style.display = 'none';
    }
};


document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App de Viajes cargada correctamente');
    
    // Enter en cualquier input agrega viaje
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarViaje();
        }
    });
});

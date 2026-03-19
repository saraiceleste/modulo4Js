const paquetes = [
    { nombre: "Paquete Básico", precio: 99, categoria: "Fotografia" },
    { nombre: "Paquete Avanzado", precio: 1000, categoria: "Fotografia" },
    { nombre: "Paquete Premium", precio: 1500, categoria: "Fotografia" },
    { nombre: "Asesoría Básica Personalizada", precio: 200, categoria: "Consultoría" },
    { nombre: "Asesoría Avanzada Personalizada", precio: 400, categoria: "Consultoría" },
];

let carrito = [];
const listaCarrito = document.getElementById("carrito-lista");
const totalElemento = document.getElementById("total");

paquetes.sort((a, b) => a.nombre.localeCompare(b.nombre));

function mostrarPaquetes(paquetesAMostrar) {
    const container = document.getElementById("paquetes-container");
    container.innerHTML = '<h1>Aura Media</h1>'; 
    
    paquetesAMostrar.forEach((paquete, index) => {
        const paqueteElement = document.createElement("div");
        paqueteElement.classList.add("paquete");
        paqueteElement.innerHTML = `
            <h2>${paquete.nombre}</h2>
            <p>$${paquete.precio} - ${paquete.categoria}</p>
            <button class="btn-agregar" data-id="${index}">
                Agregar al carrito
            </button>
        `;
        container.appendChild(paqueteElement);
    });
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nombre} - $${item.precio}
            <button class="btn-eliminar" data-index="${index}" style="margin-left: 10px;">❌</button>
        `;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalElemento.innerText = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPaquetes(paquetes);

    const container = document.getElementById("paquetes-container");
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-agregar")) {
            const index = e.target.getAttribute("data-id");
            carrito.push(paquetes[index]);
            actualizarCarrito();
        }
    });

    listaCarrito.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-eliminar")) {
            const indexAEliminar = e.target.getAttribute("data-index");
            carrito.splice(indexAEliminar, 1);
            actualizarCarrito();
        }
    });
});
const paquetes = [
  { nombre: "Paquete Básico", precio: 99, categoria: "Fotografia" },
  { nombre: "Paquete Avanzado", precio: 1000, categoria: "Fotografia" },
  { nombre: "Paquete Premium", precio: 1500, categoria: "Fotografia" },
  { nombre: "Asesoría Básica Personalizada", precio: 200, categoria: "Consultoría" },
  { nombre: "Asesoría Avanzada Personalizada", precio: 400, categoria: "Consultoría" },
];

let carrito = [];
let listaActual = [...paquetes];

const container = document.getElementById("paquetes-container");
const listaProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("carrito-lista");
const totalElemento = document.getElementById("total");
const displayNombres = document.getElementById("lista-nombres-map");

function mostrarPaquetes(lista) {
  listaActual = lista;
  listaProductos.innerHTML = ""; 
  displayNombres.innerText = "";

  lista.forEach((paquete) => {
    const paqueteElement = document.createElement("div");
    paqueteElement.classList.add("paquete");
    paqueteElement.innerHTML = `
      <h2>${paquete.nombre}</h2>
      <p>$${paquete.precio} - ${paquete.categoria}</p>
      <button class="btn-agregar" data-nombre="${paquete.nombre}">Agregar</button>
    `;
    listaProductos.appendChild(paqueteElement);
  });
}

// --- FILTER ---
function filtrarEconomicos() {
  const filtrados = paquetes.filter(p => p.precio < 100);
  mostrarPaquetes(filtrados);
}

// --- SORT ---
function ordenarAlfabeticamente() {
  const ordenados = [...listaActual].sort((a, b) => a.nombre.localeCompare(b.nombre));
  mostrarPaquetes(ordenados);
}

// --- MAP ---
function generarListaNombres() {
  const nombresSolo = listaActual.map(p => p.nombre);
  displayNombres.innerText = "Nombres en vista actual: " + nombresSolo.join(" | ");
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - $${item.precio} <button onclick="eliminarDelCarrito(${index})">❌</button>`;
    listaCarrito.appendChild(li);
    total += item.precio;
  });
  totalElemento.innerText = total.toFixed(2);
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPaquetes(paquetes);

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-agregar")) {
      const nombreProd = e.target.getAttribute("data-nombre");
      const producto = paquetes.find(p => p.nombre === nombreProd);
      carrito.push(producto);
      actualizarCarrito();
    }
  });
});
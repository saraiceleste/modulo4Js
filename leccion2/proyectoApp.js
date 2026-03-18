let carrito = [];

function agregarCarrito(nombre, precio, imagen) {
    const producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        cantidad: 1
    };
    
    // Verificar si ya existe en carrito
    const existe = carrito.find(item => item.nombre === nombre);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push(producto);
    }
    
    actualizarCarrito();
    console.log(`✓ ${nombre} agregado al carrito`);
}

function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
}

function checkout() {
    if (carrito.length === 0) {
        alert("¡Tu carrito está vacío!");
        return;
    }
    alert(`¡Compra finalizada! Total: $${calcularTotal()}`);
    carrito = [];
    actualizarCarrito();
}

function calcularTotal() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

function actualizarCarrito() {
    const itemsCarrito = document.getElementById('items-carrito');
    const totalElement = document.getElementById('total');
    const totalValor = document.getElementById('total-valor');
    const btnCheckout = document.getElementById('btn-checkout');
    
    if (carrito.length === 0) {
        itemsCarrito.innerHTML = 'Tu carrito está vacío 😔';
        totalElement.style.display = 'none';
        btnCheckout.style.display = 'none';
    } else {
        let html = '';
        carrito.forEach(item => {
            html += `
                <div class="item-carrito">
                    <img src="${item.imagen}" alt="${item.nombre}" width="50">
                    <div>
                        <strong>${item.nombre}</strong> 
                        <span>(${item.cantidad})</span>
                        <span>$${item.precio * item.cantidad}</span>
                    </div>
                    <button onclick="eliminarDelCarrito('${item.nombre}')">❌</button>
                </div>
            `;
        });
        itemsCarrito.innerHTML = html;
        
        const total = calcularTotal();
        totalValor.textContent = total.toLocaleString();
        totalElement.style.display = 'block';
        btnCheckout.style.display = 'block';
    }
}

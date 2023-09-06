let section_carrito = document.getElementById("section-carrito");

export function inicializarCarrito() {
    //chequeo si existe el carrito, si no existe lo creo
    if (!localStorage.getItem("carrito")) {
        localStorage.setItem("carrito", JSON.stringify([]));
    }
    mostrarCarrito();
}


export function agregarAlCarrito(producto, cantidad) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(carrito);
    let producto_en_carrito = carrito.find(producto_en_carrito => producto_en_carrito.id == producto.id);
    if (producto_en_carrito) {
        producto_en_carrito.cantidad += cantidad;
    }
    else {
        carrito.push(producto);
        producto.cantidad = cantidad;
    }
    // producto_en_carrito ? producto_en_carrito.cantidad += cantidad : carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
    mostrarCarrito();
}

export function mostrarCarrito() {
    section_carrito.innerHTML = "";
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    for (let producto of carrito) {
        let container_producto = document.createElement("div");
        container_producto.classList.add("card-producto");
        container_producto.innerHTML = `
        <div class=img-container>
            <img src="${producto.thumbnail}" alt="${producto.title}" class="img-producto"/>
        </div>
        <div class="info-producto">
            <h2>${producto.title}</h2>
            <p>Precio: $${producto.price}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
            
        </div>
        `
        section_carrito.appendChild(container_producto);
    }
    let btn_eliminar = document.getElementsByClassName("btn-eliminar");
    for (let boton of btn_eliminar) {
        boton.addEventListener("click", () => {
            let id = boton.dataset.id;
            eliminarDelCarrito(id);
        })
    }
}

export function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = carrito.find(producto => producto.id == id);
    let index = carrito.indexOf(producto);
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

export function vaciarCarrito() {
    localStorage.setItem("carrito", JSON.stringify([]));
    mostrarCarrito();
}
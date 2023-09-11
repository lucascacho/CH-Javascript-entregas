let section_carrito = document.getElementById("container-carrito-productos");


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
    Toastify({
        text: "Producto agregado al carrito",
        duration: 1500
    }).showToast();
    mostrarCarrito();
}

export function mostrarCarrito() {
    section_carrito.innerHTML = "";
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length == 0) {
        section_carrito.innerHTML = `<p>El carrito esta vacio :(</p>`
    }
    for (let producto of carrito) {
        let container_producto = document.createElement("div");
        container_producto.classList.add("card-producto");
        container_producto.innerHTML = `
        <div class=img-container>
            <img src="${producto.thumbnail}" alt="${producto.title}" class="img-producto"/>
        </div>
        <div class="info-producto">
            <h4>${producto.title}</h4>
            <p>Precio unitario: $${producto.price}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Precio total: $${producto.price * producto.cantidad}</p>
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

    let container_total = document.getElementById("container-total");
    container_total.innerHTML = "";
    let gran_total = document.createElement("div");
    gran_total.innerHTML = `<h5>Gran total: $${precioTotal()}</h5>`
    gran_total.classList.add("gran-total");
    container_total.append(gran_total);
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
    let carrito_bak = JSON.parse(localStorage.getItem("carrito")) || [];
    localStorage.setItem("carrito", JSON.stringify([]));
    mostrarCarrito();
    Toastify({
        text: "El carrito ha sido vaciado\n Haz click aqui para deshacer",
        duration: 3000,
        stopOnFocus: true,
        close: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {
            localStorage.setItem("carrito", JSON.stringify(carrito_bak));
            mostrarCarrito();
            Toastify({
                text: "El carrito ha sido restaurado",
                duration: 1000
        }).showToast();
        }
    }).showToast();
}

function precioTotal() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    for (let producto of carrito) {
        total += producto.price * producto.cantidad;
    }
    return total;
}

export function finalizarCompra() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length == 0) {
        Toastify({
            text: "El carrito esta vacio",
            duration: 1500
        }).showToast();
        return;
    }
    Swal.fire({
        title: "¿Desea finalizar la compra?",
        text: `Total a pagar: $${precioTotal()}`,
        showCancelButton: true,
        confirmButtonColor: "#00D4FF",
        cancelButtonColor: "#FF3600",
        confirmButtonText: "Si",
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Compra confirmada", "¡Gracias por elegiros!", "success");
            vaciarCarrito();
        }
    });
}
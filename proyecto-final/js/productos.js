import { agregarAlCarrito, mostrarCarrito, eliminarDelCarrito } from "./carrito.js";

export async function requestProductos(apiUrl, lista_productos, cant, categoria) {
    const response = await fetch(`${apiUrl}/category/${categoria}?limit=${cant}`);
    const data = await response.json();
    lista_productos.length = 0;
    for (let producto of data.products) {
        lista_productos.push(producto);
    }
}

// export function mostrarProductos(productos) {
//     const section_productos = document.getElementById("section-productos");
//     section_productos.innerHTML = "";
//     for (let producto of productos) {
//         console.log(producto.category)
//         let container_producto = document.createElement("div");
//         container_producto.classList.add("card-producto");
//         // ...
//     }
// }

export function mostrarProductos(productos) {
    const section_productos = document.getElementById("section-productos");
    section_productos.innerHTML = "";
    for (let producto of productos) {
        let container_producto = document.createElement("div");
        container_producto.classList.add("card-producto");
        container_producto.innerHTML = `
        <div class=img-container>
            <img src="${producto.thumbnail}" alt="${producto.title}" class="img-producto"/>
        </div>
        <div class="info-producto">
            <h2>${producto.title}</h2>
            <p>Marca: ${producto.brand}</p>
            <p>Precio: $${producto.price}</p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
        </div>
        `
        section_productos.appendChild(container_producto);
    }

    let btn_agregar_carrito = document.getElementsByClassName("btn-agregar");
    // console.log(btn_agregar_carrito)
    for (let boton of btn_agregar_carrito) {
        boton.addEventListener("click", () => {
            let producto = productos.find(producto => producto.id == boton.dataset.id);
            agregarAlCarrito(producto, parseInt(1));
            console.log(`producto agregado`);
            mostrarCarrito();
        })
    }
}

const carrito = [];
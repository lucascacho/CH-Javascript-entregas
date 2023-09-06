import { requestCategorias, cargarCategorias } from './categorias.js';
import { requestProductos, mostrarProductos } from './productos.js';
import { inicializarCarrito, agregarAlCarrito, mostrarCarrito, eliminarDelCarrito, vaciarCarrito } from './carrito.js';

const API_URL = 'https://dummyjson.com/products'

let section_categorias = document.getElementById("section-categorias");
let section_productos = document.getElementById("section-productos");
let section_carrito = document.getElementById("section-carrito");
let btn_sel_cat = document.getElementById("btn-sel-cat");
let btn_vaciar_carrito = document.getElementById("btn-vaciar-carrito");

//tuve que agregar esto para que funcione a que cargue el dropdown, sino devolvia null. no entiendo por que.
document.addEventListener("DOMContentLoaded", function() {
    const dropdown_categorias = document.getElementById("dropdown_categorias");
  }); 


requestCategorias(API_URL).then((categorias) => {cargarCategorias(categorias)});
inicializarCarrito();

const productos = [];
btn_sel_cat.addEventListener("click", () => {
    dropdown_categorias = document.getElementById("dropdown_categorias");
    let categoria_elegida = dropdown_categorias.value;
    console.log(`mostrando ${categoria_elegida}`);
    requestProductos(API_URL, productos, 5, categoria_elegida).then(() => mostrarProductos(productos));
})

btn_vaciar_carrito.addEventListener("click", () => {
    vaciarCarrito();
    mostrarCarrito();
})


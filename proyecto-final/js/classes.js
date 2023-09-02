const API_PRODUCTS = 'https://dummyjson.com/products/'

// class Producto {
//     constructor(nombre, precio, cantidad, categoria) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//         this.categoria = categoria;
//     }
    
//     precioTotal() {
//         return this.precio * this.cantidad;
//     }

//     static deObjeto(objeto) {
//         let producto = new Producto(objeto.nombre, objeto.precio, objeto.cantidad, objeto.categoria);
//         producto.id = objeto.id;
//         Object.setPrototypeOf(producto, Producto.prototype);
//         return producto;
//     }

// }

class Carrito {
    constructor() {
        this.productos = [];
    }

    //metodo que agrega un producto al carrito - si le paso los parametros, los usa, sino los pide por prompt
    cargarProducto(nombre, precio, cantidad) {
        let producto = new Producto();
        producto.nombre = nombre ? nombre : prompt("Ingrese el nombre del producto");
        producto.precio = precio ? precio : parseInt(prompt("Ingrese el precio del producto"));
        producto.cantidad = cantidad ? cantidad : parseInt(prompt("Ingrese la cantidad del producto"));

        //le asigno un id al producto - si el carrito esta vacio, el id es 1, sino es el id del ultimo producto + 1
        const largestId = this.productos.reduce((maxId, producto) => {
            return producto.id > maxId ? producto.id : maxId;
          }, 0);
        producto.id = this.productos.length + 1 < largestId + 1 ? this.productos.length + 1 : largestId + 1;

        this.productos.push(producto);
    }

    //metodo que devuelve el precio total del carrito
    //reescribir con reduce const total = carrito.reduce((acc,ite)=> acc + (ite.cantidad * ite.precio), 0)
    precioTotal() {
        let precioTotal = 0;
        for (let producto of this.productos) {
            precioTotal += producto.precioTotal();
        }
        return precioTotal;
    }

    eliminarProductoNombre(nombre) {
        let productoAEliminar = this.productos.find(producto => producto.nombre.toLowerCase() == nombre.toLowerCase());
        let posicion = this.productos.indexOf(productoAEliminar);
        this.productos.splice(posicion, 1);
    }

    eliminarProductoId(id) {
        this.productos.splice(id - 1, 1);
    }

    //tuve que crear este metodo para poder traerme el carrito del storage, ya que se perdian los metodos al parsear el JSON
    static deStorage(objeto) {
        let carrito = new Carrito();
        objeto.productos.forEach((producto) => {
            carrito.productos.push(Producto.deObjeto(producto));
        })
        return carrito;
    }

}

class Item {
    constructor(id, cantidad) {
        this.id = id;
        this.cantidad = cantidad;
    }

    async precio() {
        const response = await fetch(API_PRODUCTS + this.id);
        const data = await response.json();
        const precio_unitario = data.price;
        return precio_unitario * this.cantidad;
    }
}

class CarritoNew {
    constructor() {
        this.items = [];
    }
}

// const item_test = new Item(1, 2);
// console.log(item_test);
// item_test.precio().then((precio) => console.log(precio));

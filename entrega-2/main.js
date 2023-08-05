class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    precioTotal() {
        return this.precio * this.cantidad;
    }

}

class Carrito {
    constructor() {
        this.productos = [];
    }

    //metodo que agrega un producto al carrito - si le paso los parametros, los usa, sino los pide por prompt

    cargarProducto(nombre, precio, cantidad) {
        let producto = new Producto();

        if (nombre) {
            producto.nombre = nombre;
        } else {
            producto.nombre = prompt("Ingrese el nombre del producto");
        }

        if (precio) {
            producto.precio = precio;
        } else {
            producto.precio = parseInt(prompt("Ingrese el precio del producto"));
        }

        if (cantidad) {
            producto.cantidad = cantidad;
        } else {
            producto.cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
        }

        //le asigno un id dentro del carrito al producto que estoy agregando
        producto.id = this.productos.length + 1;
        
        this.productos.push(producto);
    }

    //metodo que devuelve el precio total del carrito
    precioTotal() {
        let precioTotal = 0;
        for (let producto of this.productos) {
            precioTotal += producto.precioTotal();
        }
        return precioTotal;
    }

}

let carrito = new Carrito();
let carrito_body = document.getElementById("carrito_body");
let carrito_header = document.getElementById("carrito_header");

let carrito_prueba = new Carrito();
carrito_prueba.cargarProducto("TV 42", 150000, 1);
carrito_prueba.cargarProducto("Mesa", 12000, 1);
carrito_prueba.cargarProducto("Silla", 8000, 4);
carrito_prueba.cargarProducto("Cama", 30000, 1);


while (true) {
    let opcion = prompt("Ingrese una opcion: \n 1- Agregar producto \n 2- Mostrar carrito \n 3- Cargar carrito de pruebas \n 4- Salir")
    if (opcion == 1) {
        carrito.cargarProducto();
    }
    else if (opcion == 2) {
        // let contador = 0
        carrito.productos.forEach((producto) => {
            // contador++;
            // producto.id = contador;
            // producto.id = carrito.productos.indexOf(producto) + 1;
            let divProducto = document.createElement("div");
            divProducto.innerHTML = `
                <h3>Producto ${producto.id}:</h3>
                <ul>Descripcion: ${producto.nombre}</ul>
                <ul>Precio: $${producto.precio} /u</ul>
                <ul>Cantidad: ${producto.cantidad}</ul>
                <ul>Precio total: $${producto.precioTotal()}</ul>
            `
            carrito_body.append(divProducto);
        })
        let gran_total = document.createElement("div");
        gran_total.innerHTML = `<h2>Gran total: $${carrito.precioTotal()}</h2>`
        carrito_header.append(gran_total);
        break
    }
    else if (opcion == 3) {
        carrito = carrito_prueba;
    }
    else if (opcion == 4) {
        break;
    }

}


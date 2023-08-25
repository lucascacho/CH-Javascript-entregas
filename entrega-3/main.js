class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
    precioTotal() {
        return this.precio * this.cantidad;
    }

    static deObjeto(objeto) {
        let producto = new Producto(objeto.nombre, objeto.precio, objeto.cantidad);
        producto.id = objeto.id;
        Object.setPrototypeOf(producto, Producto.prototype);
        return producto;
    }

}

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

//carrito de prueba para simplificar el testeo de las otras funcionalidades
let carrito_prueba = new Carrito();
carrito_prueba.cargarProducto("TV", 150000, 1);
carrito_prueba.cargarProducto("Cama", 30000, 1);
carrito_prueba.cargarProducto("Silla", 8000, 4);
carrito_prueba.cargarProducto("Mesa", 12000, 1);

let carrito = new Carrito();
let carrito_body = document.getElementById("carrito_body");
let carrito_header = document.getElementById("carrito_header");
let btn_cargar_producto = document.getElementById("btn_cargar_producto");
let btn_vaciar_carrito = document.getElementById("btn_vaciar_carrito");
let btn_test = document.getElementById("btn_test");
let btn_eliminar_producto = document.getElementById("btn_eliminar_producto");
let btn_guardar_carrito = document.getElementById("btn_guardar_carrito");
let btn_cargar_carrito = document.getElementById("btn_cargar_carrito");
let btn_borrar_storage = document.getElementById("btn_borrar_storage");


const mostrarCarrito = () => {
    carrito_body.innerHTML = "";
    carrito_header.innerHTML = "";
    carrito.productos.forEach((producto) => {
        let divProducto = document.createElement("div");
        divProducto.innerHTML = `
            <h3>Producto ${producto.id}:</h3>
            <ul>Descripcion: ${producto.nombre}</ul>
            <ul>Precio: $${producto.precio} /u</ul>
            <ul>Cantidad: ${producto.cantidad}</ul>
            <b><ul>Precio total: $${producto.precioTotal()}</ul></b>
        `
        divProducto.setAttribute("class", "producto");
        carrito_body.append(divProducto);
    })
    let gran_total = document.createElement("div");
    gran_total.innerHTML = `<h2>Gran total: $${carrito.precioTotal()}</h2>`
    carrito_header.append(gran_total);
}
mostrarCarrito();

btn_cargar_producto.addEventListener("click", () => {
    let div_form = document.getElementById("user_input");
    div_form.innerHTML = `
        <form id="form_cargar_producto">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <label for="precio">Precio:</label>
            <input type="number" id="precio" name="precio" required>
            <label for="cantidad">Cantidad:</label>
            <input type="number" id="cantidad" name="cantidad" required>
            <input type="submit" value="Cargar">
        </form>
    `
    let form_cargar_producto = document.getElementById("form_cargar_producto");
    form_cargar_producto.addEventListener("submit", (e) => {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let precio = parseInt(document.getElementById("precio").value);
        let cantidad = parseInt(document.getElementById("cantidad").value);
        carrito.cargarProducto(nombre, precio, cantidad);
        div_form.innerHTML = "";
        mostrarCarrito();
    })
})


btn_vaciar_carrito.addEventListener("click", () => {
    carrito.productos = [];
    mostrarCarrito();
})


btn_test.addEventListener("click", () => {
    for (let producto_prueba of carrito_prueba.productos) {
        carrito.cargarProducto(producto_prueba.nombre, producto_prueba.precio, producto_prueba.cantidad);
    }
    mostrarCarrito();
})


btn_eliminar_producto.addEventListener("click", () => {
    Swal.fire({
        title: 'Como quiere eliminar el producto?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Por Nombre',
        denyButtonText: `Por ID`,
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#3085d6',
      }).then((result) => {

        if (result.isConfirmed) { //si elige eliminar por nombre
          Swal.fire({
            title: 'Ingrese el nombre del producto a eliminar',
            input: 'text',
            inputValidator: (value) => {
                if (!value) {
                  return 'Debe ingresar un nombre'
                }
              }
          }).then((result) => {
            carrito.eliminarProductoNombre(result.value);
            mostrarCarrito();
          })

        } else if (result.isDenied) { //si elige eliminar por id
          Swal.fire({
            title: 'Ingrese el ID del producto a eliminar',
            input: 'number',
            inputValidator: (value) => {
                if (!value) {
                  return 'Debe ingresar un ID'
                }
              }
          }).then((result) => {
            carrito.eliminarProductoId(result.value);
            mostrarCarrito();
          })
        }
      })
    }) 

btn_guardar_carrito.addEventListener("click", () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
})

btn_cargar_carrito.addEventListener("click", () => {
    const objetoStorage = JSON.parse(localStorage.getItem("carrito"))
    const carritoStorage = Carrito.deStorage(objetoStorage);
    carrito = carritoStorage;
    mostrarCarrito();
    
})

btn_borrar_storage.addEventListener("click", () => {
    Swal.fire({
        title: 'Esta seguro?',
        text: "Se eliminarán todos los productos guardados en storage",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito");
            carrito = new Carrito();
            mostrarCarrito()
        }
      })
    
    ;
})
# Pre-entrega 3 - Lucas Cacchione

## Carrito de compras para tienda de ecommerce

### Link en vivo a la app: [entrega-3](https://lab.cacho.tech/entrega-3/index.html)

### Idea:  
Para esta entrega, seguí construyendo sobre el concepto del carrito de compras. Ahora incorporé funciones para darle mayor dinamismo al interactuar con el DOM.


### Detalles del codigo:  
Los inputs ahora son todos via formulario, o a través de un sweetAlert. Tambien incorporé funciones de guardado del carrito, usando el localStorage del explorador.


### Explicación de las funciones:  
1) **Cargar nuevo Producto**: Permite al usuario cargar un nuevo producto al carrito, al hacer click, aparece el form para ingresar los valores.

2) **Cargar productos de prueba**: Carga un carrito de prueba predefinido, a fines de simplificar las pruebas de las otras funciones.

3) **Vaciar Carrito**: Quita todos los productos del carrito.

4) **Eliminar Producto**: Permite al usuario eliminar un producto del carrito. Permite dos opciones de busqueda: Por __ID__ y por __Nombre__.

#### Las siguientes funciones hacen uso del LocalStorage del explorador:

5) **Guardar carrito en storage**: Guarda el carrito actualmente en pantalla en el localstorage para poder ser recuperado en otra sesión.

6) **Cargar carrito del storage**: Recupera el carrito guardado en storage y lo muestra en pantalla.

7) **Borrar carrito del storage**: Elimina cualquier carrito guardado en storage. Pide confirmación.
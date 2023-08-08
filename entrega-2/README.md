# PreEntrega 2 - Lucas Cacchione

## Carrito de compras para tienda de ecommerce

### Link en vivo a la app: [entrega-2](https://lab.cacho.tech/entrega-2/index.html)

### Idea:  
La idea es que en con las proximas entregas vaya armando las funcionalidades de mi futuro proyecto final. Quise comenzar armando la logica del carrito ya que me pareció un buen ejemplo para ir practicando los conceptos de clases y objetos.


### Detalles del codigo:  
La aplicacion simula un carrito de compras con funcionalidades basicas, como agregar productos, eliminar productos y calcular precios totales.

Adicionalmente a lo que pedía la consigna, usé un poco de los conceptos introductorios del DOM, que vimos en la clase del Jueves. 

En el futuro obviamente los productos se cargarían de otra forma, pero por el momento esto me sirve para practicar como mostrar el carrito en la pagina de manera dinamica.

La app esta hosteada usando **GitHub Pages** en este mismo repositorio.


#### Explicación de las funciones:  
1) **Cargar Producto**: Permite al usuario cargar un nuevo producto al carrito, ingresando todas sus variables (nombre, precio, cantidad) manualmente.

2) **Cargar carrito de ejemplo**: Carga un carrito de prueba predefinido, a fines de simplificar las pruebas de las otras funciones.

3) **Eliminar producto del carrito**: Permite al usuario eliminar un producto del carrito. Permite dos opciones de busqueda: Por __ID__ y por __Nombre__.

4) **Cerrar menu y mostrar carrito**: Cierra el prompt y muestra el carrito actualizado en la página.
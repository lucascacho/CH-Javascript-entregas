# Proyecto Final - Lucas Cacchione

## Portal de eCommerce

### Link en vivo a la app: [proyecto-final](https://lab.cacho.tech/proyecto-final/)

### Idea:  
La verdad que me pareció buena idea ir con la sugerencia del proyecto y hacer un portal de ecommerce. Intenté no dejarme influir demasiado por las sugerencias de mis compañeros o del profesor, por lo que quizas el codigo contiene algunas decisiones arbitrarias mias.

### Detalles del codigo:  
Primero que nada, quisiera aclarar que no hice el curso de diseño web, por lo que me costó mucho darle algun tipo de diseño a la pagina. Es muy probable que haya errores de uso y de formateo en el css y html, por lo que agradezco la comprensión al momento de evaluar mi codigo :)

Todo el css aplicado en este proyecto fue aprendido esta ultima semana, por lo que este es mi primer proyecto completo dandole diseño a una pagina.

Con respecto al Javascript utilizado, mi enfoque fue orientado a poder armar una interfaz que pueda utilizar APIs publicas de productos, para asi mostrarlos de manera ordenada.

Buscando en internet, me encontré con [DUMMYJSON](https://dummyjson.com/docs/products), que tiene un montón de APIs publicas para experimentar. Viendo todas las distintas funciones que ofrecía, me decidí por utilizarlo.

### Showcase de funciones:
-**Selector de categorías dinamico:** El dropdown de la izquierda que contiene las categorias es populado de manera dinamica a traves de una API. Al momento de carga de la página, se actualiza con la ultima lista de todas las categorias disponibles en el servidor.

-**Carrito dinámico en Storage:** El carrito funciona con almacenamiento local en el browser. Utiliza como clave el campo "id", provisto por el servidor, para identificar a cada producto que se agrega. De esta forma se pueden agregar más unidades de un mismo producto, sin tener que agregar mas lineas en el carrito.

-**Función de "undo" al vaciar el carrito:** Si el usuario accidentalmente hace click en "Vaciar Carrito", por unos segundos tiene la opción de deshacer el vaciado haciendo click en el toast que aparece en pantalla.

-**Compra:** Al clickear en el boton "comprar", se nos presenta con una simulación de la finalizacion de la compra, utilizando el modulo SweetAlert.


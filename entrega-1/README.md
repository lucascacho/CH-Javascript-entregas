# PreEntrega 1 - Lucas Cacchione

## Aplicacion generadora de digito verificador para consulta de patentes en AGIP


### Origen de la idea:
Se me ocurrio hacer esta app ya que la semana pasada tuve que interactuar con la aplicacion web de la pagina de AGIP, donde uno puede consultar el saldo a pagar de patentes de vehiculos.
En esa pagina, uno puede ingresar, ademas de la patente del auto, un "Digito verificador", el cual se supone que sirve para demostrar que poseemos la documentación del vehiculo.
Sin embargo, al parecer, el algoritmo para generar ese digito verificador es conocido, y simple de recerar. Es por eso que decidi hacer esta aplicacion para que sea facil de calcular el algoritmo para cualquier patente de auto.

### Detalles del codigo
El codigo de esta app usa un par de conceptos mas avanzados de los que vimos en las clases. Originalmente pense que iba a poder resolver esto usando solamente los conceptos vistos, pero me encontre con que iba a tener que usar algun metodo para strings (string.replace) y tambien algunos conceptos de arrays para recorrer los strings.
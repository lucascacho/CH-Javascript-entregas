# PreEntrega 1 - Lucas Cacchione

## Aplicacion generadora de digito verificador para consulta de patentes en AGIP

## Link en vivo a la app: https://lab.cacho.tech/entrega-1/

### Origen de la idea:
Se me ocurrio hacer esta app ya que la semana pasada tuve que interactuar con la aplicacion web de la pagina de AGIP, donde uno puede consultar el saldo a pagar de patentes de vehiculos.  
En esa pagina, uno puede ingresar, ademas de la patente del auto, un "Digito verificador", el cual se supone que sirve para demostrar que poseemos la documentación del vehiculo.  
Sin embargo, al parecer, el algoritmo para generar ese digito verificador es conocido, y simple de recerar. Es por eso que decidi hacer esta aplicacion para que sea facil de calcular el algoritmo para cualquier patente de auto.  

### Detalles del codigo
El codigo de esta app usa un par de conceptos mas avanzados de los que vimos en las clases. Originalmente pense que iba a poder resolver esto usando solamente los conceptos vistos, pero me encontre con que iba a tener que usar algun metodo para strings (string.replace) y tambien algunos conceptos de arrays para recorrer los strings.

#### Explicacion del algoritmo:

> Código de verificación de patentes de autos
> Con esta tabla podes sacar el digito verificador de las patentes de Capital Federal y podes averiguar el estado de deuda e imprimir las boletas de pago
>
> TABLA NUMERICA PARA ESTABLECER EL DIGITO VERIFICADOR DE PATENTES DE VEHICULOS DE CIUDAD AUTONOMA DE BUENOS AIRES
> A=14 B=01 C=00 D=16 E=05 F=20 G=19 H=09 I=24 J=07 K=21 L=08 M=04 N=13 O=25 P=22 Q=18 R=10 S=02 T=06 U=12 V=23 W=11 X=03 Y=15 Z=17
>
> PROCEDER DE LA SIGUIENTE FORMA EJEMPLO 1 – DOMINIO: USW621
> Se toman las letras y número como corresponde USW621. Se reemplazan las letras por los números según tabla
> USW621=120211621
> Se suman los números desde la “derecha” a la “izquierda” alternados 1+6+1+0+1=9 y 2+1+2+2=7 entonces el Digito Verificados es 97
> EJEMPLO 2 – DOMINIO : C1661855
> Se reemplaza la letra por el número según tabla
> C1661855 = 001661855
> Se suman los números desde la “derecha” a la “izquierda” alternados 5+8+6+1=20=2+0=2 y 5+1+6=12 = 1+2=3 Entonces el Digito Verificador es 23

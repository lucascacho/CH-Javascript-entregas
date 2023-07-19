//valores de las letras para calcular el digito verificador
const A = '14';
const B = '01';
const C = '00';
const D = '16';
const E = '05';
const F = '20';
const G = '19';
const H = '09';
const I = '24';
const J = '07';
const K = '21';
const L = '08';
const M = '04';
const N = '13';
const O = '25';
const P = '22';
const Q = '18';
const R = '10';
const S = '02';
const T = '06';
const U = '12';
const V = '23';
const W = '11';
const X = '03';
const Y = '15';
const Z = '17';


//funcion que solicita una patente y hace validacion basica

const ingresar_patente = () => {
    do {
        let patente = prompt("Ingrese una patente (ej ABC123 o AB123CD");
        if (patente.length == 6 || patente.length == 7) { //chequea que la patente tenga 6 o 7 caracteres
            return patente.toUpperCase(); //devuelve la patente en mayusculas
        } else {
            alert("Patente invalida");
        }
    } while (true);
}

patente = ingresar_patente();
alert(`Patente ingresada: ${patente}`);

//uso una funcion anonima a la que le paso cada letra del string, y uso eval() para que evalue cada letra como una variable (las cuales ya defini arriba) y me devuelva el valor que le corresponde
let patente_numeros = patente.replace(/[A-Z]/g, function (x) { return eval(x) } ); 



//funcion que calcula los digitos verificadores
// Ejemplo: USW621
// Se toman las letras y número como corresponde USW621. Se reemplazan las letras por los números según tabla
// USW621=120211621
// Se suman los números desde la “derecha” a la “izquierda” alternados 1+6+1+0+1=9 y 2+1+2+2=7 obteniendo los dos digitos verificadores que son 9 y 7

const calcular_digitos_verificadores = (patente_numeros) => {
    let digito_verificador_1 = 0;
    let digito_verificador_2 = 0;
    for (let i = patente_numeros.length - 1; i >= 0 ; i--) {
        if (i % 2 == 0) {
            digito_verificador_1 += parseInt(patente_numeros[i]);
        } else if (i % 2 == 1){
            digito_verificador_2 += parseInt(patente_numeros[i]);
        }
    }

    // si alguno de los digitos es mayor a 9, sumo sus digitos (ej: 12 => 1+2=3)
    if (digito_verificador_1 > 9) {
        digito_verificador_1 = digito_verificador_1.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    }
    if (digito_verificador_2 > 9) {
        digito_verificador_2 = digito_verificador_2.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    }

    return digito_verificador_1.toString() + digito_verificador_2.toString();
}

let digitos_verificadores = calcular_digitos_verificadores(patente_numeros);

alert(`Digitos verificadores: ${digitos_verificadores}`)
alert("Puede comprobar estos digitos ingresando al link de AGIP en la pagina")
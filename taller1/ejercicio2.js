//  Pedir al usuario 1 números sacar la potencia cuadrada y cubica de un número


alert("hola, voy a calcular la potencia cuadrada y cubica de este número");


let numero = prompt("ingrese un numero");

let resultado = parceInt(Math.pow(numero, 2 ** 3));

alert("el resultado de esta operación es " + resultado);
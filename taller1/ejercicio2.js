//  Pedir al usuario 1 números sacar la potencia cuadrada y cubica de un número


alert("hola, voy a calcular la potencia cuadrada y cubica de este número");


let numero = prompt("ingrese un numero");

let resultado = parseInt(Math.pow(numero, 2 ));

let potencia_cubica = parseInt(Math.pow(numero, 3));

alert("la raiz cuadrada es  " + resultado + " y la potencia cubica es " + potencia_cubica);
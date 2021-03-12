/*Leer 10 enteros, almacenarlos en un vector y determinar en qué posición del vector está el
mayor número par leído.

*/


var numeros = [];

for(let i=0; i<10; i++){
    numeros[i] = parseInt(Math.random() * (100 - 0) + 0);
}

console.log(numeros);

var numeroMayor = 0;
var posicionMayor = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor && numeros[i]%2 == 0) {
        numeroMayor = numeros[i];
        posicionMayor = i + 1;
    }
}

console.log("Su número mayor es: "+numeroMayor+" y su posición es: "+posicionMayor)
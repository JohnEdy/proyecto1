/*Leer 10 enteros, almacenarlos en un vector y determinar en qué posición del vector está el
mayor número par leído.

*/


let vector = [];
let numero = 0;
let posicion = 0;
let numero_par = 0;

//2. llenamos el vector
for(let i=0; i<10; i++){
    vector[i] = parseInt(Math.random() * (100 - 0) + 0);
}

console.log(vector);

for (let i = 0; i < vector.length; i++) {
    if (vector[i] > numero && vector[i] % 2 == 0) {
        numero = vector[i];
        numero_par = numero % 2 == 0;
        posicion = i + 1;

    }

}

console.log("El número mayor es par : " + numero+ " y su posición es: "+posicion);
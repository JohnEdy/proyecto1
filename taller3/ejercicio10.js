/*Leer un número entero y determinar a cuánto es igual la suma de todos los enteros
comprendidos entre 1 y el número leído.

entrada = numero del usuario.
salida = sumar todos los enteros comprendidos entre uno y numero leido.



*/

let numero = parseInt(prompt("Señor usuario ingresu un numero"));

for (let i = 1; i <= numero; i++) {
    document.write(i +"-" + numero);
}
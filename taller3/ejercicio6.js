/*Leer un número entero de tres dígitos y mostrar todos los enteros comprendidos entre 1 y cada
uno de los dígitos.

*/let numero = parseInt(prompt("diga un número de tres digitos"));

for (let i = 100; i <= numero; i++) {
    console.log(i);
}
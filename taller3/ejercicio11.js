/* Leer un número entero de dos dígitos y mostrar en pantalla todos los enteros comprendidos
entre un dígito y otro.

entrada = numero usuario
salida = mostrar el resultado
*/

let numero = parseInt(prompt("Señor usuario ingrese un numero de dos digitos"));

for(let i=10; i <= 99; i++){
    document.write("-" + i);
}
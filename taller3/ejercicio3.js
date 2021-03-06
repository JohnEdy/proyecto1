/*. Leer un número entero y mostrar todos los divisores exactos del número comprendidos entre 1
y el número leído.
valor entrada = usuario
1,2,4,8

*/

let numero = parseInt(prompt("ingrese un numero para hallar por que numero es divisible"));


for (let i = 1; i <= numero; i++) {
     if (numero%i === 0 ) {
         document.write(i);
         }
    }


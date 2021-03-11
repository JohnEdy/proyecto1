/*  Leer dos números y mostrar todos los números terminados en 4 comprendidos entre ellos.
 los numeros al usuario
 numeros terminados en cuatro
*/
let num1 = parseInt(prompt("ingrese un número"));
let num2 = parseInt(prompt("ingrese otro número"));


num1 = num1 + 1;

while (num1 < num2) {
    let respuesta = num1&10;

    if(respuesta == 4){
        document.write(respuesta);
        num1 = num1 + 1;
    }
}
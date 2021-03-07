/*dados 2 números, decir cual es el número mayor
 entrada = numero de los usuarios
 */

  alert("Programa para determinar que numero es mayor que otro");

let num1 = parseInt (prompt("ingrese un numero"));
let num2 = parseInt (prompt("ingrese otro numero"));

if(num1 == num2){
    document.write("El numero " + num1 + " es igual al " + num2);

}else{
if(num1 > num2 ){
    document.write("El numero " + num1 + " es mayor que numero " + num2);

}else{
    document.write("E numero " + num2 + "es  menor que numero " + num1);
}
}
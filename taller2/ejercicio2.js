/*
 En la tienda de don juan, usted va y compra frutas, Solicite al usuario el valor total de compra, debe ofrecer un 15 % de descuento si el valor de compra del mercado es mayor o igual a 20.000. al final debe indicar el valor total de la compra.

 don Juan
 valor total de la compra
 hay un 15% de descuento
 por compras igual o mayor a 20.000

*/

let total_compra = parseInt(prompt("ingrese el valor total a pagar"));
let descuento = total_compra * 0.15;

if(total_compra >= 20000){
     valor_cancelar = total_compra - descuento;
     document.write("El total a pagar es de $" + valor_cancelar + " Pesos");
}else{
    document.write("Su total a pagar es de " + total_compra + " Pesos");
}
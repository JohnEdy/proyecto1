/* . Calcular el total que una persona debe pagar en un monta llanta, si el precio por unidad es de $80.000 si se compran menos de 5 llantas y de $70.000 si se compran 5 o más.

valor total en el montallanta
precio unidad = $80.000 si se compra  menos de 5
precio unidad = $70.000 si se compra más de 5


*/

let unidad_compra = parseInt(prompt("¿Cuantas llantas va a cancelar?"));



if(unidad_compra < 5){
    total = unidad_compra * 80000;
    document.write("El valor a pagar es de $ " + total + " Pesos");

}else{
    total = unidad_compra * 70000;
    document.write("El total a pagar es de $ " + total + " Pesos");
}



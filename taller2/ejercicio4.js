/*
Solicite a carlos la cantidad de dinero que tiene en su bolsillo, si tiene menos de 1800, no puede subirse al bus, si tiene más de 1800 si puede subirse al bus

saldo disponible 
1800 para abordar el bus
1700 no puede 

*/

let saldo_disponible = parseInt(prompt("Carlos, ¿cual es tu saldo disponible?"));

if(saldo_disponible > 1800){
    document.write(" Bienvenido al MegaCable");
}else{
    document.write( "$ " + saldo_disponible + " Pesos, Porfavor recargue su cuenta");
}



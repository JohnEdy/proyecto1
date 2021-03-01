// . Maria quiere ir a cine, y la entrada cuesta 8500, pero ella sólo tiene 6700, mostrar en pantalla 
// cuánto dinero le hace falta para entrar a cine.


alert("hola quieres entrar a cine? el valor de la entrada es de $8500");

let valor_entrada = 8500;
let valor_disponible = 6700;
let dinero_faltante = valor_entrada - valor_disponible;

if (valor_entrada <= valor_disponible){
    alert("Bienvenida a cine");

}else{
    alert("su saldo disponible es de $" + valor_disponible + " Pesos" + " Porfavor recargue su cuenta te falta $" + dinero_faltante + " Pesos");
}

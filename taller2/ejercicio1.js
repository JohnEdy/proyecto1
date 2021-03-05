/*
   pedir tres números; si el primero es negativo, debe imprimir el producto de los tres y si no lo es, imprimirá la suma.
    solución
*/

let primer_num = parseInt(prompt("ingrese un número"));
let segundo_num = parseInt(prompt("ingrese un otro número"));
let tercer_num = parseInt(prompt("ingrese un número"));

if(primer_num < 0 ){
   resultado = primer_num, segundo_num, tercer_num;
   document.write(resultado);
}
else{
    result2 = primer_num + segundo_num + tercer_num;
    document. write(result2);
}
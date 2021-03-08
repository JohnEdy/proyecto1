/*
 Leer dos números y mostrar todos los enteros comprendidos entre ellos.
  dos numeros al usuario
  mostrar enteros comprendidos entre ellos.

 */
 alert("Enteros comprendidos entre ellos");

  let num1 = parseInt(prompt("ingrese un numero"));
  let num2 = parseInt(prompt("ingrese un otro numero"));

 let temporal = num1;
 let digito;

 while (temporal > 0){
     digito = temporal%10;
     temporal = (temporal-digito)/10;
     document.write("El digito es igual a " + digito);
 
 for(let i = 1 ; i <= digito; i++){
  document.write(i);
 }
}


let temporal2 = num2;
let digito2;

while (temporal2 > 0){
    digito2 = temporal2%10;
    temporal2 = (temporal2-digito2)/10;
    document.write("El digito es igual a " + digito2);

for(let b = 1 ; b <= digito2; b++){
 document.write( b);
}
}
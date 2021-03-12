/*  Leer un número entero de 3 dígitos y determinar si tiene el dígito 1.
entrada: numero de tres digitos.
salida : mostrar en pantalla.
*/

for (let i = 100; i < 999; i++) {
    if(i%10 == 1){
        console.log(i);
    }
}
/*  Lina desea ir a rumbear con sus amigos, el guarda a la entrada de la discoteca desea saber si la puede dejar entrar o no. pídale a lina la edad y si es mayor de edad, mostrar en pantalla que puede pasar, si es mejor, mostrar en pantalla que no puede entrar
usuario = edad
salida = saber edad
*/

let edad_lina = parseInt(prompt("¿Cual es tu edad?"));


if(edad_lina >= 18){
    document.write("Puedes ingresar tu edad es " + edad_lina + " años");
}else{
    document.write("Lo sentimos no puedes ingresar eres menor de edad");
}
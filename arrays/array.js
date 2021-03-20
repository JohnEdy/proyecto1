
let matrizFila = new Array();

for(let i = 0; i<=10; i++){
    matrizFila[i] = new Array();
    for(let a = 0; a<=10; a++){
        matrizFila[i][a] = i + "" + a;
    }
}

for(let elemento in matrizFila){
    console.log(elemento + " = " + matrizFila[elemento]);
}
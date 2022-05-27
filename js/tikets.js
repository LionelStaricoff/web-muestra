var valor=200;
function pagos(){

var cantidad= parseInt(document.getElementById("cantidad").value );
var categoria= document.getElementById("categoria").value;
var descuento;

 
switch (categoria) {

    case "Estudiante":
    descuento = 80;
    break;

    case "Trainee":
    descuento = 50;
    break;

    case "Junior":
    descuento = 15;
    break;
}

var imprimeTotal =  cantidad *(valor - (valor * descuento /100) );

document.getElementById("total").innerHTML = imprimeTotal;

}

function borrar(){
    document.getElementById("total").innerHTML = "";
}
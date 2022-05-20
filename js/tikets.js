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

//var total = document.getElementById("total");
document.getElementById("total").innerHTML = imprimeTotal;

}

/*
function botonPagos(){
    var valor=200;
    var cantidad= parseInt(document.querySelector("#cantidad").innerHTML );
    var categoria= document.querySelector("#categoria").innerHTML;
    var descuento=0;
    
     
    
    switch (categoria) {
    
        case "Estudiante":
        descuento = 80;
        break;
    
        case "trainee":
        descuento = 50;
        break;
    
        case "Junior":
        descuento = 15;
        break;
    }
    
    
   var desc = valor*descuento/100;
   var pagar = (cantidad * (valor - desc));

   var totalAPagar= document.querySelector("#total");

    totalAPagar.innerHTML += pagar;
    }
    */
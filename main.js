const entrada = document.getElementById("entrada");
const boton = document.getElementById("btn");
const salida = document.getElementById("salida");

function convertir(){
    if(entrada.value === ""){
        console.log("Ingrese datos");
    }else{
    let num = entrada.value;
    let valor = 2;
    let respuesta = "";

    function invertirCadena(texto){
    return texto.split("").reverse().join("");
    }

    while(num >= 2){
    let cociente = Math.trunc(num/valor);
    let residuo = num%valor;
    let conversor = residuo.toString();
    respuesta += conversor; 
    num = cociente;
    }
    console.log(respuesta);
    let aux = num.toString();
    respuesta += aux;
    console.log(invertirCadena(respuesta));
    salida.value = invertirCadena(respuesta);
    } 
}

boton.onclick = convertir;
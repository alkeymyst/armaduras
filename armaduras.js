//varriable tipo array con la ubiacion de las armaduras
var images = ['./img/n.gif','./img/1s.gif','./img/2s.gif','./img/3s.gif','./img/4s.gif','./img/5s.gif','./img/6s.gif','./img/7s.gif','./img/1b.gif','./img/2b.gif','./img/3b.gif','./img/4b.gif','./img/5b.gif','./img/6b.gif','./img/7b.gif'];
let armaduraPuesta = "";

//funcion recibe arreglo y numero de arreglo, y devuelve string de la resputas, 
function arrayToString(arreglo, numero){
    let newString = arreglo[numero];
    let stringRecortado = newString.slice(6,-4);
    switch(stringRecortado){
        case "n": 
            return "C-Am"
            break;
        case "1s": 
            return "G-Em"
            break;
        case "2s": 
            return "D-Bm"
            break;
        case "3s": 
            return "A-F#m"
            break;
        case "4s": 
            return "E-C#m"
            break;
        case "5s": 
            return "B-G#m"
            break;
        case "6s": 
            return "F#-D#m"
            break;
        case "7s": 
            return "C#-A#m"
            break;
        case "1b": 
            return "F-Bbm"
            break;
        case "2b": 
            return "Bb-Gm"
            break;
        case "3b": 
            return "Eb-Cm"
            break;
        case "4b": 
            return "Ab-Fm"
            break;
        case "5b": 
            return "Db-Bbm"
            break;
        case "6b": 
            return "Gb-Ebm"
            break;
        case "7b": 
            return "Cb-Abm"
            break;
        default:
            return "";
    }
    
}

//Funcion  genera la imagen in la inserta en la etiqueta de imagen
let randomImage;
let numberGenerated;
function insertImage(){
    numberGenerated = Math.floor(Math.random() * images.length)
    randomImage = images[numberGenerated];
    document.getElementById("fotosArmaduras").src = randomImage;
}

// funcion que verifica respuesta
function seleccionBuenaOMala(){

    //array de  input de radio
    var armadurasRadios = document.getElementsByName("armaduras");
    var armaduraSeleccionada;
    //El for reccorre el array de radios para saber cual selecciono y devuelve string con respuesta
   
    for (var i = 0; i < armadurasRadios.length; i++) {
        if(armadurasRadios[i].checked){
          armaduraSeleccionada = armadurasRadios[i].value;
        }
    }

    //le da a armadura puesta el string asignado al azar
    armaduraPuesta = arrayToString(images, numberGenerated);

    //parte de la funcion que compara la seleccion con la respuesta seleccionada
    if(armaduraSeleccionada==armaduraPuesta){
        document.getElementById("textoRespuesta").innerHTML = "<span style='color:green;'>CORRECTO!!</span>";
    }else{
        document.getElementById("textoRespuesta").innerHTML = "<span style='color:red;'>MAL, INTENTALO DE NUEVO</span>";
        
    }

    //window.location.reload()              
   //  limpiarRadios();
   insertImage();

}      

//EJECUTA pagina

// inserta imagen inicial
insertImage();

// cuando el usurio hace click en el boton "verificar respuesta" se ejecuta la funcion seleccionBuenaOMala()
let botonRespuesta = document.getElementById("enviarRespuesta")
botonRespuesta.addEventListener("click", seleccionBuenaOMala)









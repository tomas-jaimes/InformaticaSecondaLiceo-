let boton = document.querySelector("#color")
let parrafo = document.querySelector("#Parrafo1")
let boton2 = document.querySelector("#magia")
let parrafo2 = document.querySelector("#Parrafo2")
let boton3 = document.querySelector("#magiaOscura")
let parrafo3 = document.querySelector("#Parrafo3")

boton.onclick = cambiarColor
boton2.onclick = ocultarMostrar
boton3.onclick = ocultarTemporal


function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}

function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}


function cambiarColor(){
    
    if(parrafo.style.color == "black"){
    parrafo.style.color =  colorHEX() 
    }
    else{
        parrafo.style.color = "black"
    }
}


function ocultarMostrar(){
    if (parrafo2.innerHTML == "A este parrafo le gusta hacer magia cuando el boton se oprime"){
        parrafo2.innerHTML = ""
    }
    else{
        parrafo2.innerHTML = "A este parrafo le gusta hacer magia cuando el boton se oprime"
    }
}

function ocultarTemporal(){
    parrafo3.style.display = "none"
    setTimeout(devolver, 3000);
}

function devolver(){
    parrafo3.style.display = "block"
}


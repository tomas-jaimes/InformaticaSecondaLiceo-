let boton = document.querySelector("#like")

boton.onclick = cambiarColor

function cambiarColor(){
    if(boton.style.color == "black"){
    boton.style.color = "blue";
    boton.style.backgroundColor = "pink"
    }
    else
    {
    boton.style.color = "black";
    boton.style.backgroundColor ="rgb(239, 239, 239)"   
    }
console.log("Boton clickeado");
}

boton.style.color = "black";
console.log(boton.style.color);
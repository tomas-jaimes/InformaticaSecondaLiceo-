let canvas = document.querySelector("#miCanvas")

let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 300;
let y = 0;
let r = 20;
let color = "Gainsboro";

let vY = 10;
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 1600, 400);
    let dY = dT/1000*vY
    y = y + dY;
    dibujarPelota(x, y, r, color);
}

function arrancarOdetener(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}
window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event){

    if (event.code == "Space")
    {
        arrancarOdetener();
    }
    if (event.key == "+")
    {
        r=r+1
    } 
    if (event.key == "-")
    {
        r=r-1
    } 
}


function cambiarColor(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
window.onclick = function(event){

    let PushX= event.offsetX 
    let PushY = event.offsetY
  distancia = Math.sqrt (Math.pow (PushX - x,2) + Math.pow (PushY - y,2))
    if (distancia <= r){
        cambiarColor()
    }
    else {  vY = -vY }
}
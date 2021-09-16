let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

//Espada

function dibujarEspada(xC, yC) {

ctx.fillStyle = "rgb(161, 165, 167)"
ctx.beginPath()
ctx.fillRect(xC,yC,5,55)

ctx.fillStyle = "gold"
ctx.beginPath()
ctx.fillRect(xC,yC+55,5,15)

ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(xC-10,yC+50,25,5)

ctx.fillStyle = "rgb(161, 165, 167)"
ctx.beginPath()
ctx.arc(xC, yC, 5, Math.PI*1.0, Math.PI*0,);
ctx.fill()

ctx.fillStyle = "white"
ctx.strokeStyle = "white"
ctx.beginPath()
ctx.arc(xC, yC, 15, Math.PI*2.5, Math.PI*1.5,);
ctx.stroke()
ctx.fill()
}
//Personaje

function dibujarPersonaje(x,y){

ctx.fillStyle = "rgb(255,205,120)"
ctx.beginPath()
ctx.arc(400, 400, 15, Math.PI*2.0, Math.PI*0,);
ctx.fill()

ctx.fillStyle = "gray"
ctx.beginPath()
ctx.arc(400, 397, 18, Math.PI*1.0, Math.PI*0,);
ctx.fill()

ctx.fillStyle = "black"
ctx.beginPath()
ctx.arc(395, 400, 3, Math.PI*2.0, Math.PI*0,);
ctx.fill()

ctx.fillStyle = "black"
ctx.beginPath()
ctx.arc(406, 400, 3, Math.PI*2.0, Math.PI*0,);
ctx.fill()

ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(395,407,10,3)
}
//Escudos

function dibujarEscudoD(x,y){
ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(365,417,70,8)

ctx.fillStyle = "cyan"
ctx.beginPath()
ctx.fillRect(370,419,60,2.5)

ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(370,424,60,3)
}

function dibujarEscudoR(x,y){
ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(420,365,8,70)

ctx.fillStyle = "cyan"
ctx.beginPath()
ctx.fillRect(422,370,2.5,60)

ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(427,370,3,60)
}

function dibujarEscudoL(x,y){
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.fillRect(372,365,8,70)
    
    ctx.fillStyle = "cyan"
    ctx.beginPath()
    ctx.fillRect(375,370,2.5,60)
    
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.fillRect(370,370,3,60)
    }
    
function dibujarEscudoU(x,y){
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.fillRect(365,370,70,8)
    
    ctx.fillStyle = "cyan"
    ctx.beginPath()
    ctx.fillRect(370,373,60,2.5)
    
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.fillRect(370,368,60,3)
    }
//Funcionamiento

let x = 0;
let y = 350;
let x1 = 400;
let y1 = 0;
let x2 = 800;
let y2 = 350;
let x3 = 400
let y3 = 800
let V = 200;
let dT = 5;

function animar(){
    ctx.clearRect(0,0, 800, 800);
    let dX = (dT/1000) * V;
    x = x + dX;
    dibujarEspada(x, y);
    let dY = (dT/1000) * V;
    y1 = y1 + dY;
    dibujarEspada(x1, y1);
    let dX2 = (dT/1000) * V;
    x2 = x2 - dX2;
    dibujarEspada(x2, y2);
    let dY2 = (dT/1000) * V;
    y3 = y3 - dY2;
    dibujarEspada(x3, y3);
    dibujarPersonaje(400,450);
    dibujarEscudoD(365,417);
    
window.onkeydown = function(event){
    
    if (event.key == "ArrowRight") {
     ctx.clearRect(0,0, 800, 800);
      dibujarEscudoR(x,y)}
    if (event.key == "ArrowLeft") {
     ctx.clearRect(0,0, 800, 800);
      dibujarEscudoL(x,y)}
    if (event.key == "ArrowUp") {
     ctx.clearRect(0,0, 800, 800);
      dibujarEscudoU(x,y)}
    if (event.key == "ArrowDown") {
     ctx.clearRect(0,0, 800, 800);
     dibujarEscudoD(x,y)}
 }
}

window.setInterval(animar, dT);

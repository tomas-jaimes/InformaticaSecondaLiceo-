let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

//lapiz

ctx.fillStyle = "rgb(223, 160, 79)"
ctx.strokeStyle = "rgb(223, 160, 79)"
ctx.beginPath()
ctx.moveTo(51,50)
ctx.lineTo(65,20)
ctx.lineTo(79,50)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.moveTo(70,30)
ctx.lineTo(60,30)
ctx.lineTo(65,20)
ctx.lineTo(70,30)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "yellow"
ctx.beginPath()
ctx.fillRect(50,50,30,70)

ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(53,50,3,70)
ctx.fillRect(60,50,3,70)
ctx.fillRect(67,50,3,70)
ctx.fillRect(74,50,3,70)

ctx.fillStyle ="gray"
ctx.beginPath()
ctx.fillRect(50,115,30,5)

ctx.fillStyle = "red"
ctx.strokeStyle = "red"
ctx.beginPath()
ctx.arc(65, 120, 14, Math.PI*2.0, 1.0* Math.PI,);
ctx.stroke()
ctx.fill()



//celular

ctx.fillStyle = "gray"
ctx.beginPath()
ctx.fillRect(190,40,70,110)

ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.arc(225, 145, 3, Math.PI*0, 2* Math.PI,);
ctx.fill()
ctx.stroke()

ctx.fillStyle = "black"
ctx.beginPath()
ctx.fillRect(200,50,50,90)
ctx.fill()
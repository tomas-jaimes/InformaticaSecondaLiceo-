let visitas= 1
if (visitas=null){
localStorage.setItem("visitas",JSON.stringify(visitas))
console.log("Ha ingresado por primera vez a esta página")}

else{
    visitas=JSON.parse(localStorage.getItem("visitas"))
visitas=visitas+1
console.log( `Se ha ingresado ${visitas} veces a esta página`)
localStorage.setItem("visitas",JSON.stringify(visitas))
}
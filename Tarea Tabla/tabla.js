let personajes = [
    {Nombre1:"Naruto", Nombre2:"Sasuke" , Nombre3:"Sakura" , Imagen:"https://pm1.narvii.com/6177/60875fbe85599712271527242f9870bf4db6f4a0_hq.jpg"},
    {Nombre1:"Gon", Nombre2:"Kurapika" , Nombre3:"Leorio" , Imagen:"https://i.pinimg.com/originals/d1/5b/a2/d15ba2d9ed4b88fc07bf5ed84d0c5c78.jpg"},
    {Nombre1:"Emma", Nombre2:"Ray" , Nombre3:"Norman" , Imagen:"https://freakelitex.com/wp-content/uploads/2019/02/The-Promised-Neverland-6-Ray-Emma-Norman.jpeg"},
    {Nombre1:"Eren", Nombre2:"Mikasa" , Nombre3:"Armin" , Imagen:"https://i0.wp.com/www.bitme.gg/wp-content/uploads/2020/11/Eren-Mikasa-Armin-carne-y-hueso.jpg?fit=1280%2C720&ssl=1"},
    {Nombre1:"Edward", Nombre2:"Alphonse" , Nombre3:"Winry" , Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tVUQtAfYCP4IEJoF7ZuQ9upHVXwwNu_TQA&usqp=CAU"},
    {Nombre1:"Josukue", Nombre2:"Koichi" , Nombre3:"Okuyasu" , Imagen:"https://images-na.ssl-images-amazon.com/images/I/81EmeBsD0tL._SL1500_.jpg"}
]

let tabla = document.querySelector('#personajes')

let contenidoTabla = '<tr><th>Nombre1</th><th>Nombre2</th><th>Nombre3</th><th>Imagen</th></tr>'
for (grupo of personajes){
    contenidoTabla = contenidoTabla + `<tr><td>${grupo.Nombre1}</td><td>${grupo.Nombre2}</td><td>${grupo.Nombre3}</td><td><img width="500px" src="${grupo.Imagen}" alt=""></td></tr>`
}

tabla.innerHTML = contenidoTabla;
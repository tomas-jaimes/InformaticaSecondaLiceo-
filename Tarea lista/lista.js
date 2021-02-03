let comidas = [
    {Nombre:"Arroz"},
    {Nombre:"Huevos"},
    {Nombre:"Carne"},
    {Nombre:"Pescado"},
    {Nombre:"Pan"}
]

let lista = document.querySelector('#comidas')

let contenidoLista = '<ol> </ol>'
for (comida of comidas){
    contenidoLista = contenidoLista + `<li>${comida.Nombre}</li>`
}
lista.innerHTML = contenidoLista

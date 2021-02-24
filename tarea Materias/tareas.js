let tareas = [
    {nombre: "Español", descripcion: "Escribir un resumen del Quijote", fecha:"04-02-2021"},
    {nombre: "Ciencias", descripcion: "Hacer video de enzimas", fecha:"08-02-2021"},
    {nombre: "Matematicas", descripcion: "Enviar los ejercicios asignados", fecha:"28-02-2021"},
    {nombre: "Fisica", descripcion: "Completar los ejercicios de velocidad tangencial", fecha:"13-02-2021"},
    {nombre: "Italiano", descripcion: "Poesia di Petrarca", fecha:"18-02-2021"},
    {nombre: "Arte", descripcion: "Inviare il disigno della asonometria", fecha:"30-01-2021"}
]

let tabla = document.querySelector('#tareas')

function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripcion</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.nombre}</td><td>${tarea.descripcion}</td>
        <td>"${tarea.fecha}></td></tr>`
    }
    tabla.innerHTML = contenidoTabla;
}

let form = document.querySelector("#formularioAdd");

function añadeMateria(){
    let materiaNueva = document.querySelector("input[name=nombre]").value
    let descripcionNueva = document.querySelector("input[name=descripcion]").value
    let fechaNueva = document.querySelector("input[name=fecha]").value

    let materiaAñadida = {nombre:materiaNueva, descripcion:descripcionNueva, fecha:fechaNueva}
    
    tareas.push(materiaAñadida)

    llenarTabla();
    return false;
}

form.onsubmit = añadeMateria;
llenarTabla();

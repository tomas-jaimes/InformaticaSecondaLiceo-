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

    let contenidoTabla = '<tr><th>Materia</th><th>Descripcion Materia</th><th>Fecha Materia</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.nombre}</td><td>${tarea.descripcion}</td>
        <td>"${tarea.fecha}</td></tr>`
    }

    tabla.innerHTML = contenidoTabla;
}

// variable que corresponde al formulario.
let form = document.querySelector("#formularioAdd");

function addMateria(){
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "nombre"
    let materiaNueva = document.querySelector("input[name=nombre]").value
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "diametro"
    let descripcionNueva = document.querySelector("input[name=descripcion]").value
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "urlImagen"
    let fechaNueva = document.querySelector("input[name=fecha]").value
    
    // con los datos ingresados por el usuario voy a añadir un planeta a la lista de planetas
    
    // crear el planeta nuevo
    let materiaAñadida = {nombre:materiaNueva, descripcion:descripcionNueva, fecha:fechaNueva}
    console.log("Ahora voy a añadir la siguiente materia");
    console.log(materiaAñadida)

    // añado el planeta a la lista
    tareas.push(materiaAñadida)
    // planetas[2]

    // generar de nuevo la tabla
    // llenarTabla es una función, para ejecutarla debo pasarle los 
    // parámetros que necesite. En este caso no necesita ninguno, por 
    // eso los paréntesis están vacíos.
    llenarTabla();
    // return false hace que no se actualice la página.
    return false;
}

form.onsubmit = addMateria;

// Para borrar un planeta
let formBorrar = document.querySelector("#formularioDelete");

function deleteMateria(){
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "nombre"
    let nombreMateriaABorrar = document.querySelector("#formularioDelete input[name=nombre]").value
    
    // crear el planeta nuevo
    console.log("Ahora voy a borrar la siguiente materia");
    console.log(nombreMateriaABorrar)
    
    // Determinar la posición del elemento a borrar en el array
    // find, findIndex
    // console.log(planetas.find(planeta => planeta.nombre == nombrePlanetaABorrar));
    let aBorrar = tareas.findIndex(tarea => tarea.nombre == nombreMateriaABorrar);
    // si el elemento no existe mostrarle un mensaje al usuario
    if(aBorrar == -1) alert("Materia no encontrada");
    // Borrar el elemento del array
    // en la posición aBorrar deseo borrar 1 elemento
    tareas.splice(aBorrar, 1);
    // generar de nuevo la tabla
    llenarTabla();
    // return false hace que no se actualice la página.
    return false;
}
formBorrar.onsubmit = deleteMateria;

llenarTabla();
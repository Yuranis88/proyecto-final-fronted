const tareas = [
    {
        "_id": "1",
        "titulo": "caminar",
        "descripcion": "salir a caminar en las mañanas",
        "estado": "activa",
        "responsable": "sebas"
    },
    {
        "_id": "2",
        "titulo": "ir al gimnasio",
        "descripcion": "salir al gimnasio en las tardes luego del trabajo",
        "estado": "activa",
        "responsable": "sebas"
    },
    {
        "_id": "3",
        "titulo": "Pasear al perror",
        "descripcion": "salir a caminar en las mañanas con el perro",
        "estado": "activa",
        "responsable": "sebas"
    },
    {
        "_id": "4",
        "titulo": "limpiar la cocina",
        "descripcion": "limpiar la cocina despues de cocinar",
        "estado": "activa",
        "responsable": "sebas"
    }
]

const crearTarea = async (tarea) => {
    // enviar consulta a la API para crear una tarea
    alert('tarea creada')
}

const obtenerTareas = async () => {
    // enviar consulta a la API para obtener todas las tareas
}

const verTarea = async (id) => {
    // enviar consulta a la API para obtener la tarea con el id
    alert('tera obtenida')
    return {
        "_id": "4",
        "titulo": "caminata en las mañanas",
        "descripcion": "salir a caminar en las mañanas",
        "estado": "activa",
        "responsable": "sebas"
    }
}

const editarTarea = async (id) => {
    // enviar consulta a la API para obtener la tarea con el id
    alert('tarea editada')
}


const eliminarTarea = async (id) => {
    // enviar consulta a la API para eliminar la tarea con el id
    alert('tarea eliminada')
}

// -----------------------  Renderizar tareas en el HTML -----------------------
const listaTareas = document.getElementById('lista-tareas')
const renderTareas = async () => {
}

// -----------------------  Abrir y Cerra ventana crear tarea -----------------------
const wrapperFormCrear = document.getElementById('wrapper-form-crear')

const buttonAbrirFormCrear = document.getElementById('abrir-form-crear')
buttonAbrirFormCrear.addEventListener('click', () => {
    wrapperFormCrear.style.display = 'grid'
})

const buttonCerrarFormCrear = document.getElementById('cerrar-form-crear')
buttonCerrarFormCrear.addEventListener('click', () => {
    wrapperFormCrear.style.display = 'none'
})

// -----------------------  Abrir ventana editar tarea -----------------------
const buttonCerrarFormEditar = document.getElementById('cerrar-form-editar')
buttonCerrarFormEditar.addEventListener('click', () => {
    const editarTarea = document.getElementById('wrapper-form-editar')
    editarTarea.style.display = 'none'
})

// -----------------------  Crear tarea -----------------------
const formCrearTarea = document.getElementById('form-crear-tarea')
formCrearTarea.addEventListener('submit', async (e) => {

})

// -----------------------  Filtrar tareas por estado -----------------------
let estado = ''
const selectEstado = document.getElementById('select-estado')
selectEstado.addEventListener('change', (e) => {
})

window.addEventListener('load', renderTareas)
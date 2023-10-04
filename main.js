let pantallaUno = document.getElementById("pantallaUno")
let btn = document.getElementById("btn")
let pantallaDos = document.getElementById("opciones")
let btnImg = document.getElementById("btnImg")
let img = document.getElementById("imgen")


// para que lo que este guardado en el localStorage hay que decirle de donde iniciar y no iniciar vacio
//  y con el condicional or || que dice y si no encuentra nada traeme un array vacio, que el usuario genere el nuevo contenido
const libros = JSON.parse(localStorage.getItem('libros')) || []

const form = document.getElementById('form')
let seleccionado = []
const listaGen = document.querySelectorAll('#imgen img')
const imgSeleccionada = document.querySelector('#imgSeleccionada')
const imagenes = document.querySelector('#imagenes')
const listadoHolder = document.querySelector('.listado-holder')
const listado = document.querySelector('.listado')
const listTarea = document.querySelector('#listTarea')

// ocultar primera pantalla para agregar tareas luego de clikear el boton

btn.addEventListener('click', () => {
    pantallaUno.style.display = "none";
    pantallaDos.style.display ="flex";
    listadoHolder.style.display ="none";
});

//mostrar imagenes para seleccionar: 
let visible = false;
btnImg.addEventListener('click', () => {
    if(visible){
        img.style.display = "none";
    } else {
        img.style.display = "flex";
    }
    visible = !visible; // Cambia el estado actual, Esto asegura que la próxima vez que se haga clic en el botón, se realice la acción opuesta (mostrar si estaba oculto y ocultar si estaba visible).
});
// ----------------------------------


// recorremos el div de las imagenes para capturar la informacion con el click

listaGen.forEach((img) =>{
    //console.log(img)
    img.addEventListener('click', (e) =>{ 
    e.preventDefault()
    const selecImg = img.src
    const selectText = img.alt

    // recorremos otra vez el div para que cuando seleccionemos una imagen se quite la clase seleccionado

    listaGen.forEach((img) =>{
        img.classList.remove('seleccionado')

    })
    // se agrega la clase seleccionado
    img.classList.add('seleccionado')
    console.log('selecImg:', selecImg);
    console.log('selectText:', selectText);
    imgSeleccionada.src = selecImg;
    imgSeleccionada.alt = selectText;
    imgSeleccionada.classList.remove('d-none');



    seleccionado = [selecImg, selectText]
    })
})

// el tiempo a realizar las tareas.
function addDays (days) {
    let date = new Date()
    date.setDate(date.getDate() + days)
    console.log(date)
    return date
}




form.addEventListener('submit', (e) =>{
    e.preventDefault()

    if(e.target.tarea.value === '') return alert('Debes ingresar la tarea deseada')
    if (seleccionado.length === 0) return alert('Debes seleccionar una imagen')

    const libro = {
        tarea: tarea.value,
        time: addDays(parseInt(time.value)),
        img: seleccionado[0],
        selectText: seleccionado[1]
    }
    // para que la informacion se guarde en el localStorage
        libros.push(libro)
        localStorage.setItem('libros', JSON.stringify(libros))
        console.log(libro)
        // quitar la seleccion de la imagen
        listaGen.forEach((img) =>{
        img.classList.remove('seleccionado')
        form.reset( )
        getLibros()
        })
    })
    

    const getLibros = () => {
        listado.innerHTML =''
        // agregamos un condicional si libros es un array vacio:
        if(libros.length === 0) return listado.innerHTML = '<li class="card">No hay libros</li>'
        
        //funcion para que me de los dias que faltan para la tarea
        function timeLeft (time) {
            let date = new Date()
            let libroDate = new Date(time)
            let timeLeft = libroDate - date

            // math.floor redondea un numero
            // 1000(milisegundos) * 60(minutos) * 60(lo que dura una hora) *24(horas al dia)
            let days = Math.floor(timeLeft / (1000 * 60 * 60 *24))
            return days
        }

        libros.forEach((libro, index) => {
            // le estoy pasando a la funcion timeLeft el tiempo que tengo guardado aca, para que se haga la operacion
            let tiempo = timeLeft(libro.time)
            // color de las tareas
            let bg = ''
            if (tiempo <= 2) {
                bg = 'bg-red'
            } else if (tiempo <= 5){
                bg = 'bg-amarillo'
            }else if (tiempo <= 7){
                bg = 'bg-verde'
            }
            listado.innerHTML +=  
            `<li class="card ${bg}" id= "libro-${index}">
                <div><img src=" ${libro.img}" alt="${libro.selectText}"></div>
                <h2>${libro.tarea}</h2>
                <div>Hacer en ${tiempo} dias</div>
                <button onClick="deleteLibro('${index}')">Eliminar</button>
            </li>`
        })
    }

    const deleteLibro = (index) => {
        let seguro = confirm('¿Estas seguro de borrar esta tarea?')
        if(seguro === false) return
        // splice es un metodo de array, quita un elemento segun el index
        // nosotros le pasamos un numero, que en este caso es el 1 hay le decimos que elimine solo un elemento
        // y a la izquierda esta index, segun su indice.
        libros.splice(index, 1)
        // y vuelvo a guardar en el localStorage lo que me queda.
        localStorage.setItem('libros', JSON.stringify(libros))

        // llamamos a la funcion para actualizar y cargar los cambios
       
    }

// ocultar primera pantalla para agregar tareas luego de clikear el boton
getLibros()

agregar.addEventListener('click', () => {
    pantallaDos.style.display = "none";
    listadoHolder.style.display ="flex";
});

listTarea.addEventListener('click', () => {
    pantallaUno.style.display = "none";
    pantallaDos.style.display ="none";
    listadoHolder.style.display ="flex";
});
    // ejecutar la funcion para que inicie con la informacion, si es que la tiene, en el localStorage
     getLibros()






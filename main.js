let pantallaUno = document.getElementById("pantallaUno")
let btn = document.getElementById("btn")
let pantallaDos = document.getElementById("opciones")
let btnImg = document.getElementById("btnImg")
let img = document.getElementById("imgen")


// ocultar primera pantalla para agregar tareas luego de clikear el boton

btn.addEventListener('click', () => {
    pantallaUno.style.display = "none";
    pantallaDos.style.display ="flex";
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

const libros = []
const form = document.getElementById('form')
let seleccionado = []
const listaGen = document.querySelectorAll('#imgen img')

// recorremos el div de las imagenes para capturar la informacion con el click

listaGen.forEach((img) =>{
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

    seleccionado = [selecImg, selectText]
    })
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    if(e.target.tarea.value === '') return alert('Debes ingresar la tarea deseada')
    if (seleccionado.length === 0) return alert('Debes seleccionar una imagen')
    const libro = {
        tarea: e.target.tarea.value,
        time: e.target.time.value,
        img: seleccionado[0],
        selectText: seleccionado[1]
    }
    console.log(libro)

    libros.push(libro)
    console.log(libros)

    form.reset( )
})
















//
//img.addEventListener('click', (e) =>{
  //  seleccionada = e.target.src
//})

//btn.addEventListener('click', () =>{
  //  let agregar = `<div class="img"><h3>"pepe"</h3><img src="${seleccionada}" alt=""></div>`
    //tareasSection.innerHTML+= agregar
    
//})


=======


let pantallaUno = document.getElementById("pantallaUno")
let btn = document.getElementById("btn")
let pantallaDos = document.getElementById("opciones")
let imagenes = document.getElementById("imagenes")
let img = document.getElementById("img")


// ocultar primera pantalla para agregar tareas luego de clikear el boton

btn.addEventListener('click', () => {
    pantallaUno.style.display = "none";
    pantallaDos.style.display ="flex";
});

//mostrar imagenes para seleccionar: 
let visible = false;
imagenes.addEventListener('click', () => {
    if(visible){
        img.style.display = "none";
    } else {
        img.style.display = "flex";
    }
    visible = !visible; // Cambia el estado actual, Esto asegura que la próxima vez que se haga clic en el botón, se realice la acción opuesta (mostrar si estaba oculto y ocultar si estaba visible).
});

>>>>>>> de9a2d6eb31e0d8cdeb801a88651240fc402187e

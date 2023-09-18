

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


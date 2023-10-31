


//EJERCICIO 

//CREAR UNA PANTALLA EMERGENTE QUE PIDA INFORMACION SOBRE TU NOMBRE. AÑADIR ESTE NOMBRE EL TITULO H1 QUE TENIAMOS CREADO AYER


let pedirNombre = prompt("Escriba aquí su nombre")


let pantallaEmergente = document.querySelector("h1");

pantallaEmergente.textContent = "nombre"



/* EVENTOS EN JAVASCRIPT

ME PERMITEN TENER UNA WEB MÁS DINÁMICA

CUANDO ALGUIEN VISITA UNA WEB, SURGEN MUCHOS EVENTOS
SCROLL, BOTON ENVIAR FORMULARIO, CLICKS

HAY EVENTOS QUE LOS GENERA EL USUARIO Y HAY OTROS QUE SE GENERAN AUTOMATICAMENTE

EVENTO LOAD
*/

console.log(1);


window.addEventListener("load", function () {
    console.log("se ha cargafado html, css, js");
})

// AÑADIMOS EVENTOS CON ADDEVENTLISTENER
//PRIMERO LE DECIMOS QUE TIPO DE EVENTO VAMOS A TENER, LOAD, CLICK, SCROLL...
//DESPUES LLAMAMOS AL CALLBACK, TAMBIEN PUEDEN SER FUNCIONES A PARTE
//LOAD ESPERA A QUE EL HTML, CSS, JS Y LOS ARCHIVOS QUE DEPENDEN DEL HTML ESTEN LISTOS

console.log(2);



//EVENTO DOMCONTENTLOAD


document.addEventListener("DOMContentLoaded", function () {
    //DOMCONTENTLOADED ESPERA QUE SE CARGUE UNICAMENTE EL HTML, EL RESTO NO LE IMPORTA
    console.log("Se ha cargado el HTML");
})


console.log(4);



//EVENTO DE SCROLL

window.addEventListener("scroll", function () {
    console.log("Scrolling...")
});



//VAMOS A VER COMO APLICAR LOS EVETOS A MIS ELEMENTOS DEL HTML
//HASTA AHORA LO HEMOS HECHO AL WINDOW Y AL DOCUMENT


//EVENTO CLICK. INNTERCATUAN CON EL RATON OR TRACK PACK


let botonNotificacion = document.querySelector("#botonPrincipal");

botonNotificacion.addEventListener("click", function (evento) {

    console.log(evento);//ME MUESTRA INFORMACIÓN DEL EVENTO
    evento.preventDefault();// PARA EVITAR QUE EN LOS FORMULARIOS ME RECARGUE LA PÁGINA SOLA
    //SUELE USAR EN FORMULARIOS

    console.log("Mostrando Notificación...");
})




//EJERCICIO. CREAR UN FORMULARIO DE CONTACTO EN HTML CON

//NOMBRE
//CORREO
//MENSAJE
//BOTON ENVIAR


//EVENTOS QUE INTERACTUAN CON EL TECLADO



let nombre = document.querySelector("#Nombre");

// 

nombre.addEventListener("change", function () { //Este evento solo se ejecuta cuando salimos
    console.log("Se ha completado el nombre")
});


//EVENTO IMPUT

nombre.addEventListener("input", function (evento) {
    console.log("Escribiendo nombre con input...");
    console.log(evento)
    console.log(evento.target.value); //ME MUESTRA POR PANTALLA EN EL DATA LA INFORMACIÓN
    // EN UN INPUT LA INFORMACIÓN SE ALMACENA EN EL VALUE
});


// EJERCICIO 
// CREAR EL EVENTO DE IMPUT EN CORREO Y MENSAJE
// DEBAJO DEL FORMULARIO, CREAR UN ELEMENTO TIPO P, QUE
//DIGA, ESTA ES LA WEB....CON CORREO... Y SU 
//PROPUESTA ES:.....


const emailF = document.querySelector("#Correo");
const mensajeF = document.querySelector("#Mensaje");
let resultadoNombre,
    resultadoEmail,
    resultadoMensaje;



emailF.addEventListener("input", function(evento){
    resultadoEmail = evento.target.value;
    actualizarTexto();
});

mensajeF.addEventListener("input", function(evento){
    resultadoMensaje = evento.target.value;
    actualizarTexto();
});

nombre.addEventListener("input", function(evento){
    resultadoNombre = evento.target.value;
    actualizarTexto();
});


function actualizarTexto(){
    document.querySelector(".parrafo").textContent = `Esta es la web de ${resultadoNombre} con email ${resultadoEmail} 
    y su propuesta es ${resultadoMensaje}` 
}





//EJERCICIO
//CREAR UN OBJETO DE DATOS, CON PROPIEDADES 
//NOMBRE
//EMAIL
//MENSAJE

//E IR ALMACENANDO LOS RESULTADOS DEL FORMULARIO

let datos={
    Nombre:"",
    Email:"",
    Mensaje:""
}




//EVENTOS DE SUBMIT

const formulario=document.querySelector("form");


formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Enviando formulario...")

});


/*COMO ORGANIZAR EL CODIGO DE JAVASCRIPT

1º VARIABLES
2º EVENTOS
3º FUNCIONES


*/







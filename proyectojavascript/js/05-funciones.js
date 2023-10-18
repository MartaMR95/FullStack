


// // PRIMER PASO PARA CREAR FUNCIONES

// 1 DECLARACION DE LA FUNCION

function sumar(n1, n2) {
    console.log(n1 + n2)

}


sumar(10, 20);

// 2 EXPRESION DE LA FUNCION

let sumar2 = function (n1, n2) {
    console.log(n1 + n2)
}

sumar2(3, 9);



// 3 METODO IIFE


(function () {
    console.log("función IIFE")

})()



// DIFERENCIA ENTRE METODO Y FUNCION

const numero1 = 20;
const numero2 = "20";


console.log(typeof (parseInt(numero2))) //parseInt es una funcion
console.log(typeof (numero1.toString())) //toString es un metodo. Va detras del nombre


// EJERCICIO 1



function color(miColorElegido) {
    console.log(`El color elegido es ${miColorElegido}`);
    console.log("El color elegido es", miColorElegido);

}

color("verde")
color("rojo")


//EJERCICIO 2


function precioFinal(importe, descuento) {
    console.log(`Descuento total es de ${importe * descuento / 100}`)
    console.log(`Precio final ${importe - descuento}`)

}


precioFinal(80, 10)


// EJERCICIO 3


function tweet(texto) {

    console.log(texto.length)

}


tweet("Este es mi texto")


// EJERCICIO 4


function buscar(texto, palabra) {
    console.log(texto.includes(palabra))

}

buscar("esto es un texto de prueba", "un")
buscar("Texto donde voy a buscar", "Rojo")
buscar("Programación web full stack", "stack")


// EJERCICIO 5

let frutas = ["pera", "platano"]


function añadir(x) {

    frutas.push(x);

}

añadir("fresa")
console.log(frutas)


// function añadirFruta(x,y){
//     Array.push(y)
//     console.log()

// }

// let frutas =["pera","platano"]



// EJERCICIO 6

function restar(x = 0, y = 0) {
    console.log(x - y)
}

restar(100, 50)
restar(2)

// FUNCIONES QUE RETORNAN VALORES

// EJERCICIO 7

function multiplicar(x, y) {
    return x * y

}

let resultadoMultiplicar = multiplicar(2, 3)


console.log(resultadoMultiplicar)


// EJERCICIO 8


let totalCarrito = 0;

function agregarCarrito(x) {

    totalCarrito += x;

}

agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);


console.log(totalCarrito);


// EJERCICIO 9 

let descuento = 0.2;
let totalAhorro = 0;


function calcularDescuento(z) {

    totalAhorro += (z * descuento)
}

calcularDescuento(100);
calcularDescuento(120);
calcularDescuento(350);

console.log(totalAhorro);


// EJERCICIO 10

let reproductor = {
    reproducir: function (nc) {
        console.log(`Reproduciendo canción cib ID: ${nc}`)
    },

    pausar: function (x) {
        console.log(`Pausando canción`)

    },

    crearPlaylist: function (nombre) {
        console.log(`Creando nombre: ${nombre}`)

    }
}


reproductor.reproducir(17)

reproductor.crearPlaylist("Musicap");

reproductor.borrarCancion = function (id) {
    console.log(`Borrando cancion con ID: ${id}`)
}

reproductor.borrarCancion(34);




// EJERCICIO11

let triplicar = function (x) {
    return 3 * x

}

console.log(triplicar(6))


// FUNCIONES DE FLECHA


let triplicar2 = x => 3 * x;


console.log(triplicar(6))


// EJERCICIO 12


let aprendiendo = z => z + 7;

let resultadoAprendiendo = aprendiendo(5)

console.log(resultadoAprendiendo);



// EJERCICIO 13


let carrito = [

    {
        nombre: "TV",
        precio: 750

    },

    {
        nombre: "Tablet",
        precio: 350

    },

    {
        nombre: "Movil",
        precio: 550
    },

    {
        nombre: "PC",
        precio: 1750
    }
];

// METODO SOME

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet"
});

console.log("Resultado de fuction some ideal", resultado);



resultado = carrito.some(producto => producto.nombre === "Tablet");
console.log("Resultado de funcion some ideal con funcion de flecha", resultado)

// METODO REDUCE

resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);


console.log("uso de reduce", resultado)


resultado = carrito.reduce((total, producto) => total + producto.precio,0);

console.log("uso de reduce con arrow function", resultado);

// METODO FILTER


resultado=carrito.filter(function(producto){
return
});



// EJERCICIOS DE REPASO


// EJERCICIO 1

// CREAR UNA FUNCION QUE SUME TRES NUMEROS DADOS LA TENEMOS QUE PONER CON EXPRESION, DECLARACION, Y CON FLECHA


// EXPRESION DE LA FUNCION

let sumarExpresion=function(x,y,z){
return x+y+z
}

let total= sumarExpresion(2,3,5)

console.log(total);

// DECLARACION DE LA FUNCION


// Con RETURN:

// function sumaDeclaracion(x,y,z){
// return x+y+z
// }

// let total2=sumaDeclaracion(6,20,1)

// console.log(total2);

// Con console.log directamente:

function sumaDeclaracion(x,y,z){
    console.log(x+y+z)
}

sumaDeclaracion(6,2,1)


// FUNCION DE FLECHA


let sumaFlecha=(x,y,z)=>console.log(x+y+z);

sumaFlecha(2,63,4);



// EJERCICIO 2

//Crear una funcion que busque de un array de numeros. Ponerla con expresion, defclaracion y flecha. 

// DECLARACION DE LA FUNCION


let casas=[1,2,3,4,5,6]

function buscaDeclaracion(c){

console.log (casas.includes(c))

}

buscaDeclaracion(8)




// DECLARACION DE LA EXPRESION


let libros=[1,2,3,4,5]

let buscaExpresion=function(l){
   console.log( libros.includes(l))
}

buscaExpresion(2)



// FUNCION DE FLECHA

let score=[15,20,40,12,60,35]

let buscaFlecha=(s)=>console.log(score.includes(s))


buscaFlecha(60)




// EJERCICIO 3
// CREAR UNA FUNCION DE FLECHA QUE LE PASEMOS DOS PARAMETROS Y COMO RUSULTADO ME DE LA SUMA DE LOS DOS NUMEROS POR 10


let totalNumeros=(n1,n2)=>console.log((n1+n2)*10);

totalNumeros(4,4);


// EJERCICIO 4

// CREAR UNA FUNCION DE FLECHA QUE LE PASEMO DOS PARAMETOS INDIQUE EL NUMERO DE CARACTERES DE LOS DOS


let totalNumeroLetras=(x,y)=>console.log((x.length)+(y.length));

totalNumeroLetras("casa","papel")





function caracteresDeclaracion(x,y){
    return x.length+y.length
}



// EJERCICIO 5

// CREAR UNA FUNCION DE FLECHA QUE QUITE EL ULTIMO ELEMENTO DEL FINAL DE UN ARRAY NUEVO QUE CREEMOS CADA VEZ QUE LA LLAMAMOS 



let eliminarFinal=(x)=>x.pop()

let palabras= ["casa","perro","coche","moto"]


eliminarFinal(palabras)
eliminarFinal(palabras)

console.log(palabras)
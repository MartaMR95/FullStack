


// // PRIMER PASO PARA CREAR FUNCIONES

// 1 DECLARACION DE LA FUNCION

function sumar(n1,n2){
    console.log(n1+n2)

}


sumar(10,20);

// 2 EXPRESION DE LA FUNCION

let sumar2=function(n1,n2){
console.log(n1+n2)
}

sumar2(3,9);



// 3 METODO IIFE


(function(){
    console.log("función IIFE")
    
})()



// DIFERENCIA ENTRE METODO Y FUNCION

const numero1=20;
const numero2="20";


console.log(typeof(parseInt(numero2))) //parseInt es una funcion
console.log(typeof(numero1.toString())) //toString es un metodo. Va detras del nombre


// EJERCICIO 1



function color(miColorElegido){
    console.log(`El color elegido es ${miColorElegido}`);
    console.log("El color elegido es", miColorElegido);

}

color("verde")
color("rojo")


//EJERCICIO 2


function precioFinal (importe,descuento){
    console.log(`Descuento total es de ${importe*descuento/100}`)
    console.log(`Precio final ${importe-descuento}`)

}


precioFinal(80,10)


// EJERCICIO 3


function tweet (texto){

    console.log(texto.length)

}


tweet("Este es mi texto")


// EJERCICIO 4


function buscar(texto,palabra){
    console.log(texto.includes(palabra))

}

buscar("esto es un texto de prueba","un")
buscar("Texto donde voy a buscar","Rojo")
buscar("Programación web full stack","stack")


// EJERCICIO 5

let frutas=["pera","platano"]


function añadir(x){
   
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

function restar(x=0,y=0){
    console.log(x-y)
}

restar(100,50)
restar(2)



// EJERCICIO 
// CREAR UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI PUEDO RETIRAR EL DINERO


// let saldo = 200;
// let pinMM = 1234;
// let importeRetirar=100;
// let pinIntroducido=1234;

// if (pinIntroducido === pinMM) {
//     console.log("El pin es correcto");
//     if (importeRetirar<= saldo) {
//         console.log("Saldo suficiente");
//     } else {
//         console.log("Saldo insuficiente");
//     }

// } else {
//     console.log("El pin es incorrecto");
// }



// Ahora se introduce lo anterior dentro de una funcion para poder ir variando los argumentos:


let saldo = 200;
let pinMM = 1234;


function cajero(pin, cantidad) {


    if (pin === pinMM) {
        console.log("El pin es correcto");
        if (cantidad <= saldo) {
            console.log("Saldo suficiente");
        } else {
            console.log("Saldo insuficiente");
        }

    } else {
        console.log("El pin es incorrecto");
    }
}

cajero(1234, 300)



// EJERCICIO 
// USO DEL ELSE if, PARA HACER MULTIPLES COMPARACIONES

let rol = "editor"

if (rol === "Admin") {
    console.log("Eres admin");

} else if (rol === "Editor") {
    {
        console.log("Eres editor")
    }
} else if (rol === "gestor");


// EJERCICIO 
// CREAR UNA ESTRUCTURA DE CONTROL QUE COMPARE EN QUE EATCION DEL AÑO ESTAMOS  Y ME DIGA CUAL ES LA SIGUIENTE. 


let estacionActual = "primavera"


if (estacionActual === "primavera") {
    console.log("Estamos en primavera y la siguiente estacion es verano");


} else if (estacionActual === "verano") {
    console.log("Estamos en Verano y la siguiente estacion es otoño");

} else if (estacionActual === "otoño") {
    console.log("Estamos en otoño y la siguiente estacion es invierno");
} else if (estacionActual === "invierno") {
    console.log("Estamos en Invierno y la siguiente estacion es primavera");

}


// CREAR UNA ESTRUCTURA DE CONTROL QUE ME DIGA SI LA NOTA UN EXAMEN 
// ES SOBRESALIENTE 9-10
// NOTABLE 7-8
// SUFICIENTE 5-6
// SUSPENSO -5

// CREAMOS UNA VARIABLE NUEVA QUE SE LLAME notaExamen


let notaExamen = 9


if (notaExamen === 9 || notaExamen == 10) {
    console.log("Sobresaliente");

} else if (notaExamen === 7 || notaExamen == 8) {
    console.log("Notable")
} else if (notaExamen === 5 || notaExamen == 6) {
    console.log("Suficiente")
} else if (notaExamen < 5) {
    console.log("Insuficiente")
}



// USO DEL SWITCH, PARA HACER MULTIPLES COMPARACIONES 


// let metodoPago= prompt("Introduce tu metodo de pago","Escriba aquí");

let metodoPago = "bizum"

switch (metodoPago) {
    case "tarjeta": console.log("El cliente ha pagado con tarjeta");
        break;
    case "bizum": console.log("El cliente ha pagado con bizum");
        break;
    default: console.log("Pendiente de pago");
        break;
}



// EJERCICIO CREAR UNA ESTRUCTURA DE CONTRL QUE ME COMPARA SI UN NUMERPO AL MULTIPLICARLO POR SI MISMO ES 

// MENOR DE 100 SI ES MENOR DE 200 O SI NO ES NINGUNA DE LAS ANTERIORES




// let numeroEjercicio=45



//    if(numeroEjercicio+numeroEjercicio<100){
//     console.log("Menos que 100")
//    }else if(numeroEjercicio*numeroEjercicio<200){
//     console.log("Menos que 200")
//    }else if(numeroEjercicio*numeroEjercicio>200){
//     console.log("Ninguna de las anteriores")
//    }


function multiplo(x) {

    if (x * x < 100) {
        console.log("Menos que 100")
    } else if (x * x < 200) {
        console.log("Menos que 200")
    } else if (x * x > 200) {
        console.log("Ninguna de las anteriores")
    }

}

multiplo(11)


// EJERCICIO 
// CREAR UNA ESTRUCTURA DE CONTROL CON SWITCH QUE ME COMPARE SI UN NUMERO +10 ES:
// =9
// =12
// =15
// =100
// RESTO DE POSIBILIDADES


// let numeroMas10=parseInt(prompt("Escribe aqui tu número"))

// switch(numeroMas10+10){
//     case 10: console.log("Es igual a 10");
//     break;
//     case 12:console.log("Es igual a 12");
//     break;
//     case 15:console.log("Es igual a 15")
//     break;
//     case 100: console.log("Es igual a 100");
//     break;
//     default: console.log("Resto de posibilidades");
//     break;

// }



//BUCLES

// FOR LOOP


for (let i = 0; i <= 3; i++) {
    console.log(i + 1)

}


// EJERCICIO, MOSTRAR DEL 100 AL 200 POR PANTALLA


for (let i = 100; i <= 200; i++) {
    console.log(i)

}


// EJERCICIO, DEL 2 AL 49 PERO SOLO LOS PARES

for (let i = 2; i <= 49; i += 2) {
    console.log(i)
}



// MOSTRAR DEL 100 AL 0 Y QUE VAYAN DE 5 EN 5

for (let i = 100; i >= 0; i -= 5) {

    console.log(i)
}



// MOSTRAR DEL 1 AL 20 TODOS LOS NUMEROS PARES INCLUIDOS AMBOS
// NOTA: i%===0 ME DA LA CONDICION DE PAR


for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i)
    }

}

// EJERCICIO FOR BUCLE CON ARRAY PLANO

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i=0;i<arrayNumeros.length;i++) {
    console.log(arrayNumeros)

   
}

// EJERCICIO FOR BUCLE CON ARRAY DE OBJETOS

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


for (let x=0;x<carrito.length;x++){
    console.log(carrito[x])
    console.log(carrito[x].nombre)
}


// WHILE LOOP

let i=0;
while(i<100){
    console.log(i);
    i++;
}



// DO WHILE LOOP

let j=100;
do{
    console.log(j);
    j++;

}while(j<50);

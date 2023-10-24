



//     COMIENZO CLASE 2023/10/23

// REPASO ULTIMO DÍA


// for(let i=0; i<10; i++)             ///////FOR
// {
//     console.log(i)
// }


// let i=0;                            ///////WHILE
// while(i<10){
//     console.log(i);
//     i++;
// }


// let i=0;                            ////////DO WHILE
// do{
//     console.log(i);
//     i++;
// }while(i<10)


// función que invierta una cadena(una cadena es un string, una cadena de texto).
// F: INVERTIR
// P: CADENA

let cadenaF = " ";

function invertir(cadena) {
    for (i = cadena.length - 1; i >= 0; i--) {
        cadenaF += cadena ^ [i];
    }
    return cadenaF;
}


console.log(invertir("Hola"))





// función que concatene dos cadenas.
// F: CONCATENAR
// P: CADENA1, CADENA2



function concatenar(n1, n2) {
    console.log(`${n1} ${n2}`)
}

concatenar("Marta", "Mellado")




// función que determine si una cadena contiene una letra.
// F: CONTIENE
// P: CADENA, LETRA

let frase = "Hola, esto es una prueba"


function contiene(cadena, letra) {
    console.log(cadena.includes(letra))
}

contiene(frase, "o")



// función que encuentre el número más grande en un array.
// F: MAXNUM
// P: ARRAY


let numeros = [1, 50, 80, 92, 100, 14, 12, 2, 1]

function maxnum(array) {
    console.log(Math.max(...array))

}

maxnum(numeros)


// función que encuentre el número más pequeño en un array.
// F: MINNUM
// P: ARRAY


function minnum(array) {
    console.log(Math.min(...array))
}

minnum(numeros)

// función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
// F: NUMBOOLEANOS
// P: ARRAY, VALOR


let verdFal = [true, false, false, true, true, false, false]

function numbooleanos(array, valor) {
    console.log(array.length)

}


numbooleanos(verdFal)

// función que determine si todos los elementos de un array son números.
// F: ARRAYNUMEROS
// P: ARRAY


let arrayMezcla = [1, 2]
let contadorNumeros=0;
function arrayNumeros(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            contadorNumeros++;
        }
    }
}


arrayNumeros(arrayMezcla);




if (contadorNumeros===arrayMezcla.length) {
    console.log("Todos los elementos son numeros")
} else {
    console.log("NO TODOS SON NUMEROS")
}





// función que genere un número aleatorio entre N1 y N2.
// F: NUMALEATORIO
// P: N1,N2


function numeroAleatorio(n1, n2) {
    console.log(Math.round(Math.random() * (n2 - n1) + n1))
}


numeroAleatorio(1, 10)


// función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
// F: AREATRIAGULO
// P: BASE,ALTURA


function areaTriangulo(base, altura) {

    console.log(base * altura / 2)
}

areaTriangulo(5, 7)



// función que convierta grados Celsius a Fahrenheit.
// F: GRADOS
// P: CELSIUS




function gradosFahren(celsius) {
    console.log((celsius * 9 / 5) + 32)
}

gradosFahren(20)



// función que determine si un año es bisiesto.
// F: BISIESTO
// P: DIAS



function bisiesto(dias) {

    if (366 === dias) {
        console.log("Año es bisiesto")
    } else {
        console.log("Es un año no bisiesto")
    }

}

bisiesto(366)


// función que cuente la cantidad de vocales en una cadena.
// F: VOCALES
// P: TEXTO

let contadorVocales = 0;

function vocales(texto) {

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            contadorVocales++;
        }
        if (texto[i] === "e") {
            contadorVocales++;
        }
        if (texto[i] === "i") {
            contadorVocales++;
        }
        if (texto[i] === "o") {
            contadorVocales++;
        }
        if (texto[i] === "u") {
            contadorVocales++;
        }


    }
    console.log(contadorVocales);
}

vocales("Martita");









// función que cuente la cantidad de palabras en una cadena.
// F: PALABRAS
// P: TEXTO

let contadorPalabras = 0;


function palabras(texto) {

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            contadorPalabras++;
        }
    }
    console.log(contadorPalabras + 1);
}

palabras("Esto es un texto");








// función que elimine los elementos duplicados de un array.
// F: ELIMINADUPLICADOS
// P: ARRAY




function eliminaDuplicados(array) {
    return Array.from(new Set(array))
}

let numerosSinDuplicar = eliminaDuplicados(numeros);

console.log(numerosSinDuplicar);



// función que ordene un array de números de forma ascendente.
// F: ORDENARARRAY
// P: ARRAY

function ordenArray(array) {
    return array.sort(function(a,b){return a-b})
}

let ordenAscendente = ordenArray(numeros);
console.log(ordenAscendente)



// función que muestre la tabla de multiplicar de un numero.
// F: TABLAMULTIPLICAR
// A: NUMERO








// función que tome un número del 1 al 12 y devuelva el nombre del mes
// correspondiente utilizando una declaración switch
// F: NOMBREMES
// P: NUMMES



function nombresMes(numMes) {

    switch (numMes) {
        case 1: console.log("Estamos en enero");
            break;
        case 2: console.log("Estamos en febrero");
            break;
        case 3: console.log("Estamos en marzo");
            break;
        case 4: console.log("Estamis en abril");
            break;
        case 5: console.log("Estamos en mayo");
            break;
        case 6: console.log("Estamos en junio");
            break;
        case 7: console.log("Esatmos en julio");
            break;
        case 8: console.log("Estamos en agosto");
            break;
        case 9: console.log("Estamos en septiembre");
            break;
        case 10: console.log("Estamos en octubre");
            break;
        case 11: console.log("Estamos en noviembre");
            break;
        case 12: console.log("Estamos en diciembre");
            break;

    }

}

nombresMes(5)



// función que determine si una contraseña es segura basándose en
// longitud>8,
// mayúsculas y minusculas
// números
// F: CONTRASEÑASEGURA
// P: CONTRASEÑA


let miContraseña = "Mayuscula456"
function contraseñaSegura(contraseña) {
    if (contraseña.length > 7 &&
        /[A-Z]/.test(contraseña) &&
        /[a-z]/.test(contraseña) &&
        /\d/.test(contraseña)) {
        console.log("La contraseña es segura");
    }else{
        console.log("La contraseña no es segura");
    }
}


contraseñaSegura("jnajjalLL20")


// función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
// F: REEMPLAZAR
// P: LETRA1, LETRA2













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



function textoInvertido(x) {

}




textoInvertido("Hola")



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

contiene(frase, "dia")



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


let verFal = [true, false, false, true, true, false, false]

function numbooleanos(array, valor) {
    console.log(array.length)

}


numbooleanos(verFal)

// función que determine si todos los elementos de un array son números.
// F: ARRAYNUMEROS
// P: ARRAY


let arrayMezcla = [1, "hola", true, 2]

function arrayNumeros(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof (array[i] !== "number")) {
            return false;
        }
    }
}

if (arrayNumeros(arrayMezcla)) {
    console.log("Todos los elementos son numeros")
} else {
    console.log("Al menos un elemento es numero")
}







// función que genere un número aleatorio entre N1 y N2.
// F: NUMALEATORIO
// P: N1,N2


function numeroAleatorio(n1, n2) {
    console.log(Math.round(Math.random() * (n2 - n1) + n1))
}


numeroAleatorio(2, 10)


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

let año2023 = 365

bisiesto(366)

function bisiesto(dias) {

    if (año2023 === dias) {
        console.log("Año es bisiesto")
    } else {
        console.log("Es un año no bisiesto")
    }

}




// función que cuente la cantidad de vocales en una cadena.
// F: VOCALES
// P: TEXTO

let contadorVocales = 0;

function vocales(texto) {

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            return contadorVocales++;
        }

        if (texto[i] === "e") {
            return contadorVocales++;
        }


        if (texto[i] === "i") {
            return contadorVocales++;
        }

        if (texto[i] === "o") {
            return contadorVocales++;
        }
        if (texto[i] === "u") {
            return contadorVocales++;
        }
        
        
    }
    console.log(contadorVocales);
}

vocales("Marta");









// función que cuente la cantidad de palabras en una cadena.
// F: PALABRAS
// P: TEXTO












// función que elimine los elementos duplicados de un array.
// F: ELIMINADUPLICADOS
// P: ARRAY




function eliminaDuplicados(array) {
    console.log(array.filter)

}



// función que ordene un array de números de forma ascendente.
// F: ORDENARARRAY
// P: ARRAY







// función que muestre la tabla de multiplicar de un numero.
// F: TABLAMULTIPLICAR
// A: NUMERO








// función que tome un número del 1 al 12 y devuelva el nombre del mes
// correspondiente utilizando una declaración switch
// F: NOMBREMES
// P: NUMMES








// función que determine si una contraseña es segura basándose en
// longitud>8,
// mayúsculas y minusculas
// números
// F: CONTRASEÑASEGURA
// P: CONTRASEÑA







// función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
// F: REEMPLAZAR
// P: LETRA1, LETRA2


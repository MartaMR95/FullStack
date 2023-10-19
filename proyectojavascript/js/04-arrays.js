

//EJERCICIO: Añadir propiedades a un objeto mediante variables

// PASO 1
let variableA="Valor varA"
let variableB="Valor varB"
let variableC="Valor varC"

// PASO 2

let ejercicio6={

}


// PASO 3
ejercicio6.variableA=variableA;

ejercicio6.variableB=variableB;

ejercicio6.variableC=variableC;

// PASO 4
console.log("Añadir propiedades a un objeto mediante variables:", ejercicio6);



// ARRAYS: Sirven para agrupar elementos del mismo tipo o relacionados


let numeros=[10,20,30,40,50];
console.log("Mi primer Array:", numeros);
console.table(numeros);



let meses=new Array("Enero","Febrero","Marzo");

console.table(meses);


// METODOS EN LOS ARRAYS

let diaSemana=["Lunes","Martes","Miercoles","Jueves","Viernes"];

console.table(diaSemana);


// Acceder a los valores del Array

console.log("Accediendi a los valores del array con el indice 2:", numeros[2]);


console.log("Acceder a Lunes y Jueves:",diaSemana[0],diaSemana[3]);



let finde={

  prop1:"string",
  prop2:3,
  prop3:true
}

finde.finsSemana=["S","D"];

console.log(finde)




// let {prop1,prop2}=finde;


// console.log{`${prop1} ${prop2}`}



// Longitud de un Array

console.log("Longitud array", meses.length)


// METODO PushManager, añade elementos al final del array

numeros[2]=120;
console.table(numeros)

numeros.push(70)
numeros.push(80,80,100);


// añade elementos al principio

numeros.unshift(-10,1255)
console.log(numeros)


// eliminar elementos de un array

// eliminar el ultimo elemento del array
numeros.pop()  
console.log(numeros)

// eliminar el primer elemento del array
numeros.shift()
console.log(numeros)
console.table(numeros);



// eliminar x elemtnos a partir del y splice (x,y)
numeros.splice(2,3);
console.log(numeros)



// METODO SPREAD

let nuevoArreglo=[...numeros,1540];
console.log(nuevoArreglo);


let estaciones=["Verano"];

estaciones.unshift("Primavera")

console.log(estaciones);

estaciones.push=["Otoño","Invierno"];
console.log(estaciones);



let carrito=[

  objeto1={
    nombre:"Nombre1",
    precio:1

  },

  obejto2={
    nombre:"Nombre2",
    precio:2

  },

  objeto3={
    nombre:"Nombre3",
    precio:3
  },

  objeto4={
    nombre:"Nombre4",
    precio:4
  }
];

console.log(carrito)



// INCLUDE PARA ARREGLO PLANO (Boolean, strings y numeros)
 
let resultado;

resultado=meses.includes("Mayo")
console.log("uso includes para buscar en array plano", resultado);


// resultado=carrito.some(function(producto));


// SOME IDEAL PARA ARREGLO DE OBJETOS

resultado = carrito.some(function (producto) {
  return producto.nombre === "Tablet" //ME DEVOLVERÁ TRUE/FALSE
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);

// COMO SABER EL TOTAL DEL CARRITO. REDUCE

resultado = carrito.reduce(function (total=0, producto) { // PARA ITERAR
  // TOTAL, PRODUCTO SON LOS PARAMETROS DE LA FUNCION
  return total + producto.precio
}, 0); // EL VALOR DONDE INICIA
console.log("USO DE REDUCE", resultado);

// FILTER, PARA FILTRAR
// EL MÁS UTILIZADO

resultado = carrito.filter(function (X) {
  return X.precio <= 1
});
console.log("USO DE FILTER", resultado);


// === EXACTAMENTE IGUALES
// == IGUALES PERO NO ESTRICTAMENTE 200="200"
// !== DIFERENTES
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL





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


// ASI RECORREMOS CON FOR LOS ELEMENTOS DE UN ARRAY DEL CARRITO
for (i = 0; i < carrito.length; i++) {
    console.log(carrito[i])
}

// PERO HAY UN METODO FOR EACH QUE ESTO LO SIMPLIFICA. NO CREA UN NUEVO ARRAY. Mostrar por consola ya la informacion

carrito.forEach(function (producto) {
    console.log(producto);
})


// METODO MAP CREA UN NUEVO ARRAY. CREA UN NUEVO ARRAY CON LA PROPIEDAD
const arrayMap = carrito.map(producto => producto.nombre);

console.log(arrayMap);



// THIS se refiere solo a la propiedades del objeto en el que esta


let reserva = {
    nombre: "Marta",
    apellido: "Mellado",
    total: 100,
    pagado: 100,
    informacion: function () {
        return (`El cliente ${this.nombre} ${this.apellido} tiene una reserva por el valor total de ${this.total}€ , el total pagado es de ${this.pagado}€`)
    }
}

console.log(reserva.nombre);

// let{nombre}=reserva
// let{apellido}=reserva
// let{total}=reserva
// let{pagado}=reserva


// reserva.informacion=function(){
//     return(`El cliente ${this.nombre} ${this.apellido} tiene una reserva por el valor total de ${this.total}€ , el total pagado es de ${this.pagado}€`)};


console.log(reserva.informacion())


// EJERCICIO


let fecha = {
    año: 2023,
    mes: "octubre",
    dia: 24,
    faltantes: function () {
        console.log(`Faltan ${31 - this.dia}`)
    }

}



fecha.faltantes();
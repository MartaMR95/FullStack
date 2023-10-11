


// ESTRUCTURA DE UN OBJETO

let producto ={
    nombreProducto:"Reloj",
    precio: 65,
    disponible: true

}


console.log ("Miprimerobjeto producto:", producto);
console.log(`Mi primer objeto producto con template string: ${producto}`, producto);


// SINTAXIS DE PUNTO PARA ACCEDER A LAS PROPIEDADES DEL OBJETO



console.log("uso de sintaxis para acceder a las propiedades del obejto:",producto.precio);
console.log(`uso de sintaxis de punto con template string: ${producto.precio}`);



// OTRA FORMA DE ACCDER A LAS PROPIEDADES DE UN OBJETO

console.log ("uso de corchetes:",producto["precio"]);



// MODIFICAR OBJETOS. PODEMOS AÑADIR UNA PROPIEDAD NUEVA AL OBJETO producto QUE YA TENEMOS CREADO



producto.categoria="joyería";

console.log ("AÑADIR CATEGORIA A PRODUCTO:", producto);



producto.precio=12;


// PARA ELIMINAR PROPIEDADES USAMOS DELETE


delete producto.disponible;

console.log ("BORRAMOS DISPONIBLE A PRODUCTO:", producto);


// CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
// EJERCICIO 

let nombreProducto=producto.nombreProducto;


// DESTRUCTURING DE OBJETOS SACAR DE UNA ESTRUCTURA


// DESTRUCTURING AL PRECIO


let {precio,categoria}=producto;


console.log(`creamos variable precio ${precio} y categoria con destructuring ${categoria}`);




// EJERCICIO

let playa={
    nombrePlaya:"Gulpiyuri",
    ubicacion:"Asturias",
    recomendable: true,
    temperaturaAgua: 23

}


let{nombrePlaya,ubicacion,recomendable,temperaturaAgua}=playa;
// let{ubicacion}=playa;
// let{recomendable}=playa;
// let{temperaturaAgua}=playa;

console.log(`En la playa ${nombrePlaya} que esta en ${ubicacion} el agua esta a ${temperaturaAgua}. Te la recomiendo ${recomendable} `);




// METODOS PARA LOS OBEJETOS


// METODO FREEZE. No puedo añadir, ni modificar, ni borrar un objeto

// Object.freeze(producto);

// producto.congelado="intentamos congelarlo";

// console.log("Intento añadir informacion tras el freeze:", producto)



console.log("Esta congelado??:", Object.isFrozen(producto));


// METODO SEAL NO AÑADE NO BORRA PERO SI PODEMOS MODIFICAR PROPIEDADES


medidas={
    peso:60,
    alto:45,
    ancho:45,
    profundidad:45
}



Object.seal(medidas);


console.log("Esta seal??:", Object.isSealed (medidas));

medidas.peso=35;


console.log ("Se puede modificar peso??:",medidas )


// UNIR DOS OBJETOS CON EL SPREAD/REST OPERATOR EL FIN ES NO MODIFICAR LOS OBJETOS ORIGINALES 

let nuevoProducto ={...producto,...medidas};

console.log ("Nuevo objeto con spread operator:", nuevoProducto);





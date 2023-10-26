

// TRY CACHT. CUANDO TENEMOS UN ERROR EN JAVASCRIPT
let numero1=20;
let numero2=40;


// console.log(numero1);
// console.log(numero2);
// console.log(numero3);

console.log(numero1);

try{
    console.log(numero2)
}catch(error){
    console.log("tienes un error en console log numero2")
}

// console.log(numero3);


// PROMISES . REFLEJA UN VALOR QUE ESTARÁ DISPONIBLE AHORA, EN UN FUTURO O NUNCA.


let autenticado=true;

let usuarioAutenticado= new Promise((resolve, reject)=>{

    if (autenticado===true){
        resolve("Usuario autenticado");
    }else{
        reject("No se puede añadir sesión");
    }

})

console.log(usuarioAutenticado);



// EN LOS PROMISES EXISTEN TRES VALORES:
// PEDING
// FULFILLER
// REJECT


usuarioAutenticado

.then(function(resultado){
    console.log(resultado)
})
.catch(function(resultado){
    console.log(resultado)
})

// then cuando el resultado es satisfactorio. cuando se cumple

// catch es cuando no se cumple el resultado



// CREAR UN BOTON CON FUNCIONES


let boton=document.querySelector("#boton");


// CREAR UN EVENTO. ES CUANDO CREAMOS UN CLICK O UN CARGA HAGA LO QUE SEA 
//CUANDO SE CUMPLA QUE HAGA CIERTA CARACTERISTICA ME LLEVA A CABO EL SIGUIENTE CODIGO

boton.addEventListener("click",function(){



    console.log("Diste click");

    Notification.requestPermission().then(resultado=>console.log(`El resultado es ${resultado}`))
})


if(Notification.permission==="granted"){
    new Notification("Esta es tu notificacion",{
        icon:"./img/ico-centro.png",
        body:"Notificacion tu carrera digital"
    })

}


// AYNC/AWAIT


//VAMOS A CREAR FUNCIONES QUE SIMULEN LA CONSULTA A LA BASE DE DATOS PARA OBTENER UNA RESPUESTA


// setTimeout(function(){
//     console.log("Set time out Finalizado")
// },3000)


// setInterval(function(){
//     console.log("Set interval actuando")
// }, 4000)




function descargarNuevoClientes(){
    return new Promise(resolve=>{
        console.log("Descargando clientes...espere...")
        setTimeout(()=>{
            resolve("Los clientes fueron cargados")
        },5000)
    });
}

async function app(){
    let resultadoAsync=await descargarNuevoClientes();
    console.log("Este codigo si se bloquea")
    console.log(resultadoAsync)
}

app();
console.log("Este codigo no se bloquea")




// EJERCICIO CREAR UNA FUNCION QUE ME DESCARGUE LOS PEDIDOS, Y ME DE UNA RESPUESTA A LOS 3 SEGUNDOS


function descargarPedidos(){
    return new Promise((resolve)=>{
        console.log("Descargar pedidos...")

        setTimeout(()=>{
            resolve("Los pedidos fueron descargados")
        },3000)
       
    })
}

console.log(descargarPedidos()); //no le ponemos valores porque la funcion no tiene argumentos
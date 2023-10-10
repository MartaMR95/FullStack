

// VARIABLES TIPOS DE STRING, son lo mismo practicamente

const producto1="Juego de mesa EL PUEBLO DUERME"; 
// mas usado
const producto2=String("DOOBLE");
const producto3=new String("UNO");



console.log ("Producto1:",producto1);
console.log ("Producto2 con string:",producto2);
console.log ("Prodcuto 3 con new string:", producto3);


// CONSULTAR EL TIPO DE DATO CON TYPEOF

console.log (" TYPEOF Producto1:", typeof producto1);
console.log ("TYPEOF Producto2 con string:", typeof producto2);
console.log (" TYPEOF Prodcuto 3 con new string:", typeof producto3);



let numero100;
let numero200;

    numero100=100
    numero200="200"

console.log ("typeof numero 100:", typeof numero100);
console.log("typeof numero 200:", typeof numero200);



// METODOS


console.log ("METODO LENGTH:", producto1.length);


console.log ("Metodo indexOf:", producto1.indexOf("DUERME"));


console.log("METODO INCLUDES:", producto1.includes("DUERME"));


// EJERCICIO STRINGS Y METODOS


const ejString1=String ("METODO LENGHT");
const ejString2= String("METODO INDEX");
const ejString3= String("METODO INCLUDES");


console.log ("METODO LENGHT:", ejString1.length);
console.log ("METODO INDEX", ejString2.indexOf ("Hola"));
console.log ("METODO INCLUDES", ejString3.includes("METODO"));




// VARIABLES TIPO NUMBER


let numero1=100;
let numero2=200.25;
let numero3="200";
let numero4=2/3;

// Type of 

console.log ("TypeOf producto1:", typeof numero1);
console.log ("TypeOf producto2:", typeof numero2);
console.log("TypeOf numero3:", typeof numero3);
console.log ("TypeOf numero4:", typeof numero4);



// OPERACIONES

console.log ("Numero1 + Numero2:", numero1+numero2);
console.log ("Numero1-Numero2:", numero1-numero2);
console.log("Numero 1*Numero2:", numero1*numero2);
console.log("Numero1/Numero2:", numero1/numero2);
console.log("Numero 1%2,", numero1%numero2)


// METODOS PARA LOS NUMEROS



// METODO ALEATORIO ENTRE O Y 1. Math.random()

let resultado = Math.random()

console.log("metodo ramdon:", resultado);



// NUMERO ALEATORIO ENTERO ENTRE 0 Y 30


resultado = Math.round(Math.random()*30);

console.log("numero aleatorio entero entre 0 y 30:", resultado)



// CALCULAR EL AREA EN FUNCION DEL DIAMETRO


let diametro=5;

let area;

area=Math.PI*Math.pow(diametro/2,2)

console.log("calcular area en funcion del diametro:", area);



// CREAR UN DADO

// Math.round(math.ramdon()*5+1);





// ORDEN DE PRIORIDAD

// () Parentesis
// *,/ Multiplicaciones y divisiones
// +,- Sumas y restas


let resultadoOrden = 20+30*2;

console.log ("MOSTRAR ORDEN DE OPERACIONES:", resultadoOrden);


let resultadoOrden2=(20+30)*2;

console.log("MOSTRAR ORDEN DE OPERACIONES:", resultadoOrden2);


// EJERCICIO CALCULAR EL DESCUENTO Y EL TOTAL A PAGAR

// PROMOCION DEL 40%. MOSTRAR EL TOTAL A PAGAR Y EL AHORRO

let descuento=40

let prenda1=120
let prenda2=85
let prenda3=24


// IMPORTE SIN DESCUENTO


let importe=prenda1+prenda2+prenda3;

console.log ("importe sin descuento:", importe)

// AHORRO

let ahorro=importe*descuento/100;

console.log("descuento total:", ahorro);

// IMPORTE TOTAL CON DESCUENTO

let total=importe-ahorro;


console.log("A PAGAR:",total);



// INCREMENTOS/DECREMENTOS


let meGusta=0;   

meGusta++;        // +1 me gusta, incrementa en 1 el valor me gusta

meGusta-=6;  // meGusta=meGusta-6;

// meGusta=meGusta+1; 

console.log ("Incremento:",meGusta);



console.log("Incremento me gusta:", meGusta++);
console.log("Incremento me gusta:", meGusta++);
console.log("Incremento me gusta:", meGusta++);





// CREAMOS 2 VALORES TIPO CONST Y LE ASIGNAMOS LOS VALORES QUE QUERAMOS


const Nombre="Marta"

const email="martamelladoroman95@gmail.com"



console.log("NOMBRE", Nombre);

console.log (`ESTE ES EL NOMBRE: ${Nombre}`)


console.log("NOMRE Y EMAIL CONCATENADOS:"+Nombre+""+email)

console.log(`NOMBRE Y EMAIL CONCATENADOS: ${Nombre} ${email}`)


// BOOLEANOS TRUE/FALSE



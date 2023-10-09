

// TIPOS DE STRING

const producto1="Juego de mesa EL PUEBLO DUERME";
const producto2=String("DOOBLE");
const producto3=new String("UNO");



console.log ("Producto1:",producto1);
console.log ("Producto2 con string:",producto2);
console.log ("Prodcuto 3 con new string:", producto3);



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
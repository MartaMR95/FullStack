
//POO. PROGRAMACION ORIENTADA A OBJETOS


// OBJECT LITERAL, MANUAL

let producto={
    nombre:"table",
    precio:500
}

// OBJECT CONSTRUCTOR. CREA OBJETOS DE MANERA DINAMICA. CREAMOS CLASES QUE ES UN CONTENEDOR DE DATOS Y LO PODEMOS USAR TANTAS VECES QUERAMOS. SE ASEMEJAN A LAS FUNCIONES

// LE PONNEMOS NOMBRE A LA CLASE CON MAYUSCULA LA PRIMERA

function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
    
    this.nombreObjeto=nombre,
    this.precioObjeto=precio;
    this.categoria=categoria,
    this.disponibilidad=disponibilidad;

}

// CREAMOS UNA INSTANCIA


let producto2= new ProductoClase("Monitor Curvo",800,true,"teach");
let producto3= new ProductoClase("Pc",1800);
let producto4= new ProductoClase("Reloj",800);


console.log(producto2);
console.log(producto3);
console.log(producto4);


// EJERCICIO OBJECT CONSTRUCTOR

function Fecha(año,mes,dia){
    this.año=año;
    this.mes=mes;
    this.dia=dia
    
}

let fecha1= new Fecha (2023,"octubre",25);
let fecha2=new Fecha(2023,"octubre",26);
let fecha3=new Fecha(2023,"octubre",27);


console.log(fecha1);
console.log(fecha2);
console.log(fecha3);


// PROTOTYPES ME PERMITEN CREAR FUNCIONES QUE SOLO SE ULTILIZAN EN UN OBJETO ESPECIFICO. NO SE USA MUCHO



ProductoClase.prototype.formatearProducto=function(){
    return (`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto}`)
}



//CREAR INSTANCIAS PARA PRODUCTO 5,5,7

let producto5=new ProductoClase ("Consola",500,true,"entretenimiento");
let producto6=new ProductoClase("Iphone",1000,true,"telefonía");
let producto7=new ProductoClase("Tablet",400,false,"tech");


console.log(producto5.formatearProducto());
console.log(producto6.formatearProducto());
console.log(producto7.formatearProducto());




// HAY UNA SEGUNDA FORMA DE HACER ESTO CREAR OBJETOS MEDIANTE CONSTRUCTORES
// OBJECT CONSTRUCTOR

class ProductoClase2{
    constructor(nombre,precio){
        this.nombreObjeto2=nombre;
        this.precioObjeto2=precio;
    }

    // metodos

    formatearProducto2(){
        return (`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2}`)

    }

    calcularDescuento(){
        return(`El precio final con el descueto es de ${this.precioObjeto2*(1-0.2)}`)
    }

}

// INSTANCIAS 

let producto8= new ProductoClase2("TV nueva",600);


console.log("Producto 8 con class")
console.log(producto8);
console.log(producto8.formatearProducto2())

console.log(producto8.calcularDescuento())


let producto9= new ProductoClase2("Reloj digital",300);

console.log(producto9.formatearProducto2());
console.log(producto9.calcularDescuento());

// EJERCICIO 

class Libro{
    constructor(nombre,precio,isbn){
        this.nombreLibro=nombre;
        this.precioLibro=precio;
        this.isbn=isbn;
    }



}


let libro1=new Libro("The Witcher",15,564328);

console.log(libro1);



// PARA QUE USAMOS LA HERENCIA, PARA COPIAR PROPIEDADES DE UNA CLASE A OTRO


class Biblioteca extends Libro{
    constructor(nombre,precio,isbn,categoria){
        super(nombre,precio,isbn);
        this.categoria=categoria;
    }

    formatearProducto3(){
        console.log(`El producto ${this.nombre} pertenece a la categoría ${this.categoria}`)

    }
}



// EJERCICIO


class Coche{
    constructor(marca,añoCompra,motor,matricula){
        this.marcaCoche=marca;
        this.añoCompra=añoCompra;
        this.motorCoche=motor;
        this.matriculaCoche=matricula;
    }

    numeroDeAños(){
        return(`El numero de años del coche es ${2023-this.añoCompra}`)

    }
}


let miCoche= new Coche("Seat",2019,"b","12354bnn");

console.log(miCoche)
console.log(miCoche.numeroDeAños())


let padreCoche=new Coche("Kia", 2017,"v","2256klp");


console.log(padreCoche);
console.log(padreCoche.numeroDeAños());



class Itv extends Coche{
    constructor(añocompra,matricula,añoItv){
        super(añocompra,matricula);
        this.añoItv=añoItv;

    }

    proximaItv(){
        return (`Falta para la siguiente ITV ${this.añoItv-2023} años`)
    }


}

let miCoche2= new Itv (2019,"12354bnn",2026);



console.log(miCoche2.proximaItv());






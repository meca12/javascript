/*----------------------------
------------------------------
Clases:
Las clases, son funciones constructoras y siempre las vamos a iniciar con
Mayúsculas
Ejemplo: new String()
=============================*/

/*----------------------------
------------------------------
Clases primitivas: estas comienza con
new y su nombre de clase, Ejemplo
    new Boolean()
=============================*/

/*----------Clases primitivas------------------*/
//clase string variable de tipo objeto con una clase asignada

let string = new String("Martha Elba coreño avila");
console.log("string", string);
//clase number 

let number = new Number(44);
console.log("Number", number);

// boolean

let boleano = new Boolean(true);

console.log("Booleano es", boleano);

/*----------------------------
------------------------------
Clases Compuestas
Estas nos pueden ayudar a construir nuestros aarrays
=============================*/
/*----------------------------
En una clase de tipo objeto se debe usar parentesis y corchetes
para indicar propiedades y valores
/*----------------------------*/
let perro = new Object({ nombre: "pinky", raza: "perro", edad: 7 });

console.log("objeto", perro);

let fruteria = new Array("platano", "Manzana", "Naranja", "Fresas");

console.log("Fruteria array", fruteria);

/*----------------------------
------------------------------
Clases Creada por el programador
o clases personalizadas, llamadas función constructoras
=============================*/




function Persona() {
    //propiedades publicas
    this.nombre;
    this.edad;

}
let yo = new Persona();
yo.nombre = "juan";
yo.edad = 31;

console.log("imprime los objetos de mi clase", yo);
let persona = document.querySelector("#objeto");
let humano = yo.nombre;
persona.innerHTML = humano;

/*----------------------------
------------------------------
Clases Con parámetros o clase dinamica
=============================*/
//constructor los parentesis llevan parametro
function Animales(nombre, raza) {

    //propiedades publicas con parámetros
    this.nombre = nombre;
    this.raza = raza;

}

let mascota = new Animales("pinky", "papillón");
console.log("Mi clase con parámetros", mascota);
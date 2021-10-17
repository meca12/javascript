/*----------------------------
------------------------------
Clases primitivas
=============================*/

//clase string 

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
=============================*/

let perro = new Object({ nombre: "pinky", raza: "perro", edad: 7 });

console.log("objeto", perro);

let fruteria = new Array("platano", "Manzana", "Naranja", "Fresas");

console.log("Fruteria array", fruteria);

/*----------------------------
------------------------------
Clases Creada por el programador
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

/*----------------------------
------------------------------
Clases Con parámetros
=============================*/

function Animales(nombre, raza) {

    //propiedades publicas con parámetros
    this.nombre = nombre;
    this.raza = raza;

}

let mascota = new Animales("pinky", "papillón");
console.log("Mi clase con parámetros", mascota);
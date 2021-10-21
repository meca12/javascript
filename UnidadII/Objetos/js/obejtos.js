/*============================
Objetos: Es una colección de propiedades y Métodos
estas se pueden crear de cero sin necesidad de 
heredar una clase ejemplos:
=============================*/
/**colección de propiedades */
const people = {
    //una propiedad es una asoción entre un nombre y un valor

    nombre: "juan",
    edad: 40,
    // un método es una  función dentro  de un objeto 

    descripcion() {
        console.log("su nombe es" + people.nombre + "y tiene edad" + people.edad);
    },

    saludar(saludo) {
        console.log(saludo + " " + people.nombre);
    }
}

console.log("Nombre", people.nombre);
console.log("Edad", people.edad);
people.descripcion();
people.saludar("Hola Buenas tardes");






//objetos literales
const animal = {
    nombre: "pinky",
    moverse() {
        console.log("Me gusta correr, cuando me sacan de paseo");
    }
}

console.log("Mi mascota se llama", animal.nombre);
animal.moverse();

//funcion contructora

function Animal(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //Métodos
    this.sonar = function() {
        console.log("Y hago sonidos por que estoy vivo");
    }

    this.Presentacion = function() {
        console.log("Hola mi nombre es", this.nombre, " y mi genero es : ", this.genero);
    }
}

const snoopy = new Animal("Soonopy", "Macho"),
    lolaBunny = new Animal("Lola Bunny", " hembra");

console.log(snoopy.nombre, snoopy.genero);
snoopy.sonar();
console.log(lolaBunny.nombre, lolaBunny.genero);
lolaBunny.sonar();

lolaBunny.Presentacion();
lolaBunny.sonar();

snoopy.Presentacion();
snoopy.sonar();
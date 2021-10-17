const people = {
    //una propiedad es una asocoacoón entre un nombre y un valor

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


const primerCorredor = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    resultado: function() {
        if (primerCorredor.c > primerCorredor.b &&
            primerCorredor.d > primerCorredor.b &&
            primerCorredor.d > primerCorredor.c &&
            primerCorredor.d < primerCorredor.a) {
            return true;
        }
        return false;

    },
    Tiempo: setInterval(function() {

        primerCorredor.a = Math.ceil(Math.random() * 4)
        primerCorredor.b = Math.ceil(Math.random() * 4)
        primerCorredor.c = Math.ceil(Math.random() * 4)
        primerCorredor.b = Math.ceil(Math.random() * 4)


        if (primerCorredor.resultado()) {
            clearInterval(primerCorredor.intervalo);
            console.log("atleta A", primerCorredor.a)
            console.log("atleta B", primerCorredor.b)
            console.log("atleta C", primerCorredor.c)
            console.log("atleta D", primerCorredor.d)
        }
    }, 10)
}

primerCorredor.resultado();
console.log(primerCorredor.Tiempo);


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
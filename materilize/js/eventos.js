//primero tomamos el valor global a modificar
var Caja = document.querySelectorAll('.cajas');
//despues creamos nuestra función dondé vamos, 
//hacer cambio de propiedad sobre el objeto

const green = () => {

    for (let i = 0; Caja.length; i++) {
        Caja[i].style.background = "cyan";
    };

};



///mandamos llamar el elemento que va ha servir 
//para hacer cambios en el dom 
let verde = document.querySelector("#cyan");
//agregamos el evento click junto con nuestra funcion 
verde.addEventListener("click", green);

const blue = () => {

    for (let i = 0; Caja.length; i++) {
        Caja[i].style.background = "blue";

    };

};



///mandamos llamar el elemento que va ha servir 
//para hacer cambios en el dom 
let Azul = document.querySelector("#azul");
//agregamos el evento click junto con nuestra funcion 
Azul.addEventListener("click", blue);

const amarillo = () => {

    for (let i = 0; Caja.length; i++) {
        Caja[i].style.background = "yellow";

    };



};



///mandamos llamar el elemento que va ha servir 
//para hacer cambios en el dom 
let Amarillo = document.querySelector("#amarillo");
//agregamos el evento click junto con nuestra funcion 
Amarillo.addEventListener("click", amarillo);

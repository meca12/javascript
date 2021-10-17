/*se declaran variables que entran por pantalla*/

let captura = parseInt(prompt("ingresa un número"));
let captura2 = parseInt(prompt("ingresa un segundo valor"));
/* esta variable es para guardar resultado*/
let resultado;

/* se genera una funcion  donde se pide ingresar el ipo de operacion */
function calculadora(captura, captura2) {
    let selecciona = prompt("selecciona tu tipo de operación 1, para sumar, 2 para restar, 3 para multiplicar, 4 para dividir ");

    /*switch toma el valor de la variable prompt y hace la comparativa */
    switch (selecciona) {
        /*si es uno realiza  una suma*/
        case "1":
            resultado = captura + captura2
            console.log(resultado);
            alert(resultado);
            break;
            /*si es dos hace una resta*/
        case "2":
            resultado = captura - captura2
            console.log(resultado);
            alert(resultado);
            break;
            /*si es tres realiza  una multiplicación*/
        case "3":
            resultado = captura * captura2
            console.log(resultado);
            alert(resultado);
            break;
            /*si es cuatro realiza  una divisón*/
        case "4":
            resultado = captura / captura2
            console.log(resultado);
            alert(resultado);
            break;
            /*en caso de poner un número fuera del menu enviara este mensaje*/
        default:
            alert("tu seleccción no se encuentra en el menu");
            console.log("tu seleccción no se encuentra en el menu");
    }
}

/*esta funcion pasa parametros con valor*/
calculadora(captura, captura2);
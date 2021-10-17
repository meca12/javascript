let tiempo = document.querySelector(".tiempo");
let timestop = document.querySelector(".tiempodetenido");
let segundos = 0;
let segundosstop = 0;

setInterval(function() {
    segundos++;
    tiempo.innerHTML = segundos;


}, 1000)

/*-----settimie out ------*/

setTimeout(function() {
    alert("se  cumplio el tiempo")
}, 5000)

/**Detener tiempo** */

const stoptime = setInterval(function() {
    segundosstop++;
    timestop.innerHTML = segundosstop;
}, 1000);
setTimeout(function() {
    clearInterval(stoptime);

}, 20000)

/*Math.random devuelve un numero aleatoro entre 0  y  1 
/*Math.floor devuelve un numero menor del decimal
/*Math.celi devuelve el número  máximo del decimal
/*Math.round devuelve el número aleatorio redondeado, m{as próximo a el
/**numeros aleatorios solo impresos en html solo numeros hasta el 19
/ * con Math.floor()----- */

let numeroAleatorios = document.querySelector(".numeroaleatorios");
let numero = 0;
numero = Math.floor(Math.random() * 20);

numeroAleatorios.innerHTML = numero;

/**numero  aleatorios impresos por tiempo Math.random */

let numeroAleatoriotime = document.querySelector(".numeroaleatoriostime");

let setnumeroalert = 0;
setnumeroalert = Math.random();
setInterval(() => {

    setnumeroalert++;
    numeroAleatoriotime.innerHTML = setnumeroalert;

}, 1000);

/**numero  aleatorios impresos por tiempo Math.celis */

let numeros = document.querySelector("#numeros");
let contador = 0;

contador = Math.ceil(Math.random() * 100);
numeros.innerHTML = contador;

/*numeros aleatorios impresos  por tiempo con Math.round*/

let rounnum = document.querySelector(".rounnum");
let acount = 0;
acount = Math.round(Math.random() * 30);
rounnum.innerHTML = acount;
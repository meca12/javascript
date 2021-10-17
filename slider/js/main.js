/* se selecciona el query selector del slider-contenedor*/
let slider = document.querySelector(".slider-contenedor");
/* se selecciona el contenido del slider*/
let sliderIndividual = document.querySelectorAll(".contenido-slider");
/* se crea una variable de contador  que iniciara en uno */
let contador = 1;
/* se crea una variable width donde se agregara  un array para el sliderIndividual y 
se agrega la popiedad de element.clientWidth */
let width = sliderIndividual[0].clientWidth;
/* se crea una variable de intervalo*/
let intervalo = 3000;

/* Esta función sirve para ajustar el ancho de la ventana al verse el slider en 
diferentes dispositivos*/
window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
});

/* aquí se Setea el intervalo de tiempo entre cambio de slider*/
setInterval(function() {
    slides();
}, intervalo);

/* aquí se genera la transicion de el slider 
y el cambio que este tiene */
function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform 1s";
    contador++;

    /* se genera un loop para que el carrousel sea continuo aparte se integra  el
    tiempo de transición */

    if (contador === sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;

        }, 1500)


    }
}
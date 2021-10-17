var caja = document.querySelector("#caja");
var body = document.body;




const rojo = () => {

    caja.style.background = "red";
    body.style.background = "orange";
    body.style.transition = "4s width ease";
    caja.style.width = "700px";
    caja.style.height = "600px";
    caja.style.transition = "2s width ease";
    crear.style.display = "none";
    Btn2.style.display = "block";
    Btn1.style.display = "block";
    caja.animationDirection = "100px";
}
let crear = document.querySelector("#boton");
crear.addEventListener("click", rojo);


const verde = () => {
    caja.style.background = "green";
    body.style.background = "blueviolet";
    caja.style.height = "600px";
    caja.style.width = "600px";
    crear.style.display = "block";
    Btn1.style.display = "block";
    Btn2.style.display = "none";
    caja.style.transition = "2s width ease";


}

let Btn2 = document.querySelector("#Btn2");
Btn2.addEventListener("click", verde);


const azul = () => {

    caja.style.background = "blue";
    body.style.background = "darkgreen";
    caja.style.width = "700px";
    caja.style.height = "600px";
    caja.style.transition = "2s width ease";
    crear.style.display = "block";
    Btn1.style.display = "none";
    Btn2.style.display = "block";
    caja.animationDirection = "100px";
}
let Btn1 = document.querySelector("#Btn1");
Btn1.addEventListener("click", azul);
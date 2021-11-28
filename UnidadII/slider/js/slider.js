/*=======================================================
objeto con las propiedades del slide
========================================================*/
const p = {

    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    slideAnimation: "fade",
    imgSlide: document.querySelectorAll("#slide ul li"),
    flechaAvanzar: document.querySelector("#right"),
    flechaRetroceder: document.querySelector("#left"),
    velocidad: 3000,
    formatloop: false

}




/*=======================================================
objeto con los métodos del slide
========================================================*/

const m = {
    inicioSlide: () => {
        for (let i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            p.imgSlide[i].style.width = (100 / p.paginacion.length) + "%";
        }
        p.flechaAvanzar.addEventListener("click", m.adelante)
        p.flechaRetroceder.addEventListener("click", m.atras)
        m.automatizacion()
        p.cajaSlide.style.width = (p.paginacion.length * 100) + "%";


    },
    paginacionSlide: (item) => {
        p.item = item.target.parentNode.getAttribute("item") - 1;
        m.movimientoSlide(p.item);


    },
    movimientoSlide: (item) => {

        p.formatloop = true;

        p.cajaSlide.style.left = item * -100 + "%";

        for (let i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].style.opacity = .5;

        }
        p.paginacion[item].style.opacity = 1.5;

        if (p.slideAnimation == "slide") {
            p.imgSlide[item].style.transition = ".9s opacity ease-in-out"

        }

        if (p.slideAnimation == "fade") {
            p.imgSlide[item].style.opacity = 0;

            setTimeout(() => {
                p.imgSlide[item].style.transition = ".9s opacity ease-in-out";
                p.imgSlide[item].style.opacity = 1;
            }, 600);
        }
    },

    adelante: () => {

        if (p.item == p.imgSlide.length - 1) {
            p.item = 0;
        } else {
            p.item++;
        }

        m.movimientoSlide(p.item);

    },

    atras: (item) => {

        if (p.item == 0) {
            p.item = p.imgSlide.length - 1;
        } else {
            p.item--;
        }

        m.movimientoSlide(p.item);

    },
    automatizacion: () => {
        setInterval(() => {
            if (p.formatloop) {
                p.formatloop = false;
            } else {
                m.adelante();
            }

        }, p.velocidad);
    }

}

m.inicioSlide();
/*=========================================
se crean las propiedades de  un objeto galeria
==========================================*/

const pgaleria = {
    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaimagen: null,
    cuerpo: document.querySelector("body"),
    cajalux: null,
    modal: null
}

/*=========================================
se crean los métodos de un objeto galeria
==========================================*/
const mgaleria = {
    /*inicia la galeria cuando damos click*/
    inicioGaleria: () => {
        for (let i = 0; i < pgaleria.imgGaleria.length; i++) {
            pgaleria.imgGaleria[i].addEventListener("click", mgaleria.capturaImagen);

        }
    },

    capturaImagen: (img) => {

        pgaleria.rutaimagen = img.target;
        mgaleria.lightbox(pgaleria.rutaimagen)

    },
    lightbox: (img) => {
        pgaleria.cuerpo.appendChild(document.createElement("div")).setAttribute("id", "lightbox");
        pgaleria.cajalux = document.querySelector("#lightbox");
        pgaleria.cajalux.style.width = "100%";
        pgaleria.cajalux.style.height = "100%";
        pgaleria.cajalux.style.position = "fixed";
        pgaleria.cajalux.style.zIndex = "10";
        pgaleria.cajalux.style.background = "rgba(0,0,0,.8)";
        pgaleria.cajalux.style.top = 0;
        pgaleria.cajalux.style.left = 0;
        pgaleria.cajalux.appendChild(document.createElement("div")).setAttribute("id", "modal");
        pgaleria.modal = document.querySelector("#modal");
        pgaleria.modal.innerHTML = img.outerHTML + "<div>X</div>";
        pgaleria.modal.childNodes[0].style.width = "100%";
        pgaleria.modal.childNodes[0].style.border = "10px solid white";
        pgaleria.modal.style.display = "block";
        pgaleria.modal.style.position = "relative";
        pgaleria.modal.style.width = "60%";
        pgaleria.modal.style.top = "50%";
        pgaleria.modal.style.left = "50%";

        pgaleria.modal.style.marginTop = -pgaleria.modal.childNodes[0].width / 4 + "px";
        pgaleria.modal.style.marginLeft = -pgaleria.modal.childNodes[0].width / 2 + "px";


        pgaleria.modal.childNodes[1].style.position = "absolute";
        pgaleria.modal.childNodes[1].style.right = "5px";
        pgaleria.modal.childNodes[1].style.top = "8px";
        pgaleria.modal.childNodes[1].style.color = "silver";
        pgaleria.modal.childNodes[1].style.cursor = "pointer";
        pgaleria.modal.childNodes[1].style.fontsize = "40px";
        pgaleria.modal.childNodes[1].style.width = "30px";
        pgaleria.modal.childNodes[1].style.height = "30px";
        pgaleria.modal.childNodes[1].style.background = "white";
        pgaleria.modal.childNodes[1].style.textAlign = "center";
        pgaleria.modal.childNodes[1].style.borderRadius = "0px 0px 0px 8px";
        pgaleria.modal.childNodes[1].addEventListener("click", mgaleria.salir);



    },
    salir: () => {
        pgaleria.cajalux.parentNode.removeChild(pgaleria.cajalux);

    }

}
mgaleria.inicioGaleria();
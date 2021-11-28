/*=========================================
se crean las propiedades de  un objeto galeria
==========================================*/

const pgaleria = {
    imgGaleria: document.querySelectorAll("#galeria ul li img")
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
        console.log("img", img.target);

    }

}

mgaleria.inicioGaleria();
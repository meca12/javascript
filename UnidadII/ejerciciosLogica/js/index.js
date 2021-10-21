/****ejerciciosDeLogica */

/*=============================================
CASO 1. LOS CUATRO ATLETAS. 

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B, y D ha llegado en medio de A y C. ¿Podría usted calcular el orden de llegada?

B -> 1
C -> 2
D -> 3
A -> 4
=============================================*/
const corredor = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        resultado: function() {
            if (corredor.C > corredor.B &&
                corredor.D > corredor.B &&
                corredor.D > corredor.C &&
                corredor.D < corredor.A) {
                return true;
            }
            return false;


        },
        Tiempo: setInterval(function() {

            corredor.A = Math.ceil(Math.random() * 4);
            corredor.B = Math.ceil(Math.random() * 4);
            corredor.C = Math.ceil(Math.random() * 4);
            corredor.D = Math.ceil(Math.random() * 4);


            if (corredor.resultado()) {
                clearInterval(corredor.Tiempo);
                console.log("atleta A", corredor.A);
                console.log("atleta B", corredor.B);
                console.log("atleta C", corredor.C);
                console.log("atleta D", corredor.D);
            }
        }, 10)
    }
    /*=============================================
    CASO 2. CABALLOS. 

    El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún más lento que el de Willy, que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo, cuál el más lento y cuál el más claro?

    Mac | edad: viejo (2) | velocidad: rapido (2) | tono: oscuro (2)
    Smith | edad: joven (1) | velocidad: rapido (2) | tono: claro (1)
    Jack | edad: joven (1) | velocidad: lento (1) | tono: oscuro (2)
    Willy | edad: joven (1) | velocidad: rapido (2) | tono: oscuro (2)

    =============================================*/

/*=============================================
CASO 3. LOS CUATRO PERROS. 

Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Éste último come más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco. ¿Cuál de los cuatro perros come menos?.
=============================================*/

/*=============================================
CASO 4. SEIS AMIGOS DE VACACIONES. 

Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte; sabemos que Alejandro no utiliza el coche ya que éste acompaña a Benito que no va en avión. Andrés viaja en avión. Si Carlos no va acompañado de Darío ni hace uso del avión, podría Vd. decirnos en qué medio de transporte llega a su destino Tomás.
=============================================*/
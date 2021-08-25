let gameObject = {
    stats: {
        carisma: 20,
        fuerza: 20,
        belleza: 20,
        inteligencia: 20
    },
    items: {
        linternas: 0,
        estacas: 0,
        tijeras: 0,
        globos: 0,
        espejo: false
    },
}

//console.log(gameObject.items.estacas);


function zombie(gameObject) {


    if (gameObject.items.estacas === 0 && gameObject.stats.fuerza > 0) {

        gameObject.stats.fuerza -= 10;

        console.log("Has sido atacada por el zombie");

        console.log("has perdido -10 en fuerza");

    }

    if (gameObject.stats.fuerza <= 0) {

        //gameObject.stats.fuerza = false;

        gameObject.stats.carisma -= 2;
        gameObject.stats.belleza -= 2;
        gameObject.stats.inteligencia -= 2;

        console.log("¡Oh no!");
        console.log("Has perdido -2 puntos en cada atributo");

        console.log(`
        Total carisma: ${gameObject.stats.carisma} \n 
        Total belleza: ${gameObject.stats.belleza} \n 
        Total inteligencia: ${gameObject.stats.inteligencia}
        `)

    }


    if (gameObject.items.estacas > 0) {

        gameObject.stats.fuerza += 5;
        gameObject.items.estacas -= 1;

        console.log(`zombie atacado con una estaca, te quedan ${gameObject.items.estacas} estacas.`);

        console.log("El zombie fue eliminado!");

        console.log("Has ganado +5 en fuerza");

        console.log(`Ahora tu fuerza es ${gameObject.stats.fuerza}`)
    }

    return (gameObject);
    //console.log(gameObject.stats.fuerza)
}

//validaciones
//zombie(gameObject);



//segunda función
function obtenerEstaca(gameObject) {

    /*
    Si el valor de fuerza de la heroina es menor o igual 5: 80% probabilidad de sumar 1 estaca, 20% de no obtener nada.
    */

    if (gameObject.stats.fuerza <= 5) {
        let aleat = parseInt(Math.random() * 10);

        if (aleat >= 3) {
            console.log("¡Enhorabuena! has ganado una estaca");

            gameObject.items.estacas += 1;

            console.log(`Total estacas: \n ${gameObject.items.estacas}`);

        } else {
            console.log("No has ganado ninguna estaca");

            console.log(`Total estacas: \n ${gameObject.items.estacas}`);
        }
        console.log(aleat);

    }

    if (gameObject.stats.fuerza >= 5) {

        console.log("esto es una bandera");

        let aleat = parseInt(Math.random() * 10);

        if (aleat >= 3) {
            console.log("¡Mala Suerte!, no has ganado ninguna estaca");

            console.log(`Total estacas: \n ${gameObject.items.estacas}`);

        } else {
            console.log("¡Enhorabuena! has ganado una estaca");

            gameObject.items.estacas += 1;

            console.log(`Total estacas: \n ${gameObject.items.estacas}`);
        }
    }

    return gameObject;

}

//obtenerEstaca(gameObject);
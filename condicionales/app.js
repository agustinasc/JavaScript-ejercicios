        //EJERCICIO 1
        //Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

/* const puedeVerPelicula = (edad, tieneAutorizacion) => {
   if ( edad >= 15 || tieneAutorizacion == true) {
         console.log('true');
    } else {
        console.log('False ');
    }
};

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true */

        //EJERCICIO 2
        //Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

/* const estaEnRango = (valor, minimo, maximo) => {
    if(valor >= minimo && valor <= maximo && minimo === 1 && maximo === 10 ) {
        console.log('True - Esta en rango');
    } else {
        console.log('False - No esta en rango');
    };
};

estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false  */

            ////EJERCICIO 3
            //Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

/* const puedeAvanzar = (colorSemaforo) => {
    if(colorSemaforo == 'verde') {
        console.log('True - puede avanzar');
    } else if (colorSemaforo == 'rojo' || colorSemaforo == 'amarillo'){
        console.log("False - No puede avanzar")
    } else {
        console.log("Error: color de semáforo inválido")
    };
};

puedeAvanzar('verde')     // true
puedeAvanzar('amarillo')  // false
puedeAvanzar('rojo')      // false
puedeAvanzar('lila')      // 'Error: color de semáforo inválido'  */

            //EJERCICIO 4
            //Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

/* const esVocal = (letra) => {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        console.log("True - Es vocal");
    } else {
        console.log("False - Es consonante")
    };
};

esVocal('a') // true
esVocal('n') // false */

            //EJERCICIO 5
            //Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

/* const esConsonante = (letra) => {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        console.log("False - Es vocal")
    }else {
        console.log("True - Es consonante")
    };
}; 

esConsonante("a") // false
esConsonante('n') // true */


        ////EJERCICIO 6
        //Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

const esHoraValida = (tiempo) => {
    const hora = tiempo.split(':')[0];
    const minutos = tiempo.split(':')[1];
    if (hora >= 00 && hora <= 12 && minutos >= 00 && minutos <= 59){
        console.log("True - Es hora válida");
    } else {
        console.log("False - Hora Inválida")   
    };
};


esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true */


        //EJERCICIO 7
        //Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

/* puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)

puedeRenovarCarnet(true, true, true)    // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false */

        //EJERCICIO 8
        //Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

/* puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false */
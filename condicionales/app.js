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

/* const esHoraValida = (tiempo) => {
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

/* const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests == true && tieneMultasImpagas == false && pagoImpuestos == true){
        console.log("True - Puede renovar")
    } else {
        console.log("False - No puede renovar")
    };
};

puedeRenovarCarnet(true, true, true)    // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false  */

        //EJERCICIO 8
        //Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

/* const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
    if(asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true){
        console.log("True - Puede graduarse")
    } else {
        console.log("False = No puede graduarse")
    };
};

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false  */


        //EJERCICIO 9
        //Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

/* const esParOImpar = (numero) => {
    if(numero % 2 == 0){
        console.log("Par")
    } else {
        console.log("Impar")
    };
};

esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par' */

        //EJERCICIO 10
        //Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

/* const esPositivoONegativo = (numero) => {
    if(numero>0){
        console.log("positivo")
    }else{
        console.log("negativo")
    }
};
esPositivoONegativo(3)  // 'positivo'
esPositivoONegativo(-5) // 'negativo' */

        //EJERCICIO 11
        //Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

/* const avanzarSemaforo = (colorActual) => {
    if (colorActual === "verde") {
        console.log("amarillo")
    } else if (colorActual==="amarillo"){
        console.log("rojo")
    } else {
        console.log("verde")
    }
};

avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde' */

        //EJERCICIO 12
        //Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

/* const obtenerDiasMes = (mes) => {
    if (mes==="enero" || mes==="marzo" || mes==="mayo" || mes==="julio" || mes==="agosto" || mes==="octubre" || mes=="diciembre") {
        console.log(31)
    } else if (mes==="febrero") {
        console.log(29)
    }else {
        console.log(30)
    };
};

obtenerDiasMes("diciembre") // 31
obtenerDiasMes("febrero")   // 29
obtenerDiasMes("junio")   // 30 */

        //EJERCICIO 13
        //Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

/* const obtenerGeneracion = (anioNacimiento) => {
    if(anioNacimiento>=1949 && anioNacimiento<=1968){
        console.log("Baby boomer")
    }else if(anioNacimiento>=1969 && anioNacimiento<=1980){
        console.log("Generación X")
    }else if (anioNacimiento>=1981 && anioNacimiento<=1993){
        console.log("Millennials")
    }else if(anioNacimiento>=1994 && anioNacimiento<=2010){
        console.log("Generación Z")
    }
};
//Generación	Años de nacimiento
//Baby boomer	1949-1968
//Generación X	1969-1980
//Millennials	1981-1993
//Generación Z	1994-2010
obtenerGeneracion(1990);
obtenerGeneracion(1985);
obtenerGeneracion(1965); */

        //EJERCICIO 14
        //Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

//Temperatura	Mensaje
//Menor a 0°	¡Está helando!
//Mayor o igual a 0° y menor a 15°	¡Hace frío!
//Mayor o igual a 15° y menor a 25°	Está lindo
//Mayor o igual a entre 25° y menor a 30°	Hace calor
//Mayor o igual de 30°	¡Hace mucho calor!

/* const obtenerSensacion = (temperatura) => {
    if(temperatura<0){
        console.log("Está helado!");
    }else if(temperatura>=0 && temperatura<15){
        console.log("Hace frio!");
    }else if(temperatura>=15 && temperatura<25){
        console.log("Esta lindo!");
    }else if(temperatura>=25 && temperatura<30){
        console.log("Hace calor!");
    }else if (temperatura>=30) {
        console.log("Hace mucho calor!");
    };
};

obtenerSensacion(33) // "¡Hace mucho calor!"
obtenerSensacion(28) // "¡Hace mucho calor!"
obtenerSensacion(15) // "¡Hace mucho calor!"
  */
        //EJERCICIO 15
        //Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

//Puntaje	Nota
//Menor a 6	Desaprobado
//Mayor o igual a 6 y menor a 7	Regular
//Mayor o igual a 7 y menor a 8	Bueno
//Mayor o igual a entre 8 y menor a 10	Muy bueno
//10	Excelente
//Menor a 0 o mayor a 10	Puntaje inválido

/* obtenerNota = (puntaje) => {
    if(puntaje<6){
        console.log("Desaprobado")
    }else if(puntaje>=6 && puntaje<7){
        console.log("Regular")
    }else if(puntaje>=7 && puntaje<8){
        console.log("Bueno")
    }else if(puntaje>=8 && puntaje<10){
        console.log("Muy Bueno")
    }else if(puntaje===10){
        console.log("Excelente")
    }else{
        console.log("puntaje inválido")
    };
};

obtenerNota(7)    // "Bueno"
obtenerNota(9.6)  // "Excelente"
obtenerNota(12)   // "Puntaje inválido" */

        ////EJERCICIO 16
        //Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

/* const jugarPiedraPapelTijera = (a, b) => {
    if(a==="piedra" && b==="papel" || a==="papel" && b==="piedra"){
        console.log("Ganó papel!")
    }else if (a==="tijera" && b==="piedra" || a==="piedra" && b==="tijera"){
        console.log("Ganó piedra!")
    }else if (a==="tijera" && b==="papel" || a==="papel" && b==="tijera"){
        console.log("Ganó tijera!")
    } else if ((a==="piedra" || a==="papel" || a==="tijera") && (b==="piedra" || b==="papel" || b==="tijera"))  {
        console.log("Empate!")
    } else {
        console.log("No sabe jugar!")
    }
};

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!
jugarPiedraPapelTijera('cuchillo', 'tijera')  //  */
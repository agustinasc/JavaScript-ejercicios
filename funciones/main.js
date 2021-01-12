// alert("funciona");

                                        // EJERCICIOS

// sumar(a, b)
// const sumar = (num1, num2) => num1 + num2;

/* const sumaDeDosNumeros = (num1, num2) => {
    const result = num1 + num2;
    return result
};
console.log (sumaDeDosNumeros(2,3));

const sumar = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
console.log (sumar(1.2,3.4));

const sumando = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
console.log(sumando(3,-5))- */


// restar(a, b)

/* const restar = (num1, num2) => {
    const result = num1 - num2;
    return result;
}

console.log(restar(3,2));
console.log(restar(10,5.5));
console.log(restar(3,5)); */

    // multiplicar(a, b)

/* const multiplicar = (num1, num2) => {
    const result = num1 * num2;
    return result;
}

console.log(multiplicar(2,3));
console.log(multiplicar(4,0.5)); */

    // dividir(a, b)

/* const dividir = (num1, num2) => {
    const result = num1 /num2;
    return result;
}

console.log(dividir(12,3));
console.log(dividir(8,4));
console.log(dividir(30,6));

*/

    // esPar(numero)

/*  const esPar = (num) => {
    if (num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(esPar(5));
console.log(esPar(4));  */

    // esImpar(numero)

/* const esImpar = (num) => {
    if(num % 2 == 0){
        return false;
    } else {
        return true;
    }
}

console.log(esImpar(5));
console.log(esImpar(4)); */

    //calcularAreaTriangulo(base, altura)

/* const calcularAreaTriangulo = (base, altura) => {
    const result = (base * altura) / 2;
    return result;
}

console.log(calcularAreaTriangulo(3,4));
console.log(calcularAreaTriangulo(5,6)); */

    
        // gritar(str)

const gritar = (stg) => {
    return `!${stg}!`;
}
console.log(gritar("hola"));
console.log(gritar("aaaaa"));

    
        // obtenerNombreCompleto(nombre, apellido)

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

const obtenerNombreCompleto = (nombre, apellido) => {
    return nombre + " " +apellido
}
console.log(obtenerNombreCompleto(nombre, apellido));


        //saludar(nombre)

//const name = prompt("Ingrese su nombre");

const saludar = (stg) => {
    return "Hola" + " "+ obtenerNombreCompleto(nombre, apellido)+", un gusto conocerte";
}
console.log(saludar()); 

        
        //saludarGritando(nombre, apellido)
  const saludarGritando = (nombre, apellido) =>{
 return `${gritar(saludar(obtenerNombreCompleto(nombre, apellido)))}`
}
console.log(saludarGritando());

const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
const saludar = (texto) => `Hola ${texto}, un gusto conocerte`;
const gritar = (texto) => `¡${texto}!`;
const saludarGritando = (obtenerNombreCompleto, saludar, gritar) => {
    return gritar(saludar(obtenerNombreCompleto("Jonh" , "Parra")));

}
console.log(saludarGritando(obtenerNombreCompleto, saludar, gritar));

        // obtenerDatosDeCiudad(nombre, poblacion, pais)


/* const ciudad = prompt("Ingrese una ciudad");
const poblacion = parseInt(prompt("Ingrese su población"));
const pais = prompt("Ingrese su pais"); */
/*  const obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
    return `La ciudad de ${nombre} tiene una población de ${poblacion} y esta ubicado en ${pais}`;
}
console.log(obtenerDatosDeCiudad("Santa Fe", 545606, "Argentina"));  */


        // convertirHorasEnSegundos(horas)

/* const convertirHorasEnSegundos = (horas) => {
    //const result = horas * 60 *60;
    return horas * 60 *60;
}
console.log(convertirHorasEnSegundos(1));
console.log(convertirHorasEnSegundos(3));
console.log(convertirHorasEnSegundos(4.5));
 */


        // calcularPerimetroRectangulo(ancho, alto)

/* const calcularPerimetroRectangulo = (ancho, alto) => {
    //const result = ancho * 2 + alto * 2;
    return ancho * 2 + alto * 2;
}
console.log(calcularPerimetroRectangulo(3.2, 5)); */


        // calcularPorcentaje(numero, porcentaje)

 const calcularPorcentaje = (numero, porcentaje) => {
    return numero * (porcentaje/100);
}
console.log(calcularPorcentaje(100, 15));
console.log(calcularPorcentaje(10, 50));
console.log(calcularPorcentaje(200, 10)); 


        // sumarPorcentaje(numero, porcentaje)

 const sumarPorcentaje = (numero, porcentaje) => {
    return numero + calcularPorcentaje(numero, porcentaje);
}

console.log(sumarPorcentaje(100, 15));
console.log(sumarPorcentaje(10, 50));
console.log(sumarPorcentaje(200, 10));



        // restarPorcentaje(numero, porcentaje)

const restarPorcentaje = (numero, porcentaje) => {
    return numero - calcularPorcentaje(numero, porcentaje);
}
console.log(restarPorcentaje(100, 15));
console.log(restarPorcentaje(10, 40));
console.log(restarPorcentaje(200, 10));


        // calcularFPS(fps, minutos)

/* const calcularFPS = (fps, minutos) => {
    return fps * (minutos * 60)
}
console.log(calcularFPS(1, 1));
console.log(calcularFPS(10, 2)); 
console.log(calcularFPS(2, 3)); */

        // obtenerCompetencia(a, b)

/* const obtenerCompetencia = (a, b) =>{
    return `${a} vs. ${b}`;
};

console.log(obtenerCompetencia('Coca', 'Pepsi'));
console.log(obtenerCompetencia('Python', 'Javascript'));
console.log(obtenerCompetencia('Gato', 'Perro')); */

        // generarEmail(usuario, dominio)

/* const generarEmail = (usuario, dominio) => {
 return `${usuario}@${dominio}`;
};

console.log(generarEmail('adalovelace', 'gmail')); */

        // esMayorDeEdad(edad)

/* const esMayorDeEdad = (edad) =>{
    if (edad >= 18){
        return true;
    } else {
        return false
    }
};
console.log(esMayorDeEdad(18));
console.log(esMayorDeEdad(12));
console.log(esMayorDeEdad(30)); */

        
        // haceCalor(temperatura) - // haceFrio(temperatura)
/* const temperatura = prompt("Ingrese temperatura");
const haceCalor = (temperatura) => {
    if (temperatura >= 22) {
        return `Hace Calor`;
    } else if (temperatura < 22) {
        return `Hace Frio`;
    }
}

console.log(haceCalor(temperatura)); */
       

        // aceptaDeposito(monto)
/* const aceptaDeposito = (monto) => {
    if (monto % 10 == 0){
        return true;
    }else {
        return false
    }
};
console.log(aceptaDeposito(440));
console.log(aceptaDeposito(550.5)); */

        // calcularPuntaje(facil, normal, dificil)

/*  const calcularPuntaje = (facil, normal, dificil) => {
    const ej1 = facil * 3;
    const ej2 = normal * 5;
    const ej3 = dificil * 10;
    return ej1 + ej2 + ej3;
}

//console.log(calcularPuntaje(3, 0, 0));
//console.log(calcularPuntaje(0, 2, 1));
//console.log(calcularPuntaje(5, 1, 2));

const result = calcularPuntaje(3,0,0);
console.log(result); */
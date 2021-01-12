        // EJERCICIO 1 
        // Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

/* const tienenMismaLongitud = (a, b) => {
    console.log(a.length);
    console.log(b.length);
    return a.length == b.length;
};

console.log(tienenMismaLongitud("javascript", "java")); //false
console.log(tienenMismaLongitud("cerveza", "manzana")); // true */

        //EJERCICIO 2
        // Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

 /* const esUltimoCaracter = (palabra, caracter) => {
    //console.log(palabra);
    // console.log(caracter);
     return palabra.charAt(palabra.length -1) === caracter;
};

console.log(esUltimoCaracter('lovelace', 'e'));
console.log(esUltimoCaracter('lovelace', 'f'));
 */

        //EJERCICIO 3
        //Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

/* const esContraseniaValida = (contrasenia) => {
    return contrasenia.length >= 8;
};

console.log(esContraseniaValida('contraseniaMuySegura'));
console.log(esContraseniaValida('abc123')); */

        //EJERCICIO 4
        //Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

/*  const sonIguales = (a, b) => {
    return a.toLowerCase() === b.toLowerCase();
};

console.log(sonIguales('javascript', 'JavaScript'));
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'));
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'));  */

        //EJERCICIO 5
        //Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

        // otra solucion con REGEX=>  const contarPalabras = (str) => str.match(/\S+/g).length;

        /* const contarPalabras = (str) =>{
    return str.split(" ").length;
};

console.log(contarPalabras('javascript'));
console.log(contarPalabras('ada lovelace'));
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));  */

        //EJERCICIO 6
        //Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i

/* const burlarse = str => str.replaceAll(/[aeiou]/ig, 'i');
 
console.log(burlarse('programar es dificil')); */

        //EJERCICIO 7
        //Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

 /* const esFraccionMayorAUno = (fraccion) => {
        const numerador = fraccion.split('/')[0];
        const denominador = fraccion.split('/')[1];
        return (numerador / denominador) > 1;
};      

console.log(esFraccionMayorAUno('1/2')); // false
console.log(esFraccionMayorAUno('2/2')); // false
console.log(esFraccionMayorAUno('4/2')); // true  */

        //EJERCICIO 8

/* const capitalizar = (str) => {
        const primeraLetra = str.charAt(0).toUpperCase();
        const restoPalabra = str.slice(1, str.length);
        return `${primeraLetra}${restoPalabra}`;
};

console.log(capitalizar('lovelace')); // 'Lovelace'
console.log(capitalizar('había una vez...')); // 'Había una vez...' */

        //EJERCICIO 9
        //Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:
        
        //- Las i se transforman en 1
        //- Las e se transforman en 3
        //- Las a se transforman en 4
        // - Las s se transforman en 5
        // - Las 0 se transforman en 0

/* const aHackerSpeak = (str) => {
        return str.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0').replace(/s/gi, '5');
};

console.log(aHackerSpeak('javascript')) // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')); // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')); // '4D4 L0V3L4C3'  */

        //EJERCICIO 11
        // Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string
        
 /* const obtenerPrimeraOracion = (str) => str.split(".")[0];
        
console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')); // 'A mí no me preguntes, sólo soy una oración'
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')); // 'Tengo varias oraciones.'   */ 

        //EJERCICIO 12
        //Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

/* const ocultarContrasenia = (contrasenia) => {
        return contrasenia.toString().replaceAll(/[0-9a-zA-Z]/g, '*');
};
        
console.log(ocultarContrasenia(123456)); // '******'
console.log(ocultarContrasenia(111222333)) // '*********'
console.log(ocultarContrasenia('aaaa')) // '*********' */
       
        //EJERCICIO 13
        //Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todos sus caracteres separados por un espacio

/* const espaciarCaracteres = (str) => {
        return str.split('').join(" ")
};
                
console.log(espaciarCaracteres('javascript')); // 'j a v a s c r i p t'
console.log(espaciarCaracteres('ada lovelace')); // 'a d a l o v e l a c e' */



        //EJERCICIO 14
        
/* const removerVocales = str => str.replaceAll(/[aeiou]/ig, '');
 
console.log(removerVocales('javascript')); // 'jvscrpt' 
console.log(removerVocales('ada lovelace')); // 'd lvlc' */

        //EJERCICIO 15
        //Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo
/* 
        const obtenerExtension = (archivo) => {
        return archivo.split('.')[1];
};


console.log(obtenerExtension('imagen.png')); // 'png'
console.log(obtenerExtension('index.html')); // 'html'
console.log(obtenerExtension('notas.txt')); // 'txt' 
 */
        //EJERCICIO 16
        //Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar

/*  const esPuenteSeguro = (puente) => {
        const espacio = puente.split(' ');
        return espacio.length === 1;
};
        
        
console.log(esPuenteSeguro('### ##')); // false
console.log(esPuenteSeguro('##### ####')); // false
console.log(esPuenteSeguro('########')); // true  */

        //EJERCICIO 17
        //  Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')

/* const obtenerSubreddit = (url) => {
        return url.slice(25, url.length-1);
};
      
        
console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/')); // 'javascript' 
console.log(obtenerSubreddit('https://www.reddit.com/r/aww/')); // 'aww'  */

        //EJERCICIO 18
        //Crear una función convertirEnAcronimo que tome como argumento un string str y un string con todos los caracteres en mayúscula y separados por un punto

/* const  convertirEnAcronimo = (str) => {
        return str.toUpperCase().split('').join('.')+'.';
};
        
        
console.log(convertirEnAcronimo('afip')); // 'A.F.I.P.'
console.log(convertirEnAcronimo('nasa')); // 'N.A.S.A.' */

        //EJERCICIO 19
        //Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y devuelva true si la fecha es año nuevo o false si no lo es

/* const esAnioNuevo = (fecha) => {
        const dia = fecha.split('/')[0];
        const mes = fecha.split('/')[1];
        return `${dia}/${mes}` === '01/01';
};

console.log(esAnioNuevo('03/05/2015')); //false
console.log(esAnioNuevo('22/01/1987')); //false
console.log(esAnioNuevo('01/01/2020')); //true */

                //EJERCICIO 20
                // Crear una función aprueba que tome como argumento un número nota y devuelva true si aprueba el examente (6 o más) o false si no. El número tiene que redondearse primero antes de evaluarlo

/*  const aprueba = (nota) => {
        const aprueba = Math.round(nota);
        return aprueba >= 6;
};


console.log(aprueba(1)); // false
console.log(aprueba(5.4)); // false
console.log(aprueba(5.5)); // true
console.log(aprueba(5.6)); // true
console.log(aprueba(8)); // true */

                //EJERCICIO 21
                //Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

/* const obtenerDuracionEnSegundos = (duracion) => {
        const minutos = Number(str.split(':')[0]);
        const segundos = parseInt(str.split(':')[1]);
        return (minutos * 60) + segundos;                                
};
const obtenerDuracionEnSegundos = str => (Number(str.split(':')[0]) * 60) + parseInt(str.split(':')[1]);


console.log(obtenerDuracionEnSegundos('10:42')); // 642
obtenerDuracionEnSegundos('00:33') // 33
obtenerDuracionEnSegundos('01:05') // 65
obtenerDuracionEnSegundos('10:42') // 642 */
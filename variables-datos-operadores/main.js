// SALUDO
/* 
const name = prompt ("Ingrese su nombre");
const lastName = prompt ("Ingrese su apellido");

alert (`Hola ${name} ${lastName} Bienveid@ a ADA!`);
 */

//LISTA DE REPRODUCCION

/* const namePlayList = prompt ("Ingrese nombre de Playlist");
const song1 = prompt ("Ingrese una canción");
const song2 = prompt ("Ingrese su 2da canción");
const song3 = prompt ("Ingrese su ultima cancón");

alert (`Se ha creado la siguiente Playlist "${namePlayList}" con las siguientes canciones:
- ${song1}
- ${song2}
- ${song3}`); */

// MINUTOS A SEGUNDOS

/* const min = prompt ("Ingrese minutos");
const formula = (min * 60);

alert (`${min} minutos son ${formula} segundos`); */

// DIAS A SEGUNDOS

/* const day = prompt ("Ingrese cantidad de dias"); 
const seconds = (day * 24 * 60 * 60);

alert (`${day} dia/dias tiene ${seconds} segundos`); */

// INCREMENTO 

/* Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.). */

/* const numeroDePartida = prompt ("Ingrese un número");
const incremento = prompt ("Ingrese un incremento");

const incremento1 = numeroDePartida + incremento;
const incremento2 = incremento1 + incremento;

alert (`Si empezamos con ${numeroDePartida} e incrementando ${incremento}, el total es ${incremento1} y un segundo incremento es de ${incremento2}`)

console.log(`Si empezamos con ${numeroDePartida} e incrementando ${incremento}, el total es ${incremento1} y un segundo incremento es de ${incremento2}`) */

// MULTIPLO

/* Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO */

const number1 = prompt ("Ingrese un número");
const number2 = prompt ("Ingrese otro número");

const formula = number1 % number2

console.log(``)
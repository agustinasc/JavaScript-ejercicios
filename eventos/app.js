        //EJERCICIO 1 - playlist
        //Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

/* const lista = document.getElementById('lista');

const cancion1 = prompt('Elegí una canción');
const cancion2 = prompt('Elegí una segunda canción');
const cancion3 = prompt('Elegí una tercera canción');
const cancion4 = prompt('Elegí una cuarta canción');
const cancion5 = prompt('Elegí una quinta canción');

const canciones = `<li>${cancion1}</li>;
<li>${cancion2}</li>
<li>${cancion3}</li>
<li>${cancion4}</li>
<li>${cancion5}</li>
`;

lista.innerHTML = canciones;     */   
        
        //EJERCICIO 2 -contador
        //Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.
// 1.- En el HTML poner un numero que inicie en 0
// 2.- Generar 6 botones en el HTML 
// 3.- Darle valores a esos 6 botones -1 +1 -5 +5 -10 +10
// 4.- Hacer la Operacion que dice el boton
//      .- Como detectamos a que boton le damos click? CON ID
//      .- Como detectamos cual es el valor de ese boton? -programar el evento click - acceder al valor del boton
// 5.- Hacer la Operacion que dice el boton

/* const menos1 = document.getElementById('-1');
const mas1 = document.getElementById('+1');
const menos5 = document.getElementById('-5');
const mas5 = document.getElementById('+5');
const menos10 = document.getElementById('-10');
const mas10 = document.getElementById('+10');

const count = document.getElementById('count');

menos1.addEventListener('click', ()=>{
        //alert('Le estamos dando click al boton -1')
        count.innerText = parseInt(count.innerHTML) -1;
});
mas1.addEventListener('click', ()=>{
        count.innerText = parseInt(count.innerHTML) +1;
});
menos5.addEventListener('click', ()=>{
        count.innerText = parseInt(count.innerHTML) -5;
});
mas5.addEventListener('click', ()=>{
        count.innerText = parseInt(count.innerHTML) +5;
});
menos10.addEventListener('click', ()=>{
        count.innerText = parseInt(count.innerHTML) -10;
});
mas10.addEventListener('click', ()=>{
        count.innerText = parseInt(count.innerHTML) +10;
}); */

                //con ARRAYS

/* const buttons = document.getElementsByTagName('button');

Array.from(buttons).forEach(buton => {
        buton.addEventListener('click', () => {console.log(buton.id);
        count.innerHTML = parseInt(count.innerHTML) + parseInt(buton.id)
});
}); */

        //EJERCICIO 3 - adivinanza
        //Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

//1.- Crear la adivinanza
//2-. Crear los botones
//3.- LLevar los botones al javascrip
//3.1.- Seleccionar boton por boton 
//4.- Ver como sabemos cuando clickea cada boton
//4.2- cambiar de color los botones
//5.- Mostrar la respuesta incorrectas y correctas

/* const respuesta1 = document.getElementById('respuesta1');
const respuesta2 = document.getElementById('respuesta2');
const respuesta3 = document.getElementById('respuesta3');
const answer = document.getElementById('answer');

const respuestaCorrecta = 'Respuesta Correcta! :)';
const respuestaIncorrecta = 'Respuesta Incorrecta! :(';


respuesta1.addEventListener('click', ()=>{
        respuesta1.style.backgroundColor = 'green';
        answer.innerHTML = respuestaCorrecta;
        //console.log('funciona boton 1')
});
respuesta2.addEventListener('click', ()=>{
        respuesta2.style.backgroundColor = 'red';
        respuesta2.style.fontWeight = 'bold';
        respuesta3.style.backgroundColor = '#ff8f8f';
        respuesta1.style.backgroundColor = '#7aeb7a';
        answer.innerHTML = respuestaIncorrecta;
});
respuesta3.addEventListener('click', ()=>{
        respuesta3.style.backgroundColor = 'red';
        respuesta3.style.fontWeight = 'bold';
        respuesta2.style.backgroundColor = '#ff8f8f';
        respuesta1.style.backgroundColor = '#7aeb7a';
        answer.innerHTML = respuestaIncorrecta;
}); */

        //EJERCICIO 4 - paleta
        //Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.
/* 
const red = document.getElementById('red');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const pink = document.getElementById('pink');
const black = document.getElementById('black');
const orange = document.getElementById('orange');
const cuadro = document.getElementById('cuadro');

red.addEventListener('click', ()=>{
        red.style.color = 'red'
        cuadro.style.backgroundColor ='red'
})
green.addEventListener('click', ()=>{
        green.style.color = 'green'
        cuadro.style.backgroundColor ='green'
})
yellow.addEventListener('click', ()=>{
        yellow.style.color = 'yellow'
        cuadro.style.backgroundColor ='yellow'
})
pink.addEventListener('click', ()=>{
        pink.style.color = 'pink'
        cuadro.style.backgroundColor ='pink'
})
black.addEventListener('click', ()=>{
        black.style.color = 'black'
        cuadro.style.backgroundColor ='black'
})
orange.addEventListener('click', ()=>{
        orange.style.color = 'orange'
        cuadro.style.backgroundColor ='orange'
}) */

        //EJERCICIO 5 - email (sin leer)
        //Crear un documento html que tenga:
        
        //un título h1 que diga: Mis emails
        //un título h2 que diga: Bandeja de entrada
        //una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
        //Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

        //const lista = document.getElementById('lista');
        //const item = document.getElementById('item');
        //console.log(lista)
        
        /* lista.addEventListener('click', ()=>{
                lista.style.color = 'gray';
        }) */

//const lista = document.getElementsByTagName('li');
/* Array.from(lista).forEach(li => {
   li.addEventListener('click', ()=>{
       li.style.color = 'lightgrey';
    });
 });
 */
        //EJERCICIO 6 - progreso
        //Crear un documento html con
        
        //una barra de progreso (con un div dentro de otro)
        //un elemento de texto que indique el progreso (p. ej. 50%)
        //dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
        //cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
        //lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
        //el incremento/decremento es del 10% */

//1.- Generar dos div, uno dentro de otro
//2.- Darles estilo
//1.- Crear los botones
//1.- lograr que avande la barra
//1.- Generar dos div, uno dentro de otro

/* let count = 50;

const menos = document.getElementById('menos');
const mas = document.getElementById('mas');
const chica = document.getElementById('chica');
const titulo = document.getElementById('titulo');
chica.style.width = `${count}%`;

mas.addEventListener('click', ()=> {
        if(count<100){
        count = count +10;
        chica.style.width = `${count}%`;
        titulo.innerHTML = count;
        }
})
menos.addEventListener('click', ()=> {
        if(count>0){
        count = count -10;
        chica.style.width = `${count}%`;
        titulo.innerHTML = count;
        }
}) 

const restar = ()=> {
        if(count>0){
        count = count -10;
        chica.style.width = `${count}%`;
        titulo.innerHTML = count;
        }
};

menos.addEventListener('click', restar);

*/
        //EJERCICIO 7 - modo-oscuro
        //Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

        //modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
        //modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna.

/* const body = document.getElementById('body');
const boton = document.getElementById('boton');
const h1 = document.getElementById('h1');
const modoNoche = "Modo Noche"
const modoDia = "Modo Dia"
const botonDia = document.getElementById('boton-dia')

boton.addEventListener('click', ()=>{
        h1.innerHTML = modoNoche
        body.classList.toggle('dark');
        boton.classList.add('boton-noche')
        botonDia.classList.add('boton-dia-appear')
}) 

botonDia.addEventListener('click', ()=>{
        h1.innerHTML = modoDia;
        body.classList.toggle('light');
        botonDia.classList.add('boton-dia')
        boton.classList.add('boton-noche-appear')
})
  */

        //EJERCICIO 8 - scroll
        //Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

        //Scroll	Color de fondo
        //0px - 500px	        red
        //501px - 1000px	green
        //1001px - 1500px	blue
        //1501px - 2000px	orange

/* window.addEventListener('scroll', ()=>{
        const body = document.getElementById('body');
        console.log(window.scrollY);
        const coordenada = window.scrollY;
        if(coordenada <= 500){
                body.style.background = 'red'
        }else if(coordenada > 500 && coordenada <= 1000){
                body.style.background = 'green'
        }else if(coordenada>1000 && coordenada<=1500){
                body.style.background = 'blue'
        }else if(coordenada>1500 && coordenada<=2000){
                body.style.background = 'orange'
        }
})    
 */ 
//      OTRA SOLUCION //

// window.addEventListener('scroll', () =>{
//         const body = document.getElementById('body');
//         const tamanoPantalla = document.body.scrollHeight;
//         const tamanoScroll = 362;
//         const coordenada = window.scrollY + tamanoScroll;console.log(coordenada);
//         if(coordenada <= 500){
//                 body.style.backgroundColor = 'red';
//         } else if(coordenada > 500 && coordenada <= 1000){
//                 body.style.backgroundColor = 'green';
//         } else if(coordenada > 1000 && coordenada <= 1500){
//                 body.style.backgroundColor = 'blue';
//         } else {
//                 body.style.backgroundColor = 'orange';
//         }
// })

        //EJERCICIO 9 - imagenes
        //Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.
//1.-Buscar las imagenes y guardarlas
//2.- Colocar las img en html
//3.-Darles estilos
//4.-Seleccionar las img al hacer click
//5.-Reemplazar el cuadro grande por las img chicas cuando hago click.
//como lo reemplazo? reemplazando el src. Creando un evento que me traiga el src del elemento clickeado y agregar ese atributo a la imagen grande

/* const marDelPlata = document.getElementById('marDelPlata');
const bariloche = document.getElementById('bariloche');
const jujuy = document.getElementById('jujuy');
const buenosAires = document.getElementById('buenosAires');
const imagenGrande = document.getElementById('imagenGrande');

marDelPlata.addEventListener('click', (e) =>{
   const nuevoLink = e.target.src;
   imagenGrande.setAttribute('src', nuevoLink)
})

bariloche.addEventListener('click', (e) =>{
  const nuevoLink = e.target.src;
  imagenGrande.setAttribute('src', nuevoLink)
})

jujuy.addEventListener('click', (e) =>{
  const nuevoLink = e.target.src;
  imagenGrande.setAttribute('src', nuevoLink)
})

buenosAires.addEventListener('click', (e) =>{
  const nuevoLink = e.target.src;
  imagenGrande.setAttribute('src', nuevoLink)
})
 */
////////////////  otra solucion con FOR  /////

//const imagenes = document.getElementsByTagName('img');
          //5    // 5 < 5
/* for(let i = 0; i < imagenes.length; i++){
  imagenes[i].addEventListener('click', e =>{
    const nuevoLink = e.target.src;
    img5.setAttribute('src', nuevoLink)
  })
} */


        //EJERCICIO 10 - imagenes-2 -mouseover

/* const marDelPlata = document.getElementById('marDelPlata');
const bariloche = document.getElementById('bariloche');
const jujuy = document.getElementById('jujuy');
const buenosAires = document.getElementById('buenosAires');
const imagenGrande = document.getElementById('imagenGrande');
        
marDelPlata.addEventListener('mouseover', (e) =>{
        const nuevoLink = e.target.src;
        imagenGrande.setAttribute('src', nuevoLink)
        })
        
bariloche.addEventListener('mouseover', (e) =>{
        const nuevoLink = e.target.src;
        imagenGrande.setAttribute('src', nuevoLink)
        })
        
jujuy.addEventListener('mouseover', (e) =>{
        const nuevoLink = e.target.src;
        imagenGrande.setAttribute('src', nuevoLink)
        })
        
buenosAires.addEventListener('mouseover', (e) =>{
        const nuevoLink = e.target.src;
        imagenGrande.setAttribute('src', nuevoLink)
        })
 */
        //EJERCICIO 11 - peliculas
        // Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

// const comedia = document.getElementById('comedia');
// const accion = document.getElementById('accion');
// const terror = document.getElementById('terror');


// const botonComedia = document.getElementById('btn-comedia');
// const botonAccion = document.getElementById('btn-accion');
// const botonTerror = document.getElementById('btn-terror');
// const todas = document.getElementById('btn-todas');

// botonComedia.addEventListener('click', ()=>{
//         //accion.classList.add('desaparecer')
//         accion.style.display = 'none';
//         terror.style.display = 'none';
//         comedia.style.display = 'flex';
// })
// botonAccion.addEventListener('click', ()=>{    
//         comedia.style.display = 'none';
//         terror.style.display = 'none';
//         accion.style.display = 'flex';
// })
// botonTerror.addEventListener('click', ()=>{
//         comedia.style.display = 'none';
//         accion.style.display = 'none';
//         terror.style.display = 'flex';
// })
// todas.addEventListener('click', ()=>{
//         comedia.style.display = 'flex';
//         accion.style.display = 'flex';
//         terror.style.display = 'flex';
// })


        //EJERCICIO 12 - pin
        //En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
        //Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".

/* const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const reiniciar = document.getElementById('reiniciar');
const borrar = document.getElementById('borrar');
const texto = document.getElementById('texto');

uno.addEventListener('click', (e)=>{
        texto.innerHTML = 1;
        console.log(e.target)
})
dos.addEventListener('click', ()=>{
        texto.innerHTML = 2;
})
tres.addEventListener('click', ()=>{
        texto.innerHTML = 3;
})
cuatro.addEventListener('click', ()=>{
        texto.innerHTML = 4;
})
cinco.addEventListener('click', ()=>{
        texto.innerHTML = 5;
})
seis.addEventListener('click', ()=>{
        texto.innerHTML = 6;
})
siete.addEventListener('click', ()=>{
        texto.innerHTML = 7;
})
ocho.addEventListener('click', ()=>{
        texto.innerHTML = 8;
})
nueve.addEventListener('click', ()=>{
        texto.innerHTML = 9;
})

 */
        //EJERCICIO 13 - favoritos
        // Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

        //EJERCICIO 14 -color-aleatorio
        // Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).

/* const body = document.getElementById('body');

body.addEventListener('keypress', (e)=>{
        if(e.keyCode == 32 || e.code == "Space") {
                console.log('Han pulsado la tecla de espacio');
                const red = Math.round(Math.random() * 255);
                const green = Math.round(Math.random() * 255);
                const blue = Math.round(Math.random() * 255);
                const color = `rgb(${red}, ${green}, ${blue})`;
                console.log(color);
                body.style.background = color;     
        }
});
 */
            //EJERCICIO 15 -
        //     Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

        //     si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
        //     si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
        //     si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
        //     El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

/*  const mensaje = document.getElementById('mensaje');
const body = document.getElementById('body');
const reset = document.getElementById('reset')

const numeroGenerado =  Math.random()* 9;
let numeroRedondeado = Math.ceil(numeroGenerado)

console.log(numeroGenerado);
console.log(numeroRedondeado);

const comparacion =  body.addEventListener('keypress', (event)=>{
        let numeroDigitado = event.keyCode - 48;
        console.log(numeroDigitado);
        if(numeroDigitado > numeroRedondeado){
                mensaje.innerHTML = `El numero es mayor!.  Ingresaste el número ${numeroDigitado}`;
        }else if(numeroDigitado == numeroRedondeado){
                mensaje.innerHTML = `El numero es igual. Ingresaste el número ${numeroDigitado}`;
        }else if(numeroDigitado < numeroRedondeado){
                mensaje.innerHTML = `El numero es menor. Ingresaste el número ${numeroDigitado}`;
        }
}) 

reset.addEventListener('click', ()=>{
        console.log(numeroRedondeado);
        numeroRedondeado = Math.ceil(Math.random()* 9);
        mensaje.innerHTML = '';
}); */
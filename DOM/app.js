    //EJERCICIO 1 - saludo
    //Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

/* const nombre = prompt("Ingresa tu nombre!");
const demo = document.getElementById("demo");

const saludo = (nombre) => demo.innerHTML = `<h1 class="nombre">Hola ${nombre}</h1>`;

saludo(nombre); */

         //EJERCICIO 2 - color
        //Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

/* const color = prompt("Ingrese un color en hexadecimal")

const changeColor = color => document.body.style.backgroundColor = `#${color}`;
changeColor(color); */


        //EJERCICIO 3 - rgb
        //Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

/* const red = prompt("Ingrese un valor para red (De 0 al 255)")
const green = prompt("Ingrese un valor para green (De 0 al 255)")
const blue = prompt("Ingrese un valor para blue (De 0 al 255)")

const changeColor = (red, green, blue) => document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

changeColor(red, green, blue); */


        //EJERCICIO 4 - imagen
        //Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:      
        //Opción elegida	Ancho de imagen
        //chica	200px
        //mediana	500px
        //grande	800px

/* const imagen = document.getElementById("imagen");

const tamanioImagen = prompt('Elegí un tamaño de imagen entre: grande, mediano o chica');

const cambioTamanioImagen = (tamanioImagen) => {
    if (tamanioImagen === "chica"){
        //imagen.classList.add("chica");
        imagen.setAttribute("class", "chica");
    } else if (tamanioImagen==="mediana"){
       imagen.classList.add("mediana")
    } else if (tamanioImagen==="grande"){
        imagen.classList.add("grande")
    } else {
    }
};
cambioTamanioImagen(tamanioImagen);   */

    //OTRA SOLUCION!

/* let tamaño = prompt('Elegí un tamaño de imagen (Grande, Mediana o Chica').toLowerCase();

const demo = document.getElementById('demo');

const changeWith = tamaño => {
    if (tamaño==='grande' || tamaño==='mediana' || tamaño==='chica'){
        if (tamaño==='grande'){
            tamaño = 800
        }else if(tamaño==='mediana'){
            tamaño = 500
        }else if(tamaño==='chica'){
            tamaño = 200
        }
        demo.innerHTML=`<img src="./img/perro-ninos.jpg" alt="" width=${tamaño}>`
    }else{
        demo.innerHTML = 'Ingresa un tamaño válido'
    }
};
changeWith(tamaño); */

        //EJERCICIO 5 - temperatura
        //Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas: 
        //Temperatura	Color
        //Menor a 0°	Azul
        //Mayor o igual a 0° y menor a 15°	Celeste
        //Mayor o igual a 15° y menor a 25°	Verde
        //Mayor o igual a 25° y menor a 30°	Amarillo
        //Mayor o igual a 30° y menor a 35°	Naranja
        //Mayor a 35°	Rojo

/* const temperaturaIngresada = prompt('Ingrese una temperatura');

const titulo = document.getElementById('titulo');

const temperatura = (temperaturaIngresada) => {
    if(temperaturaIngresada<0){
        color='blue';
    }else if(temperaturaIngresada>=0 && temperaturaIngresada<15){
        color='lightblue'
    }else if(temperaturaIngresada>=15 && temperaturaIngresada<25){
        color='green'
    }else if(temperaturaIngresada>=25 && temperaturaIngresada<30){
        color='yellow'
    }else if(temperaturaIngresada>=30 && temperaturaIngresada<35){
        color='orange'
    }else if(temperaturaIngresada>=35){
        color='red'
    }else{
    }
    titulo.style.color = color
};
temperatura(temperaturaIngresada) */



        //EJERCICIO 6 - progreso
        //Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

/* const porcentajeIngresado = parseInt(prompt('Ingresa tu porcentaje'));

const respuesta = (porcentajeIngresado )=> {
    return document.getElementById('progreso').style.width = `${porcentajeIngresado}%`;
};
respuesta(porcentajeIngresado); */

//progreso.innerHTML = width * 1 + '%'

        //EJERCICIO 7 - reacciones
        // En un documento html hacer un post de una red social que contenga:
        //un h3 con la usuaria
        //un p con un lorem ipsum
        //3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
        //Dar estilos para que la tipografía sea distinta a la default
        //los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius.
        //Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes
 
/* const gusta = prompt('Cuantos Me Gusta le das?');
const encanta = prompt('Cuantos Me Encanta le das?');
const asombra = prompt('Cuantos Me Asombra le das?');

const meGusta = document.getElementById("mg").innerHTML = `${gusta} Me gusta ❤`
const meEncanta = document.getElementById("me").innerHTML = `${encanta} Me encanta 😍`
const meAsombra = document.getElementById("ma").innerHTML = `${asombra} Me asombra 😲` */
   

  
        //EJERCICIO 8 - card
/* 
const tituloElegido = prompt('Que titulo le quieres poner?');
const urlImagen = prompt('Coloca el URL de una imagen');
const urlArticulo = prompt('Coloca el URL de un articulo');

const titulo = document.getElementById('titulo').innerHTML=`<h1>${tituloElegido}</h1>`;
const imagen = document.getElementById('imagen').innerHTML= `<img src="${urlImagen}" alt="Imagen"></img>`;
const link = document.getElementById('link').innerHTML=`<a href="${urlArticulo}">Leer más</a>` */


             
        //EJERCICIO 9 - animales
        //En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.
/*   
 const perro = document.getElementById("perro");        
const mariposa = document.getElementById("mariposa");        
const gato = document.getElementById("gato");        
const caballo = document.getElementById("caballo");        

const animal = prompt("Elegi un animal entre gato, perro, mariposa o caballo");

const animalElegido = () => {
        if(animal === "perro"){
            mariposa.style.display='none';
            gato.style.display='none';
            caballo.style.display='none';
        } else if (animal==="gato"){
            perro.style.display='none';
            mariposa.style.display='none';
            caballo.style.display='none';
        } else if (animal==="mariposa"){
            perro.style.display='none';
            gato.style.display='none';
            caballo.style.display='none';
        } else if (animal==="caballo"){
            mariposa.style.display='none';
            gato.style.display='none';
            perro.style.display='none';
        }else {
            alert('Elegir un animal de la lista')
        }
};
animalElegido("animal"); */

        //EJERCICIO 10 - paises
        //En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.


/* const continenteElegido = prompt('elegi un continente');

const america = document.getElementById('america');
const europa = document.getElementById('europa');
const oceania = document.getElementById('oceania');
const asia = document.getElementById('asia');
const africa = document.getElementById('africa');

const continente = (continenteElegido) => {
    if(continenteElegido==='america'){
      america.style.color = 'red';
      america.style.fontWeight = 'bold';
    } else if (continenteElegido==='europa'){
        europa.style.color = 'red';
        europa.style.fontWeight = 'bold';
    } else if (continenteElegido==='oceania'){
        oceania.style.color = 'red';
        oceania.style.fontWeight = 'bold';
    } else if (continenteElegido==='asia'){
        asia.style.color = 'red';
        asia.style.fontWeight = 'bold';
    } else if (continenteElegido==='africa'){
        africa.style.color = 'red';
        africa.style.fontWeight = 'bold';
    }
};
continente(continenteElegido); */

        //EJERCICIO 11 - comidas
        //En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.


          //EJERCICIO 12 -busqueda
En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.
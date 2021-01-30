//Ejercicios
//Para estos ejercicios, todos los inputs, textarea y select deben tener su respectiva label, el atributo name completo y un placeholder que sirva de ejemplo para el formato de lo que se tiene que agregar. Darles los siguientes estilos mínimos:

//Cambiar la tipografía y el color de fuente original.
//Sacar los estilos por defecto de elementos de formulario y darles padding, un tamaño adecuado y un borde levemente redondeado.
//Centrar todo con respecto a la pantalla.


        // EJERCICIO 1 - Kilómetros a Millas
        //Crear una página que:

        //Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
        //Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que ki´lómetro es 0.62 millas, y una milla es 1.61 kilómetros.

// const km = document.getElementById('km');
// const ms = document.getElementById('millas');

//  km.addEventListener('keyup', (event) => {
//     const kilometro = (event.target.value) * 0.62;
//     millas.value = kilometro // => le modifico el calor a value y le pongo el valor de kilo ahora
//     console.log(kilometro);
// });
// ms.addEventListener('keyup', (event) => {
//     const millas = (event.target.value) *1.16;
//     km.value = millas;
//     console.log(millas)
// }); 


        // EJERCICIO 2 - RGB
        // Crear una página que:
        
        // Tenga tres inputs numéricos, con valor mínimo 0 y valor máximo 255, uno para el valor R (red), otro para el valor G (green) y otro para el valor B (blue).
        // Todos los inputs comiencen con el valor 255.
        // Cuando se modifica algún input, se cambie el color de fondo del body con el color que se forma a partir de dichos valores.

/* const body = document.getElementById('body');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

red.addEventListener('keyup', (e)=>{
    let colorRed = e.target.value;
    console.log(colorRed);
    body.style.background = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
})
green.addEventListener('keyup', (e)=>{
    let colorGreen = e.target.value;
    console.log(colorGreen);
    body.style.background = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
})
blue.addEventListener('keyup', (e)=>{
    let colorBlue = e.target.value;
    console.log(colorBlue);
    body.style.background = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}) */

        // EJERCICIO 3 - Todo
// Crear una página que:

// Tenga un input, un botón que diga Crear todo y una lista.
// Al presionar el botón, si el input no está vacío, se agregue un ítem a la lista con el contenido del input y se borre el contenido del input.

// let texto = document.getElementById('texto');
// const lista = document.getElementById('lista');
// const boton = document.getElementById('boton');

//////////// 1.- CREANDO LA LISTA DENTRO DEL UL ///
// texto.addEventListener('keyup', (e)=>{
//     let nuevosItems = e.target.value;
//     console.log(nuevosItems);
//     let item = document.createElement('li');
//     item.textContent = nuevosItems;
//     lista.appendChild(item);
//     //item.textContent = cafe;
// })
////// 2.- PONIENDO EL CONTENIDO DEL INPUT COMO CONTENIDO DE LA LI//// 
// boton.addEventListener('click', ()=>{
//     let item = document.createElement('li');
//     item.textContent = texto.value;
//     lista.appendChild(item);
// })
////// 3.- LIMPIANDO EL INPUT CUANDO SE AGREGA LA LISTA
// boton.addEventListener('click', ()=>{
//     if(texto != " "){
//         let item = document.createElement('li');
//         item.textContent = texto.value;
//         lista.appendChild(item);
//         texto.value = ' ';
//         }else{
//             alert('no funciona');
//         } 
// })

        // EJERCICIO 4 - Agregar imágenes
// Crear una página que:
        
// Tenga un input para la url de la imagen, un botón que diga Agregar imagen y un contenedor flexible donde mostrar imágenes como en una grilla.
// Al presionar el botón, si el input no está vacío, se agregue una imagen al contenedor cuyo src es el contenido del input y se borre el contenido del input.
// Al hacer click en una imagen, esta se elimine.

/* const direccionWeb = document.getElementById('direccion-web');
const boton = document.getElementById('boton');
const imagenes = document.getElementById('imagenes');


boton.addEventListener('click', ()=>{
        if(imagenes !=" "){
                let imagen = document.createElement('img')
                imagenes.appendChild(imagen);
                let src = direccionWeb.value;
                imagen.setAttribute('src', src);
                imagen.setAttribute('width', 400);
                direccionWeb.value = " "
                console.log(imagen);
        }else{
                alert('Elegi otra imagen')
        }
})
imagenes.addEventListener('click', (e)=>{
        if(imagenes !=" "){
                imagenes.style.display = 'none';

                console.log(e.target);
        }else if (imagenes = " "){
                imagenes.style.display = 'flex'
        }
}) */

// EJERCICIO 5 - Comentario
    // Crear una página que:
    
    // Tenga un textarea, un texto pequeño debajo de este y un botón que diga Enviar.
    // El texto comience diciendo 0/240 caracteres.
    // Cuando se escribe algo en el textarea, se actualice el texto para reflejar la cantidad de caracteres restantes.
    // Al presionar el botón, si hay 240 caracteres o menos, se borre el contenido del input y se actualice el texto para que diga Comentario enviado.
// El color del borde del textarea cambie de la siguiente forma:
// normal si está vacío
        // verde si tiene texto y 240 caracteres o menos
        // rojo si tiene más de 240 caracters
        
        const areaDeTexto = document.getElementById('area-de-texto');
        let caracteres = document.getElementById('caracteres');

        let caracteresUsados = areaDeTexto.value.length;
        console.log(caracteresUsados);
let numeroDeCaracteres = 240 - caracteresUsados;
console.log(numeroDeCaracteres);
caracteres.innerHTML = '0/240 caracteres.'

areaDeTexto.addEventListener('keydown', ()=>{
        let caracteresUsados = areaDeTexto.value.length;      
        let numeroDeCaracteres = 240 - caracteresUsados;
        let mensajeCaracteres = `${numeroDeCaracteres} caracteres disponibles`;
        caracteres.innerHTML = mensajeCaracteres;
        
        if(numeroDeCaracteres <= 240 && numeroDeCaracteres > 0){
                areaDeTexto.style.borderColor = 'green';
        }else {
                areaDeTexto.style.borderColor = 'red'
        }
})
boton.addEventListener('click', ()=>{
        if(numeroDeCaracteres <=240){
                areaDeTexto.value = ' ';
                caracteres.innerHTML = "Comentario enviado"
        }
})

        // EJERCICIO 6 - Conversor avanzado

        // EJERCICIO 7 - Card dinámica
// Crear una página que:

// Tenga un input para la url de la imagen, un input para el título, un textarea para la descripción, un input para la url externo y un checkbok que diga Link externo
// Tenga una card simple y estilizada con: imagen, título, descripción, y un link que diga Ver más.
// A medida que se modifiquen los campos, se modifique respectivamente los distintos elementos de la card.
// Si el checkbox no está seleccionado, el link Ver más no se muestre y el input de la url externa se deshabilite.
// Si el checkbox está seleccionado, el link Ver más se muestre y el input de la url externa se habilite.

        // EJERCICIO 8 - Selector de imágenes
// Crear una página que:

// Tenga un select con categorías de imágenes (por ejemplo, animales, comida, paisajes, etc) y un contenedor con al menos 9 imágenes correspondientes a las distintas categorías, mostradas como grilla.
// El select tenga la opción Todas y comience con dicha opción seleccionada.
// Al seleccionar una nueva opción en el select se oculten aquellas imágenes que no pertecen a la categoría seleccionada y se muestren las que sí.
// Al seleccionar Todas se muestren todas las imágenes.
// TIP: Agregar a cada imagen un atributo data-categoria cuyo valor se corresponda con el atributo value del option de la categoría correspondiente.

        // EJERCICIO 9 - Buscador
// Crear una página que:

// Tenga un input y un contenedor con al menos 9 imágenes mostradas como grilla y un texto para mostrar la cantidad de resultados encontrados.
// Al escribir algo en el input aquellas imágenes cuyo alt contiene parte o todo el texto ingresado se muestran, mientras las demás se ocultan.
// La búsqueda ignora mayúsculas y minúsculas.
// Al vaciar el input, se muestran todas las imágenes.
// Al realizar la búsqueda se actualiza el texto con la cantidad de imágenes que se están mostrando, de modo que diga, por ejemplo, 3 resultados encontrados.

// Por ejemplo, si una imagen tiene un alt que dice Oso koala comiendo eucaliptus y se busca ko dicha imagen debe mostrarse.

    // EJERCICIO 9 - Filtro de imágenes
// Crear una página que:

// Tenga una grilla de imágenes y al menos 4 checkbox con categorías (por ejemplo, animales, comida, paisajes, etc).
// Al seleccionar un checkbox se actualice la grilla, mostrando aquellas imágenes que pertenezcan a las categorías seleecionadas.
// Al deseleccionar todos los checkbox se muestren todas las imágenes
// TIP: Agregar a cada imagen un atributo data-categoria cuyo valor se corresponda con el atributo value del checkbox de la categoría correspondiente.
   
        // EJERCICIO 10 - Feedback (Validación)

        // EJERCICIO 11 - Tarjeta de crédito (Validación)

        // EJERCICIO 12 - Registro (Validación) 

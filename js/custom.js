
// Funcion para validar si un string es un palindromo
// Obtenida de https://www.freecodecamp.org/espanol/news/dos-formas-de-revisar-palindromos-en-javascript/
function palindromo(str) {
    var re = /[\W_]/g; // expresion regular para remover caracteres que no sean alfanumericos
    var lowRegStr = str.toLowerCase().replace(re, ''); // removemos los caracteres no deseados y convertimos a minusculas
    var reverseStr = lowRegStr.split('').reverse().join(''); // devuelve la palabra o frase al reves
    return reverseStr === lowRegStr; // validamos si la palabra o frase original es igual a su reves y retornamos true de ser asi o false de no serlo
}

// Funcion para permitir solo caracteres numericos en un input
// Obtenida de https://www.coderbox.net/blog/permitir-solo-numeros-en-un-campo-de-texto-con-javascript/
function soloNumeros(evt) {
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) { // backspace.
        return true;
    } else if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}

// Ejercicios JavaScript

// Acciones al realizar si se envia el formulario de comprobar palindromo - Ejercicio 1
document.getElementById("comprobarPalindromo").addEventListener("submit", event => {
    let str = document.getElementById("textoComprobar").value; // obtenemos el texto a comprobar del input
    let resultado = document.getElementById("resultadoPalindromo"); // obtenemos el div donde se imprimira el texto respuesta

    resultado.textContent = ""; // Limpio el div de respuesta
    // remuevo las clases css de color del texto
    resultado.classList.remove("text-success");
    resultado.classList.remove("text-danger");

    // Si el texto esta vacio muestro el texto y asigno color mediante una clase, tambien se detiene la ejecucion del codigo
    if (str == "") {
        resultado.textContent = "Debe ingresar una palabra para comprobar.";
        resultado.classList.add("text-danger");
        event.preventDefault();
        return false;
    }

    // Verifico si el texto es palindromo o no, muestro el mensaje correspondiente y asigno el color mediante una clase
    if (palindromo(str)) {
        resultado.textContent = "El texto ingresado es un palindromo.";
        resultado.classList.add("text-success");
    } else {
        resultado.textContent = "El texto ingresado no es un palindromo.";
        resultado.classList.add("text-danger");
    }

    // Evito que se envie el formulario por su metodo comun (POST,GET,etc...)
    event.preventDefault();
}); 

// Acciones a realizar si se envia el formulario de comprobar numero mayor - Ejercicio 2
document.getElementById("comprobarNumeroMayor").addEventListener("submit", event => {
    let Numero1 = document.getElementById("Numero1").value; // obtenemos el primer numero
    let Numero2 = document.getElementById("Numero2").value; // obtenemos el segundo numero
    let resultado = document.getElementById("resultadoNumeroMayor"); // obtenemos el div donde se imprimira el texto respuesta

    // Limpio el div de respuesta
    resultado.textContent = "";
    // remuevo las clases css de color del texto
    resultado.classList.remove("text-success");
    resultado.classList.remove("text-danger");

    // Verifico si alguno de los numeros esta vacio, de ser asi muestro el mensaje correspondiente y asigno el color mediante una clase
    if (Numero1 == "" || Numero2 == "") {
        resultado.textContent = "Debe ingresar dos numeros para comprobar.";
        resultado.classList.add("text-danger");
        event.preventDefault();
        return false;
    }

    // verifico si el primer numero es mayor que el otro o si no lo es y asigno el texto correspondiente al resultado
    if (Numero1 > Numero2) {
        resultado.textContent = Numero1 + " es mayor que " + Numero2 + ".";
    } else {
        resultado.textContent = Numero2 + " es mayor que " + Numero1 + ".";
    }

    resultado.classList.add("text-success"); // asigno color al texto resultado
    // Evito que se envie el formulario por su metodo comun (POST,GET,etc...)
    event.preventDefault();
});

// Acciones a realizar si se envia el formulario de mostrar vocales - Ejercicio 3
document.getElementById("mostrarVocales").addEventListener("submit", event => {
    let str = document.getElementById("textoMostrarVocales").value; // obtenemos el texto a comprobar del input
    let resultado = document.getElementById("resultadoMostrarVocales"); // obtenemos el div donde se imprimira el texto respuesta

    // Limpio el div de respuesta
    resultado.textContent = "";
    // remuevo las clases css de color del texto
    resultado.classList.remove("text-success");
    resultado.classList.remove("text-danger");

    // Si el texto esta vacio muestro el texto y asigno color mediante una clase, tambien se detiene la ejecucion del codigo
    if (str == "") {
        resultado.textContent = "Debe ingresar una palabra o frase para comprobar.";
        resultado.classList.add("text-danger");
        event.preventDefault();
        return false;
    }

    // obtengo un array con las vocales mediante una expresion regular
    let vocales = str.match(/[aeiou]/gi);

    // verifico si la cantidad de vocales es mayor a cero o si no y muestro el mensajes correspondiente, tambien se asigna color dependiendo del resultado
    if (vocales.length > 0) {
        resultado.textContent = "Las vocales de " + str + " son " + vocales + ".";
        resultado.classList.add("text-success");
    } else {
        resultado.textContent = "El texto no posee vocales.";
        resultado.classList.add("text-danger");
    }

    // Evito que se envie el formulario por su metodo comun (POST,GET,etc...)
    event.preventDefault();
});

// Acciones a realizar si se envia el formulario de contar vocales - Ejercicio 4
document.getElementById("contarVocales").addEventListener("submit", event => {
    let str = document.getElementById("textoContarVocales").value; // obtenemos el texto a comprobar del input
    let resultado = document.getElementById("resultadoContarVocales"); // obtenemos el div donde se imprimira el texto respuesta

    // Limpio el div de respuesta
    resultado.textContent = "";
    // remuevo las clases css de color del texto
    resultado.classList.remove("text-success");
    resultado.classList.remove("text-danger");

    // Si el texto esta vacio muestro el texto y asigno color mediante una clase, tambien se detiene la ejecucion del codigo
    if (str == "") {
        resultado.textContent = "Debe ingresar una palabra o frase para comprobar.";
        resultado.classList.add("text-danger");
        event.preventDefault();
        return false;
    }

    let vocales = str.match(/[aeiou]/gi).length; // obtengo la cantidad de vocales

    // Si la cantidad de vocales es mayor a cero procedo con el proceso y muestro el mensaje, de lo contrario solo muestro el mensaje
    if (vocales > 0) {
        // con cada vocal se verifica si esta incluida en el texto
        // de estarlo realizo el conteo mediante expresion regular si no asigno cero a la variable
        let a = str.includes("a") ? str.match(/[a]/gi).length : 0;
        let e = str.includes("e") ? str.match(/[e]/gi).length : 0;
        let i = str.includes("i") ? str.match(/[i]/gi).length : 0;
        let o = str.includes("o") ? str.match(/[o]/gi).length : 0;
        let u = str.includes("u") ? str.match(/[u]/gi).length : 0;

        let textoVocales = ""; // variable para ir almacenando el texto resultado, incializada en vacio
        // verifico si la cantidad de cada vocal es mayor a cero, de serlo agrego el texto a la variable
        if (a > 0) {
            textoVocales += "[vocal a = " + a + "]";
        }
        if (e > 0) {
            textoVocales += "[vocal e = " + e + "]";
        }
        if (i > 0) {
            textoVocales += "[vocal i = " + i + "]";
        }
        if (o > 0) {
            textoVocales += "[vocal o = " + o + "]";
        }
        if (u > 0) {
            textoVocales += "[vocal u = " + u + "]";
        }
        // muestro el mensaje con las cantidad de las vocales encontradas y asigno color al texto
        resultado.textContent = "Las vocales de " + str + " son: " + textoVocales + ".";
        resultado.classList.add("text-success");
    } else {
        resultado.textContent = "El texto no posee vocales.";
        resultado.classList.add("text-danger");
    }

    // Evito que se envie el formulario por su metodo comun (POST,GET,etc...)
    event.preventDefault();
});

// Ejercicios AJAX

// Funcion para reemplazar caracteres especiales por etiquetas legibles por html
// Basado en la fuente https://www.iteramos.com/pregunta/18606/Convertir-caracteres-especiales-a-HTML-en-Javascript
function reemplazarCaracteresEspeciales(mystring) {
    return mystring.replace(/%0A/g, "<br/>").replace(/%3C/g, "&lt;").replace(/%3E/g, "&gt;");
}

// Función de respuesta
function mostrarContenido() {
    // almaceno los estados que puedo recibir de la solicitud AJAX en un array
    let estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
    
    // asigno a variables los contenedores donde se mostrara la informacion
    let estadoURL = document.getElementById('estadoURL');
    let contenidoURL = document.getElementById('contenidoURL');
    let cabecerasURL = document.getElementById('cabecerasURL');
    let codigoEstadoURL = document.getElementById('codigoEstadoURL');

    // Agrego cada estado recibido de la solicitud al contenedor
    estadoURL.innerHTML += estadosPosibles[httpRequest.readyState] + "<br/>";

    // Verifico si la solicitud AJAX fue exitosa y lleno los contenedores con la informacion correspondiente
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        contenidoURL.textContent = reemplazarCaracteresEspeciales(httpRequest.responseText);
        cabecerasURL.textContent = reemplazarCaracteresEspeciales(httpRequest.getAllResponseHeaders());
        codigoEstadoURL.textContent = httpRequest.status + " - " + httpRequest.statusText;
    } else {
        contenidoURL.textContent = "No se pudo obtener el contenido de la url: " + document.getElementById('urlPagina').value;
        cabecerasURL.textContent = "Sin datos";
        codigoEstadoURL.textContent = "Sin datos";
    }
}

// Acciones a realizar cuando se carga la pagina
window.onload = function () {
    // Asigno la url actual al input correspondiente
    document.getElementById('urlPagina').value = location.href;
}

// Acciones a realizar si se envia una URL en el formulario
document.getElementById('verificarURL').addEventListener("submit", event => {

    // Verifico si el campo de texto de la URL esta vacio, de ser asi emito una alerta
    if (document.getElementById('urlPagina').value == "") {
        alert("debe ingresar una URL en el campo de texto");
        // Evito que se envie el formulario por su metodo comun (POST,GET,etc...)
        event.preventDefault();
        // Detengo la ejecucion del codigo
        return false;
    }

    // Abro un modal bootstrap donde se mostraran los resultados
    let myModal = new bootstrap.Modal(document.getElementById('modalPeticionAJAX'));
    myModal.show();
    
    // Limpio los campos donde se mostraran los resultados
    document.getElementById('estadoURL').innerHTML = "";
    document.getElementById('codigoEstadoURL').textContent = "";
    document.getElementById('cabecerasURL').textContent = "";
    document.getElementById('contenidoURL').textContent = "";

    // Asigno la peticion AJAX a una variable
    httpRequest = new XMLHttpRequest();

    // obtenemos la respuesta de la peticion mediante una funcion en el momento el estado de la peticion cambia
    httpRequest.onreadystatechange = mostrarContenido;

    // realizamos la peticion AJAX con el valor ingresado en el cuadro de texto
    httpRequest.open('GET', document.getElementById('urlPagina').value, true);
    httpRequest.send(null);

    // Evito que se envie el formulario por su metodo comun (POST,GET,etc...)
    event.preventDefault();
});
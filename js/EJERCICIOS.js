// EJERCICIOS CLASE 09

Operaciones con Variables y Tipos de Datos

Pasos a seguir:

Desarrollá un programa que reciba dos números como entrada, realice operaciones aritméticas con ellos y muestre los resultados en la consola. Verificá si la suma de ambos números es mayor o menor que un valor dado.

Qué tenés que hacer:

Pedir al usuario dos números usando prompt().

Convertir esos datos a números con parseFloat().

Mostrar en la consola los resultados de suma, resta, multiplicación, división y módulo.

Verificar con isNaN() si los datos ingresados son válidos para evitar errores.

Tips para tu código:

Usá console.log() para mostrar mensajes claros con el resultado de cada operación.

Probá ingresar valores no numéricos y usá isNaN() para detectar esos casos.

NaN significa Not a Number (no es un número).

En JavaScript, aparece cuando intentás realizar una operación matemática con un valor que no es numérico.

El método isNaN() sirve justamente para verificar si un valor no es un número válido, y así evitar errores en cálculos.

Resolución Ejercicio Práctico #1

Obligatorio

let num1 = prompt("Ingresá el primer número:");

let num2 = prompt("Ingresá el segundo número:");

num1 = parseFloat(num1);

num2 = parseFloat(num2);

console.log("Suma: " + (num1 + num2));

console.log("Resta: " + (num1 - num2));

console.log("Multiplicación: " + (num1 * num2));

console.log("División: " + (num1 / num2));

console.log("Módulo: " + (num1 % num2));

Ejercicio Práctico #2

Obligatorio

Concatenación y Conversión de Tipos de Datos

Pasos a seguir:

Desarrollá un programa que reciba nombre y edad de una persona, los combine en una frase y convierta la edad de string a número para verificar si es mayor de edad.

Qué tenés que hacer:

Pedir nombre y edad con prompt().

Validar que la edad sea un número válido con isNaN().

Convertir la edad de texto a número con parseInt() o Number().

Concatenar los datos para formar un mensaje descriptivo y mostrarlo en consola.

Comparar la edad para decir si la persona es mayor de edad o no.

Tips para tu código:

Asegurate que los mensajes en consola sean claros y fáciles de entender.

Probá distintos valores para asegurarte de que tu programa no falla con entradas inesperadas.

La función isNaN(valor) verifica si el valor NO es un número.

Devuelve true → si el valor no se puede interpretar como número.

Devuelve false → si el valor sí es un número válido.

let edad = parseInt(prompt("Ingresá tu edad:"));

// Verificamos si la edad es un número válido

console.log(isNaN(edad)); // true si NO es número, false si es número

// EJERCICIOS CLASE 10

Validación de campos de un formulario (simulado con variables)

Pasos a seguir:

Lo que harás:

Declarar tres variables: nombre, correo y mensaje, asignándoles valores de prueba.

Crear una función que valide que ninguna de estas variables esté vacía.

Si todos los campos tienen texto, mostrar por consola: "Formulario completo. Listo para enviar."

Si falta completar alguno, mostrar:"Faltan completar campos obligatorios."

Tips claves:

 Usá el operador && para verificar que todas las variables contengan texto.

Jugá cambiando los valores de prueba para ver cómo responde tu validación.

¡Importante! Esta práctica te va a servir para entender la validación de datos antes de enviarlos a un servidor, algo fundamental en cualquier aplicación web.

Ejercicio Práctico #2

Obligatorio

Iterar una lista de productos y mostrarlos con alert()

Pasos a seguir:

Lo que harás:

Crear un array de al menos 5 productos (por ejemplo: "Remera", "Pantalón", "Gorra").

Recorrer el array con un bucle for o for...of.

En cada iteración, mostrar el producto con un alert().

Al finalizar, enviar por consola el mensaje: "Lista de productos mostrada correctamente."

Tips claves:

Definí el array como const para practicar buenas prácticas de variables constantes.

Podés sumar un contador para contar cuántos productos se muestran.

¡Recordá! Mostrar la información de forma dinámica con bucles es la base para crear interfaces interactivas más adelante.

const significa que no podés volver a asignar otro array a esa misma variable, pero sí podés modificar el contenido del array.

Podés agregar, quitar o modificar elementos dentro del array declarado con const.

Pero no podés decirle después que sea un array completamente nuevo.

Recordemos:

const = su referencia no cambia.

let = variable flexible, su valor puede cambiar.

var = forma más vieja, hoy se recomienda evitarla.

// EJERCICIO 11

Ejercicio Práctico #1 

Obligatorio

Calculadora Modular con Funciones

Pasos a seguir:

Definí cuatro funciones diferentes: una para sumar, otra para restar, otra para multiplicar y otra para dividir.

Cada función recibirá dos parámetros numéricos y devolverá el resultado de la operación correspondiente.

En el caso de la función dividir, acordate de verificar que el divisor no sea cero. Si lo es, mostrá un mensaje de error en la consola.

Probá el correcto funcionamiento creando dos variables numéricas de ejemplo y llamando a las cuatro funciones con ellas.

Tips claves:

Uso de parámetros: Pasar los números como argumentos a la función.

Condicionales: Usar un if...else para determinar opciones.

Consola del navegador: Utilizá console.log() para mostrar los resultados en la consola.

Recordá la sintaxis de function para declarar funciones. Podés cambiar los valores de prueba para verificar distintos resultados. Usá comentarios si te ayuda a organizar el código.

¡Importante! Mostrá los resultados de cada operación en la consola de forma clara y legible usando console.log().

Ejercicio Práctico #2 

Obligatorio

Generación y visualización de un array de productos

Pasos a seguir:

Creá una función llamada generarProductos() que no reciba parámetros.

Dentro de la función, armá un array llamado productos con al menos 5 objetos. Cada producto debe tener:

id: un identificador numérico único

name: nombre del producto

description: descripción breve

amount: precio en formato numérico

Retorná el array completo desde la función.

Tips claves:

Repasá la estructura de un objeto JavaScript (pares de clave/valor).

Usá nombres de propiedades claros y coherentes.

Probá agregar un producto más si querés practicar.

¡Importante! Fuera de la función, guardá el resultado en una variable y recorré el array con un bucle (for o forEach) para mostrar en consola cada producto con todos sus datos.


// EJERCICIO 12

Ejercicio Práctico #1

Obligatorio

Mostrar la lista de productos en la página

Pasos a seguir:

En tu archivo HTML, crea un contenedor para las tarjetas de productos. Por ejemplo, un <div> con un id como contenedor-productos.

Decide cómo quieres que se muestren las tarjetas:

Puedes crear un botón para mostrar la lista al hacer clic.

O hacer que las tarjetas se muestren automáticamente al cargar la página.

En tu archivo JavaScript, accede al contenedor creado en el HTML usando un selector (getElementById o similar).

Recorre el array de productos que generaste en la clase anterior.

Por cada producto del array:

Crea un nuevo elemento div que servirá como tarjeta y asígnale una clase (por ejemplo, .card).

Dentro de esa tarjeta, agrega elementos que contengan el nombre del producto (por ejemplo, un <h3>) y el precio (por ejemplo, un <p>).

No agregues la descripción por ahora.

Inserta cada tarjeta dentro del contenedor en el HTML usando un método adecuado (como appendChild).

Tips claves:

Usá createElement() para crear cada nuevo elemento HTML (como divs, h3, p).

Para agregar cada tarjeta al contenedor, utilizá appendChild().

Recordá que manipular el DOM es más sencillo si trabajás paso a paso: primero creás el elemento, luego le agregás contenido, y por último lo insertás en el documento.

Ejercicio Práctico #2

Obligatorio

Agregar descripción dinámica con botón

Pasos a seguir:

Al crear cada tarjeta, agrega un botón pequeño dentro de ella con el texto “Ver descripción”.

Para cada botón, agrega un listener de eventos (addEventListener) para detectar cuando se hace clic.

En la función que maneja el clic:

Verifica si la descripción ya está visible en la tarjeta para evitar que se duplique.

Si la descripción no está visible, crea un nuevo elemento <p> con el texto de la descripción del producto.

Agrega ese párrafo dentro de la tarjeta (usando appendChild o similar).

Si la descripción ya está visible, puedes decidir ocultarla o simplemente ignorar el clic.

Tips claves:

Para agregar eventos usá siempre addEventListener() en lugar de poner el evento directo en el HTML.

Antes de crear y agregar la descripción, chequeá si ya existe para no duplicar contenido.

Pensá en la experiencia del usuario: que el botón tenga una acción clara y no genere elementos repetidos.

Practicá crear y manejar elementos dinámicamente para ganar fluidez con el DOM y los eventos.


// EJERCICIO 13

Ejercicio Práctico #1

Obligatorio

Guardar Preferencias de Usuario

Pasos a seguir:

Crear el formulario

Armá en tu HTML un formulario con dos campos:

un campo para el nombre (input).

un selector (select) con diferentes colores de fondo.

Sumale un botón de enviar para guardar las preferencias.

Capturar los datos

En JavaScript, usá un evento submit para capturar el nombre y el color cuando el usuario envía el formulario.

Recordá usar preventDefault() para evitar que el formulario recargue la página.

Guardar en LocalStorage

Usá localStorage.setItem() para guardar el nombre y el color.

Recuperar y aplicar preferencias

Cada vez que la página se cargue, verificá si hay datos guardados en LocalStorage.

Si existen, aplicá automáticamente:

el saludo con el nombre del usuario.

el color de fondo elegido.

Tips claves:

Usá localStorage.getItem() para leer los datos

Manipulá el DOM con document.body.style.backgroundColor para cambiar el color

Probá recargando la página para chequear que la preferencia se mantiene

Ejercicio Práctico #2

Obligatorio

Carrito de Compras con Conteo de Productos

Pasos a seguir:

Armar el catálogo

Creá un listado de productos en el HTML (pueden utilizar los que ya armaron anteriormente “Agregar al carrito”).

Configurar el contador

Mostrá un contador (por ejemplo, en la esquina superior) que indique cuántos productos hay en el carrito.

Programar el agregado

Cuando el usuario haga clic en “Agregar al carrito”, aumentá la cantidad de productos.

Guardá el valor actualizado en LocalStorage.

Recuperar los datos al cargar

Cada vez que se recargue la página, tomá el número guardado en LocalStorage.

Mostralo en el contador del carrito.




// EJERCICIO 14

Ejercicio Práctico #1

Obligatorio

Consumir una API REST con fetch

Pasos a seguir:

Elegí una API pública para probar, por ejemplo: https://fakestoreapi.com/products

En tu archivo HTML, creá un contenedor donde se mostrarán los productos, por ejemplo: <div id="productos-container"></div>

En un archivo JavaScript separado o dentro de un <script>:

Usá fetch() para obtener los productos desde la API.

Convertí la respuesta a JSON para poder trabajar con los datos.

Recorré la lista de productos con un bucle .forEach() y generá las tarjetas para mostrarlos en el contenedor del HTML.

Agregá manejo de errores con .catch(), mostrando un mensaje claro si algo falla (alert o texto en la página).

Probá recargar la página para verificar que los productos se carguen correctamente.

Tips claves:

Usá un diseño simple para las tarjetas, con imagen, título y precio.

Prepará la estructura para añadir botones de “Añadir al carrito” después.

Mantener el JavaScript separado en archivos externos mejora la organización y mantenimiento.

Ejercicio Práctico #2

Obligatorio

Carrito dinámico con productos de la API

Pasos a seguir:

Partí del ejercicio anterior donde ya tienes los productos cargados con fetch.

Añadí un botón “Añadir al carrito” en cada tarjeta de producto.

Implementá funciones para:

Recuperar el carrito guardado en localStorage o crear uno vacío si no existe.

Añadir productos nuevos al carrito (podés guardar solo el ID o el objeto completo).

Guardar el carrito actualizado en localStorage.

Mostrar la cantidad total de productos en el carrito en un elemento visible de la página (por ejemplo, un <div id="contador-carrito"></div>).

Actualizar ese contador cada vez que se agregue un producto.

Al cargar la página, inicializar el contador leyendo el carrito guardado en localStorage.

Confirmá cada agregado al carrito con un mensaje breve (por ejemplo un alert()).




Tips claves:

Usá innerHTML o createElement para generar dinámicamente las tarjetas y botones.

Recordá siempre convertir los objetos a texto con JSON.stringify() para guardarlos, y JSON.parse() para leerlos.


// EJERCICIOS 15

Objetivos de la Clase

Profundizar el manejo de asincronía en JavaScript

Aprender a manejar y controlar el flujo de ejecución de tareas asincrónicas en JavaScript.

Aprender sobre promesas y su uso con then y catch

Conocer la estructura y sintaxis de las promesas, y cómo utilizarlas con los métodos then y catch para el manejo de datos asíncronos.

Conocer la sintaxis de async/await para código asincrónico más legible

Estudiar la sintaxis de async/await, una forma más clara y sencilla de escribir código asincrónico en JavaScript.

Incorporar prácticas de accesibilidad y SEO

Aprender buenas prácticas de accesibilidad y optimización SEO para mejorar la experiencia de usuario y el posicionamiento web.

Orientación sobre requisitos y puntos clave para el proyecto final

Recibir instrucciones y recomendaciones sobre los requisitos y aspectos importantes a tener en cuenta para el desarrollo del proyecto final.

Promesas

Promesas en JavaScript

Cuando usás fetch, te devuelve una promesa: funciona como lo indica la palabra, es un compromiso del programa que tiene tres estados factibles: pendiente, resuelta o rechazada.

Resuelta (resolved)

La operación se completó con éxito.

Pendiente (pending)

La promesa está en proceso de resolución.

Rechazada (rejected)

La operación falló.

Manejo de datos con Fetch y promesas

Manejo de Datos con Fetch y Promesas

Imaginate que tu amiga te pasó la lista de compras para la cena, pero vos todavía no la miraste. Eso es lo que pasa cuando usás fetch: le pedís datos a una API y la promesa te los devuelve “a futuro”.

Ahora bien, cuando llega esa lista (los datos de la API), tenés que procesarla para ver qué cosas vas a comprar y cómo las vas a acomodar. En nuestro código, hacemos lo mismo:

En el siguiente ejemplo:

Pedimos la lista de productos (como pedirle la lista a tu amiga).

Esperamos que la promesa se cumpla (lleguen los datos).

Procesamos esa lista para organizarla en el HTML (mostrando imagen, nombre, precio y botón de compra).

Si falla, al menos nos enteramos con un .catch() (como si tu amiga nos dijera “me olvidé la lista”).

Ejemplo código:

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const contenedor = document.getElementById("productos-container");
    data.forEach((producto) => {
      contenedor.innerHTML += `
        <div class="card">
          <img src="${producto.image}" alt="${producto.title}">
          <h3>${producto.title}</h3>
          <p>Precio: $${producto.price}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        </div>
      `;
    });
  })
  .catch((error) => console.error("Error al obtener productos:", error));

Manejo de Errores con Fetch

Igual que en la vida, puede pasar que la tienda esté cerrada o que la lista esté incompleta. En programación, los errores también suceden, y hay que estar preparados.

Por ejemplo, si la respuesta no viene bien del servidor (códigos 400 o 500), podemos mostrarle un mensaje al usuario para que no se quede esperando:

Usar .catch()

Captura errores en la promesa de fetch.

Mostrar mensaje de error

Informa al usuario sobre el problema ocurrido.

Ejemplo:

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error de servidor: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Mostrar productos normalmente
  })
  .catch((error) => {
    console.error("Error al obtener productos:", error);
    alert("Hubo un problema al cargar los productos. Por favor, intentá más tarde.");
  });

Explicación:

Validamos si la respuesta es correcta (response.ok), porque a veces el servidor contesta “no encontré nada” (error 404) o “me rompí” (error 500).

Si algo sale mal, usamos throw para “avisar fuerte” que no podemos seguir.

Y con el .catch() le damos un mensaje al usuario, así no queda perdido sin explicación.

Async/Await

Async/Await: Otra Forma de Esperar

Hay otra forma de manejar la asincronía que es más sencilla y clara: async/await.

Async

Le decimos a la función que va a manejar tareas asíncronas.

Await

Le decimos que espere a que termine antes de seguir.

¿Te acordás de la promesa de cenar con tu amiga? Con then le vas mandando mensajitos uno tras otro:

¿Podés venir?

¿Traés algo?

¿A qué hora llegás?

Esos mensajes van encadenados, como pasa con las promesas en JavaScript.

Pero con async/await, en vez de andar mandando mensajes sueltos, es como si se sentaran a charlar cara a cara y resuelven todo de una:

Confirmamos la cena.

Definimos la hora.

Ya sabemos qué traemos.

Más directo, más claro, más fácil de leer.

Ejemplo con Async/Await

async function mostrarProductos() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const data = await respuesta.json();
    // procesar datos...
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

Explicación:

async indica que la función puede esperar tareas asincrónicas.

await pausa el flujo hasta obtener la respuesta.

Así evitamos encadenar varios .then, y el código queda más limpio.

¿Por qué usar async/await?

Porque hace el código más fácil de leer y entender ya que se parece a un paso a paso escrito en lenguaje natural en lugar de cadenas de .then evita anidaciones confusas y permite manejar errores con try/catch de forma más clara además la lectura es más lineal y sencilla de mantener


// LA CONSIGNA 

Script.js: deberá incluir un archivo Debes crear un archivo script.js para manejar toda la interactividad de la página.

Asegúrate de enlazarlo correctamente en tu archivo HTML.

DOM: Implementa funciones para validar formularios (ej., campos requeridos y formato de correo).

Usa JavaScript para manipular elementos del DOM, por ejemplo, actualizar el carrito y mostrar mensajes al usuario

Fetch Api

Consume datos desde una API REST usando fetch.

Muestra los productos obtenidos de la API en la página en forma de tarjetas (cards).

Visualización de Productos:

Cada producto debe tener su imagen, título y precio, mostrando una lista atractiva para el usuario.

8. Carrito de compras dinámico

Agregar Productos al Carrito: Implementa un carrito de compras donde los usuarios puedan añadir productos desde las tarjetas.

Uso de localStorage o sessionStorage: Guarda el estado del carrito en localStorage o sessionStorage para que no se pierda al actualizar o cerrar la página.

Contador Dinámico: Muestra el número total de productos en el carrito y asegúrate de actualizarlo en tiempo real.

9. Edición y visualización del carrito

Visualización de Productos en el Carrito: Muestra una lista de productos añadidos al carrito, incluyendo cantidad, precio y total.

Edición de Cantidades y Eliminación de Productos: Implementa funciones para que el usuario pueda editar la cantidad de cada producto o eliminarlo del carrito.

Total Dinámico:Actualiza el total de la compra cada vez que se modifiquen los productos en el carrito.

10. SEO & Accesibilidad

Buenas Prácticas de Accesibilidad:

Usa alt en las imágenes para mejorar la accesibilidad.

Asegúrate de que se pueda navegar fácilmente con el teclado.

SEO Básico:

Usa metaetiquetas en el head del HTML para optimizar el SEO.

Funcionalidad esperada:

Interactividad Completa:

La página debe permitir al usuario ver productos, añadirlos al carrito, editar el carrito, y simular la compra.

Formulario de Contacto:

Implementa un formulario funcional que envíe datos a través de Formspree.

Diseño Responsivo:

Asegúrate de que el diseño sea adaptable a diferentes tamaños de pantalla.

Persistencia del Carrito:

El carrito debe mantenerse activo incluso si el usuario cierra o actualiza la página, usando localStorage o sessionStorage.
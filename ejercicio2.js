/*Escriba un algoritmo que visualice una clasificación de 50 personas según edad y sexo.
Deberá mostrar los siguientes resultados:
a. Cantidad de personas mayores de edad (18 años o más).
b. Cantidad de personas menores de edad.
c. Cantidad de personas masculinas mayores de edad.
d. Cantidad de personas femeninas menores de edad.
e. Porcentaje que representan las personas mayores de edad respecto al total de
personas.
f. Porcentaje que representan las mujeres respecto al total de personas.
Utilice la instrucción LEER PERSONAS al inicio del programa para cargar los datos de las
50 personas en un variable, PERSONAS, que actúa como un vector de 50 posiciones.
Cada elemento de PERSONAS es de un tipo estructurado que dispone dos campos:
SEXO y EDAD.*/

// Definimos una lista vacia y la cantidad de personas que queremos en esa lista
var listaPersonas = [];
var numeroPersonas = 50;

//Creamos una funcion donde generaremos aleatoriamente las personas que ingresaremos en la lista 
function cargarListaPersonasAleatoria(numeroPersonas) {
  for (var i = 0; i < numeroPersonas; i++) {
    var sexo = Math.random() < 0.5 ? 'M' : 'F'; // Se asigna aleatoriamente el sexo
    var edad = Math.floor(Math.random() * 80); // Se asigna aleatoriamente la edad
    listaPersonas.push({SEXO: sexo, EDAD: edad}); // Se agrega la persona a la lista
  }
  return listaPersonas;
}

cargarListaPersonasAleatoria(numeroPersonas);

// Variables para almacenar los resultados
let mayoresDeEdad = 0;
let menoresDeEdad = 0;
let hombresMayores = 0;
let mujeresMenores = 0;
let porcentajeMayores = 0;
let porcentajeMujeres = 0;

// Recorremos el vector de personas y contamos los resultados
for (let i = 0; i < listaPersonas.length; i++) {
  const persona = listaPersonas[i];
  if (persona.EDAD >= 18) {
    mayoresDeEdad++;
    if (persona.SEXO === 'M') {
      hombresMayores++;
    }
  } else {
    menoresDeEdad++;
    if (persona.SEXO === 'F') {
      mujeresMenores++;
    }
  }
  if (persona.SEXO === 'F') {
    porcentajeMujeres++;
  }
}

// Calculamos los porcentajes
porcentajeMayores = (mayoresDeEdad / listaPersonas.length) * 100;
porcentajeMujeres = (porcentajeMujeres / listaPersonas.length) * 100;

// Mostramos los resultados
console.log(`Cantidad de personas mayores de edad: ${mayoresDeEdad}`);
console.log(`Cantidad de personas menores de edad: ${menoresDeEdad}`);
console.log(`Cantidad de personas masculinas mayores de edad: ${hombresMayores}`);
console.log(`Cantidad de personas femeninas menores de edad: ${mujeresMenores}`);
console.log(`Porcentaje que representan las personas mayores de edad: ${porcentajeMayores}%`);
console.log(`Porcentaje que representan las mujeres respecto al total de personas: ${porcentajeMujeres}%`);

//Mostramos las personas que se generaron aleatoriamente
console.log(" ");
console.log("Lista De Personas Auto Generada:  ");
for (let i = 0; i < listaPersonas.length; i++) {
    console.log(listaPersonas[i]); 
}
  
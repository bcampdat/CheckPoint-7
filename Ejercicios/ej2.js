/*  1.Declara una variable llamada nombre, 
otra llamada apellido. Muestra las variables nombre y apellido. */

let nombre = "Bea";
let apellido = "Glez";
const nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

/* 2. Declara una variable llamada edad y asignale un valor numérico.
 Luego, muestra el valor de edad en la consola. */

let edad = 47;
console.log(edad);

/* 3. Declara una variable llamada informacion y 
asignale un objeto con dos propiedades: "profesion"  y "antiguedad".
 Luego, muestra el valor de informacion en la consola. */

let informacion = {
    profesion: "Ingeniero",
    antiguedad: 5
};
  
console.log(informacion);

/* 4. crea una variable booleana que indique si es cierto o no un trabajador jubilado y úsala. */

let jubilado = true; // Variable booleana que indica si el usuario es jubilado o no

if (jubilado) {
  console.log("Bienvenido. Puedes acceder a todas las funciones del sistema.");
} else {
  console.log("Hola Usuario. No tienes permisos para acceder a esta función.");
}


/* 1. Crea una función que tome dos números como parámetros y devuelva su suma: */

const suma = (a, b) => a + b;
console.log(suma(2, 3)); // Output: 5

/* 2. Escriba un programa que pregunte al usuario su edad y diga si es mayor de edad o no. */
const edad = Number(prompt("Ingrese su edad: "));

const esMayorDeEdad = edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";

console.log(esMayorDeEdad);

/* 3. Escriba un condicional que verifique si el valor de la variable "diaSemana" corresponde a un día de la semana.
El programa debe imprimir "¡Trabajar!", el Domingo "¡A descansar!" */

let diaSemana = "lunes";

const mensaje = (diaSemana === "domingo") ? "¡A descansar!" : "¡Trabajar!";

console.log(mensaje);

/* 4. Crea una función que tome un número como parámetro y devuelva «par» si es par y «impar» si es impar: */
function esPar(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

console.log(esPar(4)); // Output: "par"
console.log(esPar(5)); // Output: "impar"


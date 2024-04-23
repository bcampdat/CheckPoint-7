/* 1. Crea una función que tome dos números como parámetros y devuelva su suma: */

function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3)); // Output: 5

/* 2. Escriba un programa que pregunte al usuario su edad y diga si es mayor de edad o no. */
const edad = Number(prompt("Ingrese su edad: "));

if (edad >= 18) {
  console.log("Es mayor de edad.");
} else {
  console.log("No es mayor de edad.");
}

/* 3. Escriba un condicional que verifique si el valor de la variable dia 
corresponde a un "día" de la semana.
el programa debe imprimir ""HOY a currar !!!!", el Domingo "HOY No se trabaja" */
const dia = "Jueves";

switch (dia) {
  case "Lunes":
  case "Martes":
  case "Miércoles":
  case "Jueves":
  case "Viernes":
  case "Sábado":
    console.log("HOY a currar !!!!");
    break;
  default:
    console.log(" HOY No se trabaja");
}

/* 4. Crea una función que tome un número como parámetro y devuelva «par» si es par y «impar» si es impar: */
function esPar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}
console.log(esPar(4)); // Output: "par"
console.log(esPar(5)); // Output: "impar"
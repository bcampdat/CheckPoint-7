/* 1. Escribir una función que reciba una cadena y devuelva la cadena invertida. */

function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}
console.log(invertirCadena("Hola Mundo")); 

/* 2. Escribir una función que reciba una cadena de tu eleccion y devuelva la cadena con las letras en mayúscula. */

function mayusculas(cadena) {
  return cadena.toUpperCase();
}

console.log(mayusculas("Hola Mundo")); 

/* 3. Escribir una función que reciba una cadena y devuelva la cantidad de veces que aparece el carácter en la cadena. */
function contarCaracteres(cadena, caracter) {
    let caracteres = cadena.split('');
    let contador = caracteres.filter(char => char === caracter).length;
    return contador;
  }

console.log(contarCaracteres("Hola Mundo", "o")); 

/* 4. Escribir una función que reciba una cadena y devuelva la cadena sin las vocales. */
function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, '');
}

console.log(eliminarVocales("Hola Mundo")); 
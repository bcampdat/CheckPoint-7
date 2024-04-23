/*1. Observa la diferencia y crea una funcionEjemplo 
y una espresion de expresionFuncion que impriman "Hola, soy una función", 
"Hola, soy una expresión de función" respectivamente. */

//  función
function funcionEjemplo() {
    return "Hola, soy una función";
  }
  
//  expresión de una función
const expresionFuncion = function() {
    return "Hola, soy una expresión de función";
  };
  
  // Llamamos a la función almacenada en la variable
  console.log(funcionEjemplo()); // Output: "Hola, soy una función"
  
  // Llamamos a la expresión de función almacenada en la variable
  console.log(expresionFuncion()); // Output: "Hola, soy una expresión de función"

/*2.Declara una funcion Saludar, 
que toma un nombre como argumento y devuelve un saludo personalizado: */

function saludar(nombre) {
    return `Hola, ${nombre}! ¿Cómo estás?`;
}

console.log(saludar("María")); // Output: Hola, María! ¿Cómo estás?

/*3. Declara una  expresion de la funcion Saludo, 
que toma un nombre como argumento y devuelve un saludo personalizado: */

 const saludo = function(nombre) {
    return `Hola, ${nombre}! ¿Cómo estás?`;
};

console.log(saludo("María")); // Output: Hola, María! ¿Cómo estás?

/*4. Aplica el hoisting 
Define una función llamada respuesta que imprima en la consola el mensaje "Aprendiendo JavaScript".
Llama a la función respuesta para que se ejecute y muestre el mensaje en la consola.
Para facilitar la comprension usa respuesta 1, respuesta 2 y respuesta 3.*/

respuesta1 ()
function respuesta1 () {
    console.log("Aprendiendo JavaScript");
}

respuesta2 () // ReferenceError: respuesta is not defined
const respuesta2 = function(){
	console.log("Aprendiendo JavaScript");
}

const respuesta3 = function(){
	console.log("Aprendiendo JavaScript")
}
respuesta3() // Aprendiendo JavaScript
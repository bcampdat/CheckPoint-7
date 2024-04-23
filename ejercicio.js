/* Ejercicio 1: 
    
    Cree una función JS que acepte 4 argumentos. 
    Suma los dos primeros argumentos, 
    luego los dos segundos y multiplícalos. 
    Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
    Si es más pequeño, la consola registra "¡El número es menor que 50!" */

function sumAndMultiply(arg1, arg2, arg3, arg4) {
    const sum1 = arg1 + arg2;
    const sum2 = arg3 + arg4;
    const product = sum1 * sum2;
  
    if (product > 50) {
      console.log("¡El número es mayor que 50!");
    } else if (product < 50) {
      console.log("¡El número es menor que 50!");
    }
  }
  
  sumAndMultiply(10, 20, 30, 40);
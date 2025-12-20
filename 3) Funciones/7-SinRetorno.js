/* 
Sin retorno
Ideas clave
Retornar un valor no es lo mismo que mostrar un valor.
Si se pide mostrar un valor debemos utilizar console.log
Si se pide retornar un valor, debemos utilizar return.
Si el return no se especifica, la función retornará undefined.
Sin retorno
En JavaScript, cuando una función no tiene explícitamente un return, la función retornará undefined.

function sumar() {
  2 + 2 // Realiza una operación pero no devuelve nada
}

console.log(sumar()) // undefined
Comparemos el código anterior con uno que sí tiene un return.

function sumar() {
  return 2 + 2 // Devuelve el resultado de la operación
}

console.log(sumar()) // 4
¿Por qué una función retorna o no retorna algo?
Estas son decisiones que se toman al crear una función. Tiene sentido que una función no retorne algún valor si su propósito es simplemente realizar una acción, como mostrar un mensaje en pantalla, mientras que las funciones que realizan cálculos o procesos, generalmente retornan un valor para que pueda ser utilizado en otro lugar del programa.

Ejercicio
El siguiente código es una función que convierte grados Celsius a Fahrenheit, sin embargo, tiene un problema que debes corregir. Utiliza lo aprendido en esta lección para corregirlo.
*/


/* Escribe tu código aquí */
/* 
function aFahrenheit(celsius) {
  celsius * 9 / 5 + 32
} 
*/
/* Fin */

/* 
r1 = aFahrenheit(0)
r2 = aFahrenheit(100)
console.log("El agua se congela a " + r1 + " grados Fahrenheit")
console.log("El agua hierve a " + r2 + " grados Fahrenheit") 
*/

/* Escribe tu código aquí */
function aFahrenheit(celsius) {
    return celsius * 9 / 5 + 32
}
/* Fin */

r1 = aFahrenheit(0)
r2 = aFahrenheit(100)
console.log("El agua se congela a " + r1 + " grados Fahrenheit")
console.log("El agua hierve a " + r2 + " grados Fahrenheit")

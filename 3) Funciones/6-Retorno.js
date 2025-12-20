/* Retorno
Ideas clave
Los argumentos son los valores que se pasan a una función cuando se llama.
Las funciones pueden devolver un valor.
Las funciones como cajas negras
Las funciones son como cajas negras que almacenan instrucciones. Tienen puntos de entrada donde podemos enviar datos, y un punto de salida donde devuelven datos. A este punto de salida se le llama retorno o valor devuelto.

Creando una función que retorne un valor
Veamos un ejemplo:

function sumar(a, b) {
  return a + b
}

console.log(sumar(5, 3)) // 8 
console.log(sumar(10, 20)) // 30
En este ejemplo, la función sumar retorna la suma de los parámetros a y b. Después de ser devuelto, el resultado de la función puede mostrarse utilizando console.log.

También es posible guardar el valor que retorna la función en una variable para ser utilizado posteriormente, como veremos en el siguiente ejemplo:

resultado1 = sumar(5, 3)
resultado2 = sumar(resultado1, 20)
console.log(resultado2) // 28 
A partir de ahora utilizaremos los conceptos de parámetros y retorno (o valores devueltos) frecuentemente.

Ejercicio
Crea la función multiplicar que dependa de dos parámetros y que devuelva la multiplicación de ambos. */

/* Escribe tu código aquí */




/* Fin */
/* 
console.log(multiplicar(5, 3)); // 15 
console.log(multiplicar(10, 20)); // 200 
console.log(multiplicar(7, 8)); // 56 

*/

/* Escribe tu código aquí */
function multiplicar(a,b){
    return a*b
}



/* Fin */
console.log(multiplicar(5, 3)); /* 15 */
console.log(multiplicar(10, 20)); /* 200 */
console.log(multiplicar(7, 8)); /* 56 */
/* 
// 1) Hola Mundo: EJ 10/10 Introducción a tipos de datos
Idea clave
El resultado de las operaciones dependen de los tipos de datos involucrados
Tipos de datos
En JavaScript, existen diferentes tipos de datos. Hasta ahora, hemos utilizado dos tipos: números (number) y texto (string). Sin embargo, hay muchos otros tipos de datos que exploraremos más adelante.

Una cosa interesante de los tipos de datos es que el resultado de las operaciones que realizamos depende del tipo de datos involucrados. Veamos un ejemplo:

console.log(2 + 2) // 4
console.log("hola " + "mundo") // hola mundo
console.log("2" + "2") // 22
En el primer caso, sumamos dos números, obteniendo como resultado 4.
En el segundo caso, concatenamos dos cadenas de texto, resultando en "hola mundo".
En el tercer caso, también concatenamos dos cadenas de texto, lo que produce "22".
Este comportamiento también se aplica cuando operamos con variables. Por ejemplo:

a = "2"
b = "2"
console.log(a + b) // 22
Por lo tanto, es crucial prestar atención al tipo de datos que estamos utilizando.

Asimismo, sucede algo similar cuando mezclamos tipos de datos:

a = "2"
b = 2
console.log(a + b) // 22
En este caso, JavaScript convierte el número en texto para poder concatenarlo con la cadena de texto y luego realiza la operación.

Ejercicio
Modifica el valor asignado a la variable a para que el resultado sea el número 4. */

// a = "2" /* Modifica esta línea */
// b = 2
// console.log(a + b)

a = 2 /* Modifica esta línea */
b = 2
console.log(a + b)
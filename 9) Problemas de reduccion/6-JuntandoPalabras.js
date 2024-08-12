/* 
9) Problemas de Reducción: EJ 6/8 Juntando palabras

Juntando palabras
Similar a cuando sumamos los números en un arreglo, podemos concatenar las palabras de un arreglo. El algoritmo para resolver el problema es casi idéntico pero en lugar de sumar los números, concatenamos las palabras.

palabras = ""
palabras = palabras + " " + "Hola"
palabras = palabras + " " + "Mundo" 
console.log(palabras) // Hola Mundo
Ejercicio
Crea una función llamada juntarPalabras que reciba un arreglo de palabras y retorne un string con todas las palabras concatenadas con un espacio entre cada palabra. Al final del string no debe haber un espacio.

Ejemplo:

juntarPalabras(["Hola", "Mundo"]) // "Hola Mundo"
juntarPalabras(["Mensaje", "de", "prueba"]) // "Mensaje de prueba"
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	["Buenos", "días", "a", "todos"]
Test 2	["Vamos", "a", "comenzar"]
Test 3	["Yo", "soy", "tu", "padre"]
 */

/* Escribe tu código aquí */

function juntarPalabras(arreglo) {
  let frase = "";
  for (i = 0; i < arreglo.length; i++) {
    frase = frase + " " + arreglo[i];
  }
  return frase;
}

/* Fin */

juntarPalabras(["Hola", "Mundo"]); // "Hola Mundo"
juntarPalabras(["Mensaje", "de", "prueba"]); // "Mensaje de prueba"

/* 
8) Recorriendo Arreglos: EJ 9/10 Mostrar datos en índices pares
Apliquemos lo aprendido

Ejercicio
Crea una función llamada mostrarCada2 que reciba un arreglo y que muestre una de cada dos palabras.

Ejemplo
...

mostrarCada2(["hola", "mundo", "desde", "javascript"])
/* 
hola
desde
*/
mostrarCada2(["hola", "mundo", "desde", "javascript", "hasta", "el", "fin"]);
/*
hola
desde
hasta
fin
*/
/* Tip 1: Recuerda que cuando se pide mostrar, no debes retornar nada, solo mostrar los datos utilizando console.log. 
Tip 2: Puedes utilizar el índice para saber si es una posición par o impar, para este propósito el número 0 puedes considerarlo como número par. */

/* Escribe tu código aquí */

function mostrarCada2(arreglo) {
  for (i = 0; i < arreglo.length; i = i + 2) {
    console.log(arreglo[i]);
  }
}

/* Fin */
mostrarCada2(["manzana", "maracuyá", "naranja", "pera", "uva"]);
mostrarCada2([
  "gato",
  "perro",
  "ardilla",
  "pez",
  "conejo",
  "camello",
  "caballo",
  "loro",
]);
mostrarCada2(["rojo", "azul", "verde", "amarillo"]);

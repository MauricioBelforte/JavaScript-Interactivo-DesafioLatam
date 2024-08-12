/* 
8) Recorriendo Arreglos: EJ 7/10 Mostrando palabras que empiezan con A

Aplica lo aprendido.

Ejercicio
Crea una función llamada mostrarLasPalabrasQueEmpiezanConA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a".

Ejemplo
MostrarLasPalabrasQueEmpiezanConA(["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"]) */

/*
amet
adipiscing
*/

/* Escribe tu código aquí */

function mostrarLasPalabrasQueEmpiezanConA(arreglo) {
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i].substring(0, 1) == "a") {
      console.log(arreglo[i]);
    }
  }
}

/* Fin */
mostrarLasPalabrasQueEmpiezanConA([
  "manzana",
  "arándanos",
  "naranja",
  "pera",
  "uva",
]);
mostrarLasPalabrasQueEmpiezanConA([
  "gato",
  "perro",
  "ardilla",
  "pez",
  "conejo",
  "alce",
]);
mostrarLasPalabrasQueEmpiezanConA(["rojo", "azul", "verde", "amarillo"]);

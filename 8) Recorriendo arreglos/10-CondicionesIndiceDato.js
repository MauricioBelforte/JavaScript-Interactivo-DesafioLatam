/* 
8) Recorriendo Arreglos: EJ 10/10 Condiciones en índice y dato
Apliquemos lo aprendido

Ejercicio
Crea la función paresQueEmpiezenconA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a" siempre y cuando tengan un índice par en la posición del arreglo.

Para motivos del ejercicio el cero es considerado un número par.

Ejemplo
paresQueEmpiezenconA(["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"])
/*
amet
adipiscing
*/

paresQueEmpiezenconA([
  "adsum",
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
]);
/*
adsum
*/

/* Escribe tu código aquí */

function paresQueEmpiezenconA(arreglo) {
  for (i = 0; i < arreglo.length; i = i + 2) {
    if (arreglo[i].substring(0, 1) == "a") {
      console.log(arreglo[i]);
    }
  }
}

/* Fin */
paresQueEmpiezenconA(["manzana", "maracuyá", "naranja", "pera", "arándanos"]);
paresQueEmpiezenconA([
  "gato",
  "perro",
  "ardilla",
  "alce",
  "conejo",
  "camello",
  "caballo",
  "loro",
]);
paresQueEmpiezenconA(["azul", "rojo", "verde", "amarillo"]);

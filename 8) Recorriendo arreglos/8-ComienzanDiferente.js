/* 
8) Recorriendo Arreglos: EJ 8/10 Mostrar palabras que empiecen con diferentes letras
Apliquemos lo aprendido

Ejercicio
Crea una función llamada palabras que reciba un arreglo de palabras y una letra. El programa debe mostrar en consola las palabras que empiecen con la letra recibida.

Ejemplo
mostrarPalabrasQueEmpiecenCon(["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"], "a")
/*
amet
adipiscing
*/
palabras(
  [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
  ],
  "c"
);
/*
consectetur
*/

/* Escribe tu código aquí */

function palabras(arreglo, letra) {
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i].substring(0, 1) == letra) {
      console.log(arreglo[i]);
    }
  }
}

/* Fin */
palabras(["manzana", "maracuyá", "naranja", "pera", "uva"], "m");
palabras(["gato", "perro", "ardilla", "pez", "conejo", "camello"], "c");
palabras(["rojo", "azul", "verde", "amarillo"], "a");

/* 
Parámetros y Argumentos
Ideas clave
Una función puede depender de múltiples parámetros para llevar a cabo su tarea.
Los valores que uno pasa cuando llama a una función, formalmente reciben el nombre de argumentos.
Agregar más parámetros a una función es tan sencillo como separarlos por comas.
Los argumentos se pasan en el mismo orden que los parámetros de la función.
¿Cómo trabajar con múltiples parámetros?
Agregar más de un parámetro a una función es tan sencillo como separarlos por comas.

Por ejemplo, considera la función sumar(a, b, c) que suma tres números y muestra el resultado:

function sumar(a, b, c) {
  console.log(a + b + c)
}

sumar(5, 3, 2); // 10
Los valores se pasan en el mismo orden que los parámetros de la función.

Parámetros vs. Argumentos
Existen dos conceptos parecidos pero distintos que es importante tener en cuenta al trabajar con funciones:

Parámetros: Son los nombres que usas en una función para recibir datos. Por ejemplo, en sumar(a, b, c), a, b y c son parámetros.

Argumentos: Son los valores que le das a la función cuando la llamas. Por ejemplo, en sumar(5, 3, 2), 5, 3 y 2 son argumentos.

Ocasionalmente, se usa el término argumento para referirse a ambos conceptos, pero es importante tener en cuenta la diferencia al leer mensajes de error o documentación.

Ejercicio
Crea la función restar que dependa de tres parámetros a, b y c. Esta función al ser llamada debe mostrar el resultado de la resta de los tres valores ingresados.


*/

/* Escribe tu código aquí */




/* Fin */
/* restar(10, 5, 3);
restar(3, 5, 2);
restar(9, 4, 1); */


/* Escribe tu código aquí */

function restar(a, b, c) {
    console.log(a - b - c)
}


/* Fin */
restar(10, 5, 3);
restar(3, 5, 2);
restar(9, 4, 1);
/* 
Retorno antes del final
Ideas clave
La función return finaliza la ejecución de una función y devuelve un valor.
Si el return aparece antes del final de la función, la función se detendrá en ese punto y no ejecutará el código que sigue.
Retorno antes del final
Veamos un ejemplo de lo que ocurre cuando se utiliza return antes del final de una función:

function sumar(a, b) {
  c = a + b
  return c
  console.log("Invisible") // Esta línea no se ejecutará
}

sumar(5, 3); 
Podemos ver que la función sumar retorna la suma de los parámetros a y b. Sin embargo, la línea console.log("Invisible") no se ejecutará porque el return finaliza la ejecución de la función.

Ejercicio
La siguiente función no está retornando el resultado esperado, corrige el código para que la función obtenerResultado retorne el resultado de la operación indicada en el primer parámetro. 
*/

/* Escribe tu código aquí */
/* 
function obtenerResultado(operacion, a , b) {
    return operacion; 
    if (operacion === "suma") {
        return a + b;
    } else if (operacion === "resta") {
        return a - b;
    }
} 
*/
/* Fin */
/* 
console.log(obtenerResultado("suma", 5, 3));
console.log(obtenerResultado("resta", 5, 3)); 
*/

/* Escribe tu código aquí */
function obtenerResultado(operacion, a , b) {
 
    if (operacion === "suma") {
        return a + b;
    } else if (operacion === "resta") {
        return a - b;
    }
}
/* Fin */
console.log(obtenerResultado("suma", 5, 3));
console.log(obtenerResultado("resta", 5, 3));
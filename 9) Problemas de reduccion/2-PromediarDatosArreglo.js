/* 
9) Problemas de Reducción: EJ 2/8 Promediar los datos de un arreglo
El promedio de un conjunto de datos es la suma de los datos dividido entre la cantidad de datos.

Por ejemplo el promedio de 1, 2, 3, 4 y 5 es la suma de 1, 2, 3, 4 y 5 dividido entre 5, es decir 15/5 = 3.

Ejercicio
Crea una función llamada promediarDatos que reciba un arreglo y retorne el promedio de los elementos del arreglo recibido.

Ejemplo:

promediarDatos([1, 2, 3, 4, 5]) // 3
promediarDatos([10, 20, 30, 40, 50, 60, 70]) // 35
Tip: Ya sabes sumar los elementos de un arreglo, ahora solo necesitas dividir la suma entre la cantidad de elementos del arreglo.

Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	[4,6,8,2,5]
Test 2	[1,2,3,4,5,6,7,8]
Test 3	[10,11,12,13]
 */

/* Escribe tu código aquí */

function promediarDatos(arreglo) {
  let suma = 0;
  for (i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
  }
  let promedio = suma / arreglo.length;
  return promedio;
}

/* Fin */


promediarDatos([1, 2, 3, 4, 5]) // 3
promediarDatos([10, 20, 30, 40, 50, 60, 70]) // 35
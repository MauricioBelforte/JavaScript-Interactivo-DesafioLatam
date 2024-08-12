/* 
9) Problemas de Reducción: EJ 3/8 Contando pares

Ejercicio
Crea una función llamada contarPares que reciba un arreglo y retorne la cantidad de números pares que contiene el arreglo recibido.

contarPares([1, 2, 3, 4, 5]) // 2
contarPares([10, 20, 30, 40, 50, 60, 70]) // 4
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	[4,6,8,2,5]
Test 2	[1,2,3,4,5,6,7,8]
Test 3	[10,11,12,13]
 */

/* Escribe tu código aquí */

function contarPares(arreglo) {
  let contadorPares = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      contadorPares = contadorPares + 1;
    }
  }
  return contadorPares;
}

/* Fin */

contarPares([1, 2, 3, 4, 5]); // 2
contarPares([10, 20, 30, 40, 50, 60, 70]); // 4

/* 
9) Problemas de Reducción: EJ 4/8 Contando impares

Ejercicio
Crea una función llamada contarImpares que reciba un arreglo y retorne la cantidad de números impares que contiene el arreglo recibido.

contarImpares([1, 2, 3, 4, 5]) // 3
contarImpares([10, 20, 30, 40, 50, 60, 70]) // 0
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	[4,6,8,2,5]
Test 2	[1,2,3,4,5,6,7,9]
Test 3	[10,11,12,13,15]
 */

/* Escribe tu código aquí */

function contarImpares(arreglo) {
  let contadorImpares = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 != 0) {
      contadorImpares = contadorImpares + 1;
    }
  }
  return contadorImpares;
}

/* Fin */

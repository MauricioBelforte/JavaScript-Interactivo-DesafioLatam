/* 
9) Problemas de Reducción: EJ 5/8 Sumando pares

Ejercicio
Dado un arreglo de números, crea una función llamada sumarPares que reciba un arreglo y retorne la suma de los números pares que contiene el arreglo recibido.

sumarPares([1, 2, 3, 4, 5]) // 6
sumarPares([10, 20, 30, 40, 50, 60, 70]) // 150
Tip: Puedes utilizar el operador módulo % para saber si un número es par o impar.

Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	[4,6,8,2,5]
Test 2	[1,2,3,4,5,6,7]
Test 3	[10,11,12,13]
 */

/* Escribe tu código aquí */

function sumarPares(arreglo) {
  let suma = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      suma = suma + arreglo[i];
    }
  }
  return suma;
}

/* Fin */

sumarPares([1, 2, 3, 4, 5]); // 6
sumarPares([10, 20, 30, 40, 50, 60, 70]); // 150

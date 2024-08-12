/*
8) Recorriendo Arreglos: EJ 6/10 Mostrando datos pares

Mostrando datos pares
Apliquemos lo aprendido.

Ejercicio
Crea una función llamada mostrarPares que reciba un arreglo y muestre los números pares del arreglo recibido.

Ejemplo
mostrarPares([1, 9, 3, 5, 5, 2, 1, 1, 1, 4])
/*
2
4
*/
mostrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
/*
2
4
6
8
10
*/

function sumatoriaPares(num) {
  let sumaPares = 0;
  for (i = 1; i <= num; i + 2) {
    sumaPares = sumaPares + i;
  }
}

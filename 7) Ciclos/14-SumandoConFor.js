/* 
7) Ciclos: EJ 14/14 Sumando con for
Hasta ahora hemos utilizado el ciclo for para recorrer números. Sin embargo, al igual que con el ciclo while, podemos utilizar for para realizar operaciones matemáticas.

Por ejemplo, si quisieramos sumar los números del 1 al 10, podríamos hacerlo de la siguiente manera:

suma = 0
for (contador = 1; contador <= 10; contador = contador + 1) {
  suma += contador
}
console.log(suma)
Ejercicio
Crea una función llamada sumatoriaPares que reciba un número como parámetro y retorne la sumatoria de los números pares desde el 1 hasta el número ingresado.

Ejemplo:

sumatoriaPares(5) // 6
sumatoriaPares(10) // 30
sumatoriaPares(100) // 2550
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	9
Test 2	12
Test 3	25
 */

/* Escribe tu código aquí */

function sumatoriaPares(num) {
  let sumaPares = 0;
  for (i = 0; i <= num; i = i + 2) {
    sumaPares = sumaPares + i;
  }
  return sumaPares;
}

/* Fin */

sumatoriaPares(5); // 6
sumatoriaPares(10); // 30
sumatoriaPares(100); // 2550

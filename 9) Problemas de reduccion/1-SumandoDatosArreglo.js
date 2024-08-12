/* 
9) Problemas de Reducción: EJ 1/8 Sumando los datos de un arreglo
En esta categoría trabajaremos con arreglos y ciclos para resolver problemas de donde por diversos motivos debamos reducir un arreglo a un solo valor. Un problema típico en esta categoría es sumar los elementos de un arreglo.

Sumando los datos de un arreglo
Antes de explicar cómo sumar los elementos de un arreglo, recordemos cómo sumar los números del 1 al 10.

Previamente, aprendimos a sumar elementos con el ciclo for:

suma = 0
for (contador = 1; contador <= 10; contador = contador + 1) {
  suma += contador
}
console.log(suma)
Podemos aplicar la misma lógica para sumar los elementos de un arreglo. Primero, recorremos el arreglo como hemos practicado en ejercicios anteriores:

datos = [1, 2, 3, 4, 5]
for (i = 0; i < datos.length; i = i + 1) {
  console.log(datos[i])
}
Luego en lugar de mostrarlos simplemente tenemos que sumar los elementos del arreglo:

datos = [1, 2, 3, 4, 5]
suma = 0
for (i = 0; i < datos.length; i = i + 1) {
  suma += datos[i]
}
console.log(suma)
Definimos un arreglo llamado datos que contiene los números [1, 2, 3, 4, 5].
Inicializamos una variable llamada suma con el valor de 0. Esta variable se utilizará para acumular la suma de los elementos del arreglo.
Iniciamos el ciclo for
En cada iteración del ciclo, sumamos el valor del elemento actual del arreglo (datos[i]) al valor acumulado en la variable suma.
Operar sobre arreglos es una tarea común en programación, por lo que es importante entender cómo recorrer un arreglo y cómo operar sobre sus elementos.

Ejercicio
Crea una función llamada sumarDatos que reciba un arreglo y retorne la suma de los elementos del arreglo recibido.

Ejemplo:

sumarDatos([1, 2, 3, 4, 5]) // 15
sumarDatos([10, 20, 30, 40, 50, 60, 70]) // 280
Casos de prueba
Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
Test 1	[4,6,8,2,3]
Test 2	[1,2,3,4,5,6,7,8]
Test 3	[10,11,12,13]
 */

/* Escribe tu código aquí */

function sumarDatos(arreglo) {
  let suma = 0;
  for (i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
  }
  return suma;
}

/* Fin */

sumarDatos([1, 2, 3, 4, 5]); // 15
sumarDatos([10, 20, 30, 40, 50, 60, 70]); // 280

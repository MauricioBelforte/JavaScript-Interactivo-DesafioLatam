/* 
Ideas clave:
Los programas por defecto se ejecutan de manera lineal, de arriba a abajo.
Podemos cambiar el flujo de un programa utilizando sentencias de control de flujo.
Los diagramas de flujo son una herramienta visual que nos permite representar el flujo de un programa.
Diagramas de flujo
El flujo de un programa es el orden en el que se ejecutan las instrucciones y si bien podemos seguir el flujo de un programa leyendo el código, a veces es más fácil visualizarlo. Para esto se utilizan los diagramas de flujo, que son una herramienta visual que nos permite representar el flujo de un programa.

Los diagramas de flujo se componen de bloques que representan instrucciones y flechas que indican el flujo de ejecución. Cada bloque tiene una forma específica que indica el tipo de instrucción que representa. Por ejemplo, un bloque rectangular representa una instrucción, un rombo representa una condición y un óvalo representa el inicio o fin del programa.

Código y diagramas de flujo
Veamos un ejemplo lineal primero.

console.log("Inicio del programa");
console.log("Instrucción 1");
console.log("Instrucción 2");
console.log("Instrucción 3");
Inicio del programa
Instrucción 1
Instrucción 2
Instrucción 3
Fin del programa
Veamos un ejemplo con una condición.

numero = 10
if (numero > 5)
  console.log("El número es mayor que 5");
Sí
No
Inicio
Asignar el valor 10 a la variable 'numero'
¿El número es mayor que 5?
Mostrar 'El número es mayor que 5'
Fin
Ejercicio
Implementa el siguiente código a partir de un diagrama de flujo.

Sí
No
Inicio
Asignar el texto 'hola' a la variable 'saludo'
¿El saludo es igual a 'hola'?
Mostrar 'Es el saludo correcto'
Fin 
*/

/* Escribe tu código aquí */

saludo = 'hola'

if (saludo == 'hola')
    console.log('Es el saludo correcto')
/* Fin */
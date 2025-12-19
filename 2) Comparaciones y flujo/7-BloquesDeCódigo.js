/*
 Bloques de código
Ideas clave
Podemos cambiar el flujo de un programa utilizando condiciones.
Un bloque es un conjunto de instrucciones que se ejecutan juntas.
¿Qué es un bloque?
Un bloque de código o simplemente bloque es un conjunto de instrucciones que se ejecutan juntas.

En Javascript los bloques se caracterizan por estar delimitado por llaves {} como vemos en el siguiente ejemplo:

if (condición) {
  // Conjunto de instrucciones si la condición se cumple
} else {
  // Conjunto de instrucciones si la condición no se cumple
}
Los bloques resultan útiles para ejecutar un conjunto de instrucciones si una condición se cumple, o si no se cumple.

Veamos un ejemplo práctico:

color = "azul"
if (color === "azul") {
  console.log("La variable color es azul")
  console.log("El azul es mi color favorito")
}
En este caso, ambos mensajes se mostrarán ya que la condición se cumple. Sin embargo, si cambiamos el valor de color a "rojo", entonces ninguno de los mensajes se mostrará.

Ahora, probemos realizar la misma tarea sin utilizar la declaración de bloque:

color = "rojo"
if (color === "azul") 
  console.log("La variable color es azul")
console.log("El azul es mi color favorito")
En este segundo ejemplo, si la variable color es "azul", se mostrarán ambos mensajes. Pero si fuera cualquier otro color, se mostrará únicamente el segundo mensaje, independientemente de si la condición se cumple o no.

Es importante señalar que la indentación (espaciado/sangría) dentro del bloque es solo para resaltar que las instrucciones están dentro del mismo. Aunque no es obligatoria, es una buena práctica que mantendremos a lo largo de los ejercicios.

Ejercicio
El programador que escribió este código se olvidó de agregar los bloques, por lo que el código no funciona como debería. ¿Puedes corregirlo? Sólo agrega las llaves {} donde corresponda. 

*/

/* Escribe tu código aquí */
/* formulario = "incompleto"
if (formulario == "completo") 
console.log("Formulario completo")
console.log("Enviando email")
console.log("Este mensaje debe aparecer siempre") */
/* Fin */



/* Escribe tu código aquí */
formulario = "incompleto"
if (formulario == "completo") {
    console.log("Formulario completo")
    console.log("Enviando email")
}
console.log("Este mensaje debe aparecer siempre")
/* Fin */

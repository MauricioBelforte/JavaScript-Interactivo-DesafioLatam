/* Ejercicio de bloque
Ideas clave
Podemos cambiar el flujo de un programa utilizando condiciones.
Un bloque es un conjunto de instrucciones que se ejecutan juntas.
Un bloque se delimita por llaves {}.
A continuación aplicaremos lo aprendimos sobre bloques del ejercicio anterior.

Ejercicio
Un programador está desarrollando un videojuego y ha escrito el siguiente código para que cuando la puerta esté abierta, se muestre un mensaje. Sin embargo, el programa no está funcionando correctamente. ¿Puedes corregirlo dejando los mensajes respectivos dentro de un bloque donde sea necesario? */


/* Escribe tu código aquí */
/* puerta = "cerrada"
if (puerta == "abierta")
console.log("Detrás de la puerta hay un tesoro")
console.log("Dentro del tesoro hay 50 monedas de oro")
console.log("Este mensaje debe aparecer siempre independientemente de si la puerta está abierta o cerrada") */
/* Fin */


/* Escribe tu código aquí */
puerta = "cerrada"
if (puerta == "abierta") {
    console.log("Detrás de la puerta hay un tesoro")
    console.log("Dentro del tesoro hay 50 monedas de oro")
}
console.log("Este mensaje debe aparecer siempre independientemente de si la puerta está abierta o cerrada")
/* Fin */

/*

Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

*/

function removeSnow(s: string): string {
    const stack: string[] = [];
    
    for (const char of s) {
        // Si el carácter actual es igual al que está en la cima de la pila, lo eliminamos (desaparece)
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Elimina el último elemento
        } else {
            stack.push(char); // Si no, lo agregamos a la pila
        }
    }
 
    // Convertimos la pila de vuelta a un string
    return stack.join('');
}



removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd') // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz') // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a') // -> "a"
// No hay montículos repetidos
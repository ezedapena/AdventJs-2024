/*

Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los tamaños disponibles después de emparejar las botas.

*/

type Shoe = {
    type: 'I' | 'R'
    size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
    const sizesWithBothTypes = shoes.reduce((result: number[], shoe) => {
        if (shoe.type === 'I') {
            const rightShoeIndex = shoes.findIndex(s => s.type === 'R' && s.size === shoe.size)
            if (rightShoeIndex > 0) {
                shoes.splice(rightShoeIndex, 1);
                result.push(shoe.size);
            }
        }
        return result;
    }, []);

    return sizesWithBothTypes.sort((a, b) => a - b);
}


const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
// [38, 38]

const shoes3: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
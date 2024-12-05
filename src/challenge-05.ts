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
    const counts = new Map<number, { I: number; R: number }>();

    for (const { type, size } of shoes) {
        if (!counts.has(size)) {
            counts.set(size, { I: 0, R: 0 });
        }
        counts.get(size)![type]++;
    }

    const result: number[] = [];
    for (const [size, { I, R }] of counts) {
        const pairs = Math.min(I, R);
        for (let i = 0; i < pairs; i++) {
            result.push(size);
        }
    }

    return result.sort((a, b) => a - b);
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
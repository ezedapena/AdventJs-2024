/*
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

received: Lista con los regalos que Santa tiene actualmente.
expected: Lista con los regalos que Santa debería tener.
Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
Ten en cuenta que:

Los regalos pueden repetirse en ambas listas.
Las listas de regalos están desordenadas.
Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
*/

function fixGiftList(
    received: string[],
    expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
    const countReceived: Record<string, number> = {};
    const countExpected: Record<string, number> = {};

    for (const gift of received) {
        countReceived[gift] = (countReceived[gift] || 0) + 1;
    }

    for (const gift of expected) {
        countExpected[gift] = (countExpected[gift] || 0) + 1;
    }

    const missing: Record<string, number> = {};
    const extra: Record<string, number> = {};

    const allGifts = new Set([
        ...Object.keys(countReceived),
        ...Object.keys(countExpected),
    ]);

    for (const gift of allGifts) {
        const qtyReceived = countReceived[gift] || 0;
        const qtyExpected = countExpected[gift] || 0;

        if (qtyExpected > qtyReceived) {
            missing[gift] = qtyExpected - qtyReceived;
        } else if (qtyReceived > qtyExpected) {
            extra[gift] = qtyReceived - qtyExpected;
        }
    }

    return { missing, extra };
}


fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
    ['book', 'train', 'kite', 'train'],
    ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
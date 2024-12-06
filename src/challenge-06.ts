/*

Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

*/

function inBox(box: string[]): boolean {
    let hasGift: boolean = false;

    const boxPartRegExp: RegExp = /^#+$/;
    if (!boxPartRegExp.test(box[0]) || !boxPartRegExp.test(box[box.length - 1]))
        return false;


    for (let i = 1; i < box.length - 1; i++) {
        if (!box[i].startsWith('#') || !box[i].endsWith('#'))
            return false;

        if (box[i].includes('*'))
            hasGift = true;

    }

    return hasGift
}


console.log(inBox([
    "###",
    "#*#",
    "###"
])) // ➞ true

console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])) // ➞ true

console.log(inBox([
    "*####",
    "#   #",
    "#  #*",
    "####"
])) // ➞ false

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])) // ➞ false
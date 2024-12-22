/*
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:
*/

const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
}


/*
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.
*/


function distributeWeight(weight: number): string {
    const boxRepresentations: Record<number, string[]> = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    };

    function rtrim(str: string): string {
        return str.replace(/\s+$/g, "");
    }

    let remaining = weight;
    const tens = Math.floor(remaining / 10);
    remaining %= 10;
    const fives = Math.floor(remaining / 5);
    remaining %= 5;
    const twos = Math.floor(remaining / 2);
    remaining %= 2;
    const ones = remaining;

    const boxesStack: number[] = [
        ...Array(ones).fill(1),
        ...Array(twos).fill(2),
        ...Array(fives).fill(5),
        ...Array(tens).fill(10),
    ];

    if (boxesStack.length === 0) {
        return "";
    }

    function mergeLines(topLine: string, bottomLine: string): string {
        const maxLen = Math.max(topLine.length, bottomLine.length);
        let merged = "";
        for (let i = 0; i < maxLen; i++) {
            const charTop = i < topLine.length ? topLine[i] : " ";
            const charBot = i < bottomLine.length ? bottomLine[i] : " ";
            merged += charTop !== " " ? charTop : charBot;
        }
        return rtrim(merged);
    }


    let lines: string[] = [];

    for (const box of boxesStack) {
        const rep = boxRepresentations[box];
        if (lines.length === 0) {
            lines = rep.map(e => e);
        } else {
            lines[lines.length - 1] = mergeLines(lines[lines.length - 1], rep[0]);
            for (let i = 1; i < rep.length; i++) {
                lines.push(rtrim(rep[i]));
            }
        }
    }

    return lines.join("\n");
}

// distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

// distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

// distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

// distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
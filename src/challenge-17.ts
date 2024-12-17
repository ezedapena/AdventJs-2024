/*

El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

*/

function detectBombs(grid: boolean[][]): number[][] {
    function roundingBombs(col: number, row: number): number {
        let acum = 0;

        for (let i = col - 1; i < col + 2; i++) {
            for (let j = row - 1; j < row + 2; j++) {
                if( i === col && j === row) continue;

                grid[i] && !!grid[i][j] && acum++;
            }
        }

        return acum;
    }

    return grid.map((col, colIndex) => col.map((row, rowIndex) => roundingBombs(colIndex, rowIndex)))
}

detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
    [true, false],
    [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
    [true, true],
    [false, false],
    [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
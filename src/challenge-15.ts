/*

Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.

*/

function drawTable<T extends Record<string, any>>(data: T[]): string {
    if (data.length === 0) return '';

    const headers = Object.keys(data[0]).map(
        (key) => key.charAt(0).toUpperCase() + key.slice(1)
    );

    const columnWidths = headers.map((header, i) => {
        return Math.max(
            header.length,
            ...data.map((row) => String(Object.values(row)[i]).length)
        );
    });

    const headerRow = `| ${headers
        .map((header, i) => header.padEnd(columnWidths[i]))
        .join(' | ')} |`;

    const separator = `+${columnWidths
        .map((width) => '-'.repeat(width + 2))
        .join('+')}+`;

    const dataRows = data.map((row) => {
        return `| ${Object.values(row)
            .map((value, i) => String(value).padEnd(columnWidths[i]))
            .join(' | ')} |`;
    });

    return [separator, headerRow, separator, ...dataRows, separator].join('\n');
}

drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
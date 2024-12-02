function createFrame(names: string[]): string {
    if (names.length === 0) return '';

    const maxLength = Math.max(...names.map(name => name.length));
    const border = '*'.repeat(maxLength + 4);

    const framedNames = names.map(name => `* ${name.padEnd(maxLength)} *`).join('\n');
    return `${border}\n${framedNames}\n${border}`;
}

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
//   ***************
//   * midu        *
//   * madeval     *
//   * educalvolpz *
//   ***************

createFrame(['midu'])

// Resultado esperado:
//   ********
//   * midu *
//   ********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
//   *******
//   * a   *
//   * bb  *
//   * ccc *
//   *******


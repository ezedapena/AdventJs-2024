/*

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

*/

function createXmasTree(height: number, ornament: string): string {
    if (ornament.length != 1) return '';
  
    function getFilling(filling: number): string {
    let fillingString = '';
    
    for (let i = 0; i < filling; i++)
      fillingString = fillingString.concat('_');
    
    return fillingString;
  }
  
  function getLeaves(leavesNum: number, ornament: string): string {
    // inicio el string con la hoja del medio
    let leaves = ornament;
  
    for (let i = 0; i < leavesNum; i++) 
      leaves = leaves.concat(ornament);
  
    return leaves;
  }
  
  function getBase(baseFilling: number): string {
    const baseFillingString = getFilling(baseFilling);
    const base = baseFillingString.concat('#', baseFillingString);
    return base.concat('\n', base);
  }
  
    let treeCrown = '';
  
    for (let i = 0; i < height; i++) {
      const filling = getFilling(height - i - 1);
      const leaves = getLeaves(i*2, ornament);
      treeCrown = treeCrown.concat(filling, leaves, filling, '\n');
    }
  
  
    return treeCrown.concat(getBase(height-1));
  }
  
const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
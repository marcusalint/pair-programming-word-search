const transpose = function(matrix) {
    const newMatrix = [];
    const numberOfRows = matrix[0].length;
    const numberOfColumns = matrix.length;
    for (let row = 0; row < numberOfRows; row++) {
      let newRow = [];
      for (let column = 0; column < numberOfColumns; column++) {
        newRow.push(matrix[column][row]);
      }
      newMatrix.push(newRow);
    }
    return newMatrix;
  };
  
  const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    let vertTranspose = transpose(horizontalJoin);
    vertTranspose = vertTranspose.map(vs => vs.join(''));
    for (let l of vertTranspose) {
      if (l.includes(word)) {
        return true;
      }
    }
      
  
    console.log(vertTranspose);
  
    return false;
  };
  
  
  console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD'));
  
  module.exports = wordSearch;
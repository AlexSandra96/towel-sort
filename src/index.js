
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (!matrix) {
    return newArr;
  } 
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i] = matrix[i].sort((a, b) => b - a);
    }
  }
  for (let q = 0; q < matrix.length; q++) {
    newArr = newArr.concat(matrix[q]);
  }
  return newArr;
 }

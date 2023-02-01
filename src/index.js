
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) return [];
  matrix.map((item, index) => !(index % 2) ? item : item.reverse());
  return matrix.flat();
}

function matrixElementsSum(matrix: number[][]): number {
    let total = 0;
    let transpose = matrix[0].map((a, i) => matrix.map((b) => b[i]));
    for (let i = 0; i < transpose.length; i++) {
      for (let j = 0; j < transpose[i].length; j++) {
        if (transpose[i][j] == 0) break;
        total += transpose[i][j];
      }
    }
    return total;
  }
  
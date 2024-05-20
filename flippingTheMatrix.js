function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    let maxSum = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const topLeft = matrix[i][j];
            const topRight = matrix[i][matrix.length - 1 - j];
            const bottomLeft = matrix[matrix.length - 1 - i][j];
            const bottomRight = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
            
            maxSum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
        }
    }
    
    return maxSum;
}
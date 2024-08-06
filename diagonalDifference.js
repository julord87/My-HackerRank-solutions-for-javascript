function diagonalDifference(arr) {
    let firstDiag = 0;
    let secDiag = 0;
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let nArrLength = arr[i].length - 1;
        
        firstDiag += arr[i][i]
        secDiag += arr[i][nArrLength - count]
        count++
    }
    
    if(firstDiag > secDiag) {
        return firstDiag - secDiag
    } else {
        return secDiag - firstDiag
    }
};
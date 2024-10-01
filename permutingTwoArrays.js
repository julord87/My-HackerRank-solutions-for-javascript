function twoArrays(k, A, B) {
    const sortedA = A.sort((a, b) => a - b)
    const sortedB = B.sort((a, b) => b - a)
    
    for(let i = 0; i < A.length; i ++) {
        if(sortedA[i] + sortedB[i] < k) return "NO"
    }
    
    return "YES"
};
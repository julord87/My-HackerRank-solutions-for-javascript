
function maxMin(k, arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    
    let minUnfairness = Infinity;
    
    for(let i = 0; i < sortedArr.length; i++) {
        const currentMin = sortedArr[i + k - 1] - arr[i]
        
        if(currentMin < minUnfairness) {
            minUnfairness = currentMin;
        }
    }
    
    return minUnfairness;

};
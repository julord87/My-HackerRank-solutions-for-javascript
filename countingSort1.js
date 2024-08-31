function countingSort(arr) {
    let res = [];
    
    for(let i = 0; i < 100; i++) {
        res[i] = 0;
    }
    
    for(let j = 0; j < arr.length; j++) {
        res[arr[j]] += 1
    }
    
    return res;
};
function balancedSums(arr) {

    let sum = arr.reduce((acc, val) => acc+val);
    let leftSum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum -= arr[i];
        if(sum === leftSum){
            return 'YES';
        };
        leftSum += arr[i];
    };
    return 'NO';
}


// less efficient solution:

function balancedSums(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
        for(let j = 0; j < arr.length; j++) {
            let currentValue = arr[j];
            if(j < i) {
                leftSum += currentValue;
            } else if(j > i) {
                rightSum += currentValue;
            }
        }
        
        if(leftSum === rightSum) return "YES"
    }
    
    return "NO"
}

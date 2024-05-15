//Climbing the Leaderboard (BUSQUEDA BINARIA)

function climbingLeaderboard(ranked, player) {
    const result = [];
    const newArr = [...new Set(ranked)];
    for(let score of player){
        result.push(lowerBound(newArr, score) + 1);
    }
    return result;
}

const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] <= target) right = mid;
        else left = mid + 1;
    }

    return left;
};

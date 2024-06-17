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

// Option 2

function climbingLeaderboard(ranked, player) {
    const rankSet = Array.from(new Set(ranked));
    let result = [];
    let j = rankSet.length - 1; // Empezamos desde el final del rankSet
    
    for (let i = 0; i < player.length; i++) {
        let score = player[i];
        
        // Mover hacia atrás en rankSet mientras el score del jugador sea mayor o igual al score en rankSet
        while (j >= 0 && score >= rankSet[j]) {
            j--;
        }
        
        // La posición es j+2 ya que j+1 sería el índice de inserción y queremos el rank, que es 1 basado
        result.push(j + 2);
    }
    
    return result;
}
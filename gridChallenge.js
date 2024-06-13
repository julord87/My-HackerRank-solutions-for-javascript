function gridChallenge(grid) {
        
    let sortedGrid = grid.map(row => row.split("").sort().join(""));
    
    for(let i = 0; i < sortedGrid.length - 1; i++) {
        for(let j = 0; j < sortedGrid[i].length; j++) {
            let downChar = sortedGrid[i + 1][j]
            if(sortedGrid[i][j] > downChar) {
                return "NO";
            }
        }
    }
    return "YES";
}


// Option 2

function gridChallenge(grid) {
    const sortedGrid = [];
    
    for(let string of grid) {
        sortedGrid.push(sortString(string));
    }
    
    for(let i = 0; i < sortedGrid[0].length; i++) {
        let currentStr = "";
        for(let j = 0; j < sortedGrid.length; j ++) {
            currentStr += sortedGrid[j][i]
        }
        if(currentStr !== sortString(currentStr)) return "NO"
    }

    return "YES"
}

function sortString(str) {
    return str.split('').sort().join('')
}
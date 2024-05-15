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

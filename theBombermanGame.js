function bomberMan(n, grid) {
    if (n === 1) return grid
  
    let g = plantbombs(grid)
  
    grid = grid.map((c) => c.split(''))
    const x = (n - 2) % 2
    const y = Math.floor((n - 2) / 2) % 2
  
    if (x) {
      detonate(grid, g)
      if (y) {
        grid = [...g]
        g = plantbombs(grid)
        detonate(grid, g)
      }
    } else {
      g = plantbombs(grid)
    }
  
    return g.map((c) => c.join(''))
  }
  
  function plantbombs(grid) {
    return Array.from(Array(grid.length), () => Array(grid[0].length).fill('O'))
  }
  
  function detonate(grid, g) {
    for (let i = 0; i < (grid.length); i++) {
      grid[i].forEach((cell, j) => {
        if (cell === 'O') {
          g[i][j] = '.'
          if (g[i][j - 1]) g[i][j - 1] = '.'
          if (g[i][j + 1]) g[i][j + 1] = '.'
          if (g[i + 1]) g[i + 1][j] = '.'
          if (g[i - 1]) g[i - 1][j] = '.'
        }
      }, '')
    }
  }

  // Option 2

  function bomberMan(n, grid) {
    if(n === 1) return grid
    
    if(n % 2 === 0) return grid.map(row => 'O'.repeat(row.length));
    
    const detonate = (grid) => {
        const n = grid.length
        const m = grid[0].length
        const newGrid = Array.from(Array(n), () => Array(n).fill('O'))
        
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(grid[i][j] === 'O') {
                    newGrid[i][j] = '.';
                    if(i > 0) newGrid[i - 1][j] = '.';
                    if(i < n - 1) newGrid[i + 1][j] = '.';
                    if(j > 0) newGrid[i][j - 1] = '.';
                    if(j < m - 1) newGrid[i][j + 1] = '.';
                }
            }
        }
        return newGrid.map(row => row.join(''))
    }
    
    const state3 = detonate(grid)
    const state5 = detonate(state3)
    
    return ((n - 1) % 4 === 0) ? state5 : state3
 }
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
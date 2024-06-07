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
    if (n === 1) return grid;
    if (n % 2 === 0) return grid.map(row => 'O'.repeat(row.length));

    const detonate = (grid) => {
        const m = grid.length;
        const n = grid[0].length;
        const newGrid = Array.from(Array(m), () => Array(n).fill('O'));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 'O') {
                    newGrid[i][j] = '.';
                    if (i > 0) newGrid[i - 1][j] = '.';
                    if (i < m - 1) newGrid[i + 1][j] = '.';
                    if (j > 0) newGrid[i][j - 1] = '.';
                    if (j < n - 1) newGrid[i][j + 1] = '.';
                }
            }
        }
        return newGrid.map(row => row.join(''));
    };

    const stateAt3 = detonate(grid.map(row => row.split('')));
    const stateAt5 = detonate(stateAt3.map(row => row.split('')));

    return ((n - 1) % 4 === 0) ? stateAt5 : stateAt3;
}
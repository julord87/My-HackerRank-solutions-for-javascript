function isValid(s) {
    const cMap = {}
  
    for (let c of s) {
      cMap[c] ? cMap[c]++ : cMap[c] = 1
    }
  
    const freqs = new Set(Object.values(cMap))
  
    if (freqs.size === 1) return 'YES';
  
    if (freqs.size === 2) {
      const max = Math.max(...freqs);
      const min = Math.min(...freqs);
      let maxCt = 0;
      let minCt = 0;
      for (let c in cMap) {
        if (cMap[c] === max) maxCt++;
        if (cMap[c] === min) minCt++;
      }
      if (
        (minCt === 1 && min === 1) ||
        (maxCt === 1 && max === min + 1)
      ) {
        return 'YES';
      }
    }
  
    return 'NO';
  }
  
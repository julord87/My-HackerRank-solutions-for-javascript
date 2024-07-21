function isValid(s) {
  const sObj = {};
  
  for(let char of s) {
      sObj[char] ? sObj[char]++ : sObj[char] = 1;
  }
  
  const freq = new Set(Object.values(sObj));
  
  if(freq.size === 1) return "YES"
  
  if(freq.size === 2) {
      const maxFreq = Math.max(...freq)
      const minFreq = Math.min(...freq)
      let maxCount = 0;
      let minCount = 0;
      
      for(let c in sObj) {
          if(sObj[c] === maxFreq) maxCount++;
          if(sObj[c] === minFreq) minCount++;
      }
      
      if((minCount === 1 && minFreq === 1) || (maxCount === 1 && maxFreq === minFreq + 1)) return "YES"
  }
  
  return "NO"
};
  
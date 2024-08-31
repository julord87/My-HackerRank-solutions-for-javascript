unfunction dynamicArray(N, queries) {
    const S = [];
    let lastAnswer = 0;
    const ans = [];
    for (let i = 0; i < N; i++) {
      S[i] = [];
    }
  
    queries.forEach((eachItem) => {
      const [q, x, y] = [...eachItem];
      console.log(q, x, y);
      const seq = (x ^ lastAnswer) % N;
      switch (q) {
        case 1:
          S[seq].push(y);
          break;
        case 2:
          const size = S[seq].length;
          const index = y % size;
          lastAnswer = S[seq][index];
          ans.push(lastAnswer);
          break;
        default:
          break;
      }
    });
  
    return ans;
  };

  // Re visited

  function dynamicArray(n, queries) {
    let arr = []
    let lastAnswer = 0
    let ans = []
    
    for(let i = 0; i < n; i++) {
        arr[i] = []
    }
    
    queries.forEach((eachItem) => {
        const [q, x, y] = [...eachItem]
        let idx = (x ^ lastAnswer) % n
        switch(q) {
            case 1:
                arr[idx].push(y);
                break;
            case 2:
                let size = arr[idx].length;
                let i = y % size;
                lastAnswer = arr[idx][i];
                ans.push(lastAnswer)
                break;
            default:
                break;
        }
    })
    
    return ans;

};
function dynamicArray(N, queries) {
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
  }
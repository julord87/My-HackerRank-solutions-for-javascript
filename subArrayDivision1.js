function birthday(s, d, m) {
    let count = 0;

    for(let i = 0; i <= s.length - m; i++) {
        let tempSum = 0;
        for(let j = 0; j < m; j++ ) {
            tempSum += s[i + j];
        }
        if(tempSum === d) count++;
    }

    return count;
};
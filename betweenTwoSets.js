function getTotalX(a, b) {
    let count = 0
    let na = Math.max(...a)
    let mi = Math.min(...b)
    for(let i=na; i<=mi ;i++){ 
        if((a.every(e => i % e === 0)) && b.every(e => e % i === 0)){ 
            count++
        }
    }
     return count
}

function lonelyinteger(a) {
    
    let aCopy = [...a];
    
    for(let i = 0; i < a.length; i ++){
        aCopy.splice(i, 1)
        if(!aCopy.includes(a[i])) return a[i]
        aCopy.unshift(a[i])
    }

}
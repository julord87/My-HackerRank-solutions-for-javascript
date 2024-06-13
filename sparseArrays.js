function matchingStrings(strings, queries) {
    let result = [];
    
    for(let i = 0; i < queries.length; i++) {
        let querie = queries[i]
        let resTemp = 0;
        for (let j = 0; j < strings.length; j++) {
            if(strings[j] === querie) {
                resTemp++;
            }
        }
        result.push(resTemp)
    }
    
    return result;
}
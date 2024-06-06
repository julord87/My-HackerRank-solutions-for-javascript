function anagram(s) {
    if(s.length % 2 !== 0) return -1;
    
    let aWord = s.substring(0, Math.floor(s.length / 2));
    let bWord = s.substring(Math.floor(s.length / 2));
    
    let changesNeeded = 0;

    for(let i = 0; i < aWord.length; i++) {
        let foundMatch = false;
        for(let j = 0; j < bWord.length; j++) {
            if(bWord[j] === aWord[i]) {
                foundMatch = true;
                bWord = bWord.substring(0, j) + bWord.substring(j + 1);
                break;
            }
        }
        if (!foundMatch) {
            changesNeeded++;
        }
    }
    
    return changesNeeded;
};

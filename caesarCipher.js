function caesarCipher(s, k) {
    const alphabet = ("abcdefghijklmnopqrstuvwxyz").split('')
    const stringArr = s.split('')
    let rotatedString = ""
    
    for(let i = 0; i < stringArr.length; i++) {
        let char = stringArr[i]
        const isUpperCase = char === char.toUpperCase()
        char = char.toLowerCase()
        
        if(alphabet.includes(char)) {
            const charIndexInAlphabet = alphabet.findIndex(ch => ch === char)
            let rotatedChar = ""
            if(charIndexInAlphabet + k >= alphabet.length) {
                const j = (charIndexInAlphabet + k) % alphabet.length
                rotatedChar = alphabet[j]
            } else {
                rotatedChar = alphabet[charIndexInAlphabet + k]
            }
            rotatedString += isUpperCase ? rotatedChar.toUpperCase() : rotatedChar
        } else {
            rotatedString = rotatedString.concat(char);
        }
    }
    
        return rotatedString;
};



// Option 2 //

function caesarCipher(s, k) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetLength = alphabet.length;
    k = k % alphabetLength;
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let isMayus = char === char.toUpperCase();
        char = char.toLowerCase();

        if (alphabet.includes(char)) {
            let currentIndex = alphabet.indexOf(char);
            let newIndex = (currentIndex + k) % alphabetLength;
            let newChar = alphabet[newIndex];

            result += isMayus ? newChar.toUpperCase() : newChar;
        } else {
            result += s[i];
        }
    }
    return result;
};

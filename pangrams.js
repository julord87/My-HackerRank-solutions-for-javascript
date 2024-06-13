function pangrams(s) {
    const lowStr = s.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetSet = new Set();

    for (let char of lowStr) {
        if (alphabet.includes(char)) {
            alphabetSet.add(char);
        }
    }

    return alphabetSet.size === 26 ? "pangram" : "not pangram";
};
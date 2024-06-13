function palindromeIndex(s) {
    
    function isPalindrome(s) {
        for (let i = 0; i < s.length/2; i++) {
                if (s[i] !== s[s.length - 1 - i]) {
                    return false;
                }
        }
        return true;
    }

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            const tmp1 = s.substring(0, i) + s.substring(i + 1);
            const tmp2 = s.substring(0, s.length - 1 - i) + s.substring(s.length - i);
            if (isPalindrome(tmp1)) {
                return i;
            } else if (isPalindrome(tmp2)) {
                return s.length - 1 - i;
            }
        }
    }
    return -1;
};
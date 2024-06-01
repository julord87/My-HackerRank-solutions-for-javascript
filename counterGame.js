function counterGame(n) {
    let turn = 0;

    while (n > 1) {
        if ((n & (n - 1)) === 0) {
            n = n / 2;
        } else {
            let highestPowerOf2 = 1;
            while (highestPowerOf2 * 2 < n) {
                highestPowerOf2 *= 2;
            }
            n -= highestPowerOf2;
        }
        turn++;
    }

    return turn % 2 === 0 ? "Richard" : "Louise";
}
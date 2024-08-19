function counterGame(n) {
    let turn = 0;

    while (n > 1) {
        if ((n & (n - 1)) === 0) { // Acá determinamos si n es potencia de 2
            n = n / 2;
        } else {
            let highestPowerOf2 = 1;
            while (highestPowerOf2 * 2 < n) { // Buscamos la mayor potencia de 2 menor que n
                highestPowerOf2 *= 2;
            }
            n -= highestPowerOf2; // Restamos la mayor potencia de 2 a n
        }
        turn++;
    }

    return turn % 2 === 0 ? "Richard" : "Louise";
};
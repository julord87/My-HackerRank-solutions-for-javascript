function superDigit(n, k) {
    if (n.length === 1) return n;

    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    sum *= k;

    if (sum < 10) {
        return sum;
    } else {
        return superDigit(String(sum), 1);
    }
}
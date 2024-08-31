function pageCount(n, p) {
    const fromStart = Math.floor(p / 2)
    const totalTurns = Math.floor(n / 2)
    const fromEnd = Math.ceil(totalTurns - p / 2)
    return Math.min(fromStart, fromEnd)
};
function minimumBribes(q) {
    let bribesCount = 0;

    // Recorremos la fila de personas
    for (let i = 0; i < q.length; i++) {
        const n = q[i]; // La posición actual en la fila

        // Verificamos si la persona en la posición actual sobrepasó el límite permitido de sobornos
        if (n > i + 3) {
            return "Too chaotic";        }

        // Verificamos cuántas personas más adelante en la fila sobornaron a la persona actual
        for (let j = Math.max(0, n - 2); j < i; j++) {
            if (q[j] > n) {
                bribesCount++;
            }
        }
    }

    return bribesCount;
};
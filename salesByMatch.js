function sockMerchant(n, ar) {
    let socks = {}
    let count = 0
    
    for(let color of ar) {
        if(socks[color]) {
            socks[color] += 1
        } else {
            socks[color] = 1
        }
    }
    
    for(let color in socks) {
        if(socks[color] > 1) {
            count += Math.floor(socks[color] / 2)
        }
    }
    
    return count
}

// En JavaScript, cuando quieres acceder a una propiedad de un objeto usando una variable, necesitas usar la notación de corchetes [] en lugar de la notación de punto .. 
// La notación de punto siempre accede a una propiedad con un nombre literal, mientras que la notación de corchetes permite usar una variable para acceder al nombre de la propiedad.

// reverse doubly linked list (devolviendo una linked list doble (data estructure) en reversa)

function reverse(llist) {
    let prev = null;
    let current = llist;
    let next = null;
    
    while (current) {
        next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;     
    }
    return prev;
}
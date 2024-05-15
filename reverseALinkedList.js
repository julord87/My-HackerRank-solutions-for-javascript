// reverse linked list (devolviendo una linked list (data estructure) en reversa)

function reverse(llist) {
    let next = null;
    let current = llist;
    let prev = null;
    
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current
        current = next
    }
    return prev;
}
// reverse linked list (devolviendo una linked list (data estructure) en reversa)

function reverse(llist) {
    let prev = null;
    let current = llist;
    
    while(current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}
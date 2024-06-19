// insert a node at a specific position in a linked list

function insertNodeAtPosition(llist, data, position) {
    let currentPosition = 0;
    let current = llist;
    let prev = null;
    
    let dataNode = {
        data: data,
        next: null
    }
    
    if(position === 0) {
        data.next = llist;
        return data;
    }
    
    while(current) {
        if(position === currentPosition) {
            prev.next = dataNode;
            dataNode.next = current;
            return llist;
        }
        prev = current;
        current = current.next;
        currentPosition ++
    }
    
    return llist;
}
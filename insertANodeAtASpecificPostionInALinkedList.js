// insert a node at a specific position in a linked list

function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode(data);
    let current = head;
    let currentPosition = 0;

    // Caso especial para la cabeza de la lista
    if (position === 0) {
        newNode.next = head;
        return newNode;
    }

    // Recorre la lista hasta llegar a la posición anterior a la deseada
    while (currentPosition < position - 1 && current !== null) {
        current = current.next;
        currentPosition++;
    }

    // Inserta el nuevo nodo
    if (current !== null) {
        newNode.next = current.next;
        current.next = newNode;
    }

    return head;
};


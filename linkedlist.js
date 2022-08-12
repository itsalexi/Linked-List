class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        if (this.head == null) {
            return (this.head = this.createNode(value));
        }

        let current = this.traverse(this.head);
        return (current.next = this.createNode(value));
    }

    get tail() {
        return this.traverse(this.head);
    }

    traverse(head) {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    createNode(value) {
        return new Node(value);
    }
}

function createList() {
    const linkedList = new LinkedList();
    return linkedList;
}

let newLinkedList = createList();

newLinkedList.append(6);
newLinkedList.append(13);
newLinkedList.append(5);
newLinkedList.append(12);
newLinkedList.append(124);

// console.log(JSON.stringify(newLinkedList));
console.log(newLinkedList.tail);

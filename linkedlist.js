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
            this.size++;
            return (this.head = this.createNode(value));
        }

        let current = this.traverse(this.head);
        this.size++;
        return (current.next = this.createNode(value));
    }

    pop() {
        let last = this.at(this.size - 2);
        last.next = null;
        this.size--;
    }

    get tail() {
        return this.traverse(this.head);
    }

    at(index) {
        let current = this.head;
        if (index == 0) return current;

        for (let i = 1; i <= index; i++) {
            current = current.next;
        }
        return current;
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

newLinkedList.append(6); // 0
newLinkedList.append(13); // 1
newLinkedList.append(5); // 2
newLinkedList.append(12); // 3
newLinkedList.append(124); // 4
newLinkedList.pop();
console.log(JSON.stringify(newLinkedList));

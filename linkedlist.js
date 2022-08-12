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

    prepend(value) {
        let currentHead = this.head;
        let newHead = this.createNode(value);
        newHead.next = currentHead;
        this.head = newHead;
    }

    insertAt(value, index) {
        let selected = this.at(index);
        let selectedNext = selected.next;

        let newNode = this.createNode(value);
        newNode.next = selectedNext;
        selected.next = newNode;
        this.size++;
    }

    removeAt(index) {
        let before = this.at(index - 1); // this is the index BEFORE the one you want to remove
        if (!before) return;
        let selected = before.next; // this is the node you want to remove
        let selectedNext = selected.next; // this is the node's children, we want to keep this
        before.next = selectedNext;
        this.size--;
    }

    contains(value) {
        let current = this.head;
        while (current.next != null) {
            if (current.next.value == value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value) {
        let index = 0;
        for (let i = 0; i < this.size; i++) {
            let current = this.at(index);
            if (current.value == value) {
                return index;
            }
            index++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let string = '';
        while (current !== null) {
            string += `(${current.value}) -> `;
            current = current.next;
        }
        string += `(null)`;
        return string;
    }

    pop() {
        let last = this.at(this.size - 1);
        last.next = null;
        this.size--;
    }

    get tail() {
        return this.traverse(this.head);
    }

    at(index) {
        if (index > this.size - 1) return false;
        let current = this.head;
        if (index == 0) return current;

        for (let i = 1; i <= index; i++) {
            current = current.next;
        }
        return current;
    }

    traverse(head) {
        let current = head;
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

newLinkedList.prepend(12); // 0
newLinkedList.append(6); // 1
newLinkedList.append(13); // 2
newLinkedList.append(5); // 3
newLinkedList.append(4); // 4
newLinkedList.append(124); // 5

console.log(newLinkedList.toString());

newLinkedList.removeAt(6); // shouldn't do anything
newLinkedList.removeAt(3); // should remove 5

console.log(newLinkedList.toString());

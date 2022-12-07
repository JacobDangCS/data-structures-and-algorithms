'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }


    //append
    append(value) {
        let node = new Node(value);
        //if no head exists, assign the new node as head
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.count++;
    }

    //Kth Method

    kthFromEnd(k) {
        if (k === 0) {
            return this.tail.value;
        } if (k > this.count) {
            return 'Invalid';
        } let result = this.count - k;
        let current = this.head;
        for (let i = 0; i < result; i++) {
            current = current.next;
        }
        return current.value;
    }
}
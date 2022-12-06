'use strict';

class Node {
    constructor (value){
        this.value = value;
        this.next = null; 
    }
 }

 class LinkedList {
    constructor(){
        this.head = null;
    }

    //append
    append(value){
        let node = new Node(value);
        //if no head exists, assign the new node as head
        if(!this.head){
            this.head = node;
            return;
        }
    }

    //insert before
    insertBefore(beforeValue, value){
        let node = new Node(value);
        if (this.head === null){
           throw new Error ('Linked List is empty, cannot add beforeValue'); 
        }

        if (this.head.value === beforeValue){
            node.next = this.head;
            this.head = node;
            return;
        } 
        let current = this.head;
        while(current.next !== null){
            if (current.next.value === beforeValue){
                node.next = current.next;
                current.next = node;
                return;
            }
        else {
            current = current.next;
        }
    }
    throw new Error (`${beforeValue} not found`);
};



    //insert after
    insertAfter(afterValue, value){
        let node = new Node(value);
        if (this.head === null){
           throw new Error ('Linked List is empty, cannot add afterValue'); 
        }

        if (this.head.value === afterValue){
            node.next = this.head;
            this.head = node;
            return;
        } 
        let current = this.head;
        while(current.next !== null){
            if (current.next.value === afterValue){
                node.next = current.next;
                current.next = node;
                return;
            }
        else {
            current = current.next;
        }
    }
    throw new Error (`${afterValue} not found`);

}
};

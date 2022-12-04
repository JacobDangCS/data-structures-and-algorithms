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

    //Methods
    add(value){
        let node = new Node(value);
        //if no head exists, assign the new node as head
        if(!this.head){
            this.head = node;
            return;
        }
        //traverse linked list & adds new node to the end
     let current = this.head;
        while(current.next){
            current = current.next;
        }
            current.next = node;
    }

    // traverse the linked list and add new node to the end
    traverse(){
        let current = this.head;        
        while(current){
            // performs the task
            console.log(current.value);
            current = current.next;
        }
    }

//Methods    
    insert(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    includes(value){
        let current = this.head;
        while (current !== null){
            if (current.value == value)
            return true;
            current = node.next;
        }
            return false;
    }


    toString(){
        let current = this.head;
        let newString = '';
        while (current !== null){
            newString += `{${current.value} }`;
            current = current.next;
        }
        newString += 'null';
        return new String
    }
 }

let list = new LinkedLinked();
list.add('a');
list.add('b');
list.add('c');

console.log(list);

 module.exports = LinkedList;


 //Traverse method
 //current = this.head;
        
 //while(current){
     // performs the task
    // console.log(current.value);
     //current = current.next;
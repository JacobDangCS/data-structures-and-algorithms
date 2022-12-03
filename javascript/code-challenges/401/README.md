# Singly Linked List
<!-- Short summary or background information -->
This challenge asks for an implementation of a singly linked list.

## Challenge
<!-- Description of the challenge -->
- Create a linked list that includes the following methods --> insert, includes, & to string
- Create tests to test the following:
1. Can successfully instantiate an empty linked list
2. Can properly insert into the linked list
3. The head property will properly point to the first node in the linked list
4. Can properly insert multiple nodes into the linked list
5. Will return true when finding a value within the linked list that exists
6. Will return false when searching for a value in the linked list that does not exist
7. Can properly return a collection of all the values that exist in the linked list

## Approach & Efficiency
Following Instructor Ryan's methodology and hints. I was able to merge together given information and fill in the blanks to this challenge.
In terms of Big O space/time, I'm not quite sure yet.

## API
Insert:
    insert(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

Include:
    includes(value){
        let current = this.head;
        while (current !== null){
            if (current.value == value)
            return true;
            current = node.next;
        }
            return false;
    }

To String:
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
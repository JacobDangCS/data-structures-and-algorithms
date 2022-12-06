'use strict';

const LinkedList = require('./challenge-05.js');

describe('Linked List', () => {
    let list = new LinkedList();
    it ('accepts new nodes as expected', () => {
         list.add('a');
         list.add('b');
         list.add('c');
         // visual: {a} -> {b} -> {c} -> null
         expect(list.head.value).toEqual('a');
         expect(list.head.next.value).toEqual('b');
         expect(list.head.next.next.value).toEqual('c');
     });

//Follows the list given from Code Challenge Assignment
     it('Can successfully add multiple nodes to the end of a linked list', () => {
        let list = new LinkedList();
        list.add('a');
        expect(list.head.value).toEqual('a');
        expect(list.tail.value).toEqual('a');
        list.add('b');
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.tail.value).toEqual('b');
     });

     it('Can successfully insert a node before a node located in the middle of a linked list', () => {
        let list = new LinkedList();
         list.insert('c');
         list.insertBefore('c', 'a');
         expect(list.head.value).toEqual('a');
         expect(list.head.next.value).toEqual('c');
         expect(list.head.next.next).toEqual(null);
         expect(list.tail.value).toEqual('c');
         expect(list.tail.next).toEqual(null);
         list.insertBefore('c', 'b');
         expect(list.head.value).toEqual('a');
         expect(list.head.next.value).toEqual('b');
         expect(list.head.next.next.value).toEqual('c');
         expect(list.head.next.next.next).toEqual(null);
         expect(list.tail.value).toEqual('c');
         expect(list.tail.next).toEqual(null);
     });

     it('Can successfully insert a node before the first node of a linked list', () => {
        let list = new LinkedList();
        list.insert('b');
        list.insertBefore('b', 'a');
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next).toEqual(null);
        expect(list.tail.value).toEqual('b');
        expect(list.tail.next).toEqual(null);
     });

    it('Can successfully insert after a node in the middle of the linked list', () => {
        let list = new LinkedList();
        list.insert('a');
        list.insertAfter('a', 'c');
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('c');
        expect(list.head.next.next).toEqual(null);
        expect(list.tail.value).toEqual('c');
        expect(list.tail.next).toEqual(null);
        list.insertAfter('a', 'b');
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
        expect(list.head.next.next.next).toEqual(null);
        expect(list.tail.value).toEqual('c');
        expect(list.tail.next).toEqual(null);
     });

     it('Can successfully insert a node after the last node of the linked list', () => {
        let list = new LinkedList();
        list.insert('a');
        list.insertAfter('a', 'b');
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next).toEqual(null);
        expect(list.tail.value).toEqual('b');
        expect(list.tail.next).toEqual(null);
     });

});


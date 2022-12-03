'use strict';

const { isTag } = require('domhandler');
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
     it('Can successfully instantiate an empty linked list', () => {
        let list = new LinkedList();
        expect(list.head).toEqual(null);
     });

     it('Can properly insert into the linked list', () => {
        let list = new LinkedList();
        list.add('a');
        expect(list.head.value).toEqual('a');
     });

     it('Head property will properly point to the first node in the linked list', () => {
        let list = new LinkedList();
        list.add('a');
        list.add('b');
        expect(list.head.value).toEqual('b');
     });

    it('Can properly insert multiple nodes into the linked list', () => {
        let list = new LinkedList();
        list.add('a');
        list.add('b');
        list.add('c');
        expect(list.head.value).toEqual('c');
        expect(list.head.value).toEqual('b');
        expect(list.head.value).toEqual('a');
     });

    it('Will return true when finding a value within the linked list that exists', () => {
        let list = new LinkedList();
        list.add('a');
        list.add('b');
        expect(list.includes('a')).toEqual(true);
        expect(list.includes('b')).toEqual(true);
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        let list = new LinkedList();
        list.add('a');
        list.add('b');
        expect(list.includes('c')).toEqual(false);
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        let list = new LinkedList();
        list.add('a');
        list.add('b');
        list.add('c');
        expect(list.toString()).toEqual(`{c} => {b} => {1} => NULL`);
    });
});

//test => make sure link list is null from head
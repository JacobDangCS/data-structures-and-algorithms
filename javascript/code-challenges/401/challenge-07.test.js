'use strict';

const LinkedList = require('./challenge-07.js');

describe('Linked List', () => {
    let list = new LinkedList();
    it('accepts new nodes as expected', () => {
        list.add('a');
        list.add('b');
        list.add('c');
        // visual: {a} -> {b} -> {c} -> null
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
    });

    it('Where k is greater than the length of the linked list ', () => {
        let list = new LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('c');
        expect(list.kthFromEnd(1)).toEqual('b');
        expect(list.kthFromEnd(0)).toEqual('c');

    });

    it('Where k and the length of the list are the same', () => {
        let list = new LinkedList();
        list.insert('a');
        list.insert('b');
        list.insert('c');
        expect(list.kthFromEnd(3)).toThrow();
    });

    it('Where k is not a positive integer', () => {
        let list = new LinkedList();
        list.insert('a');
        list.insert('b');
        expect(list.kthFromEnd(-1)).toThrow('K is not positive');
    });

    it('Where the linked list is of a size 1', () => {
        let list = new LinkedList();
        list.insert('a');
        expect(list.kthFromEnd(0)).toThrow();
    });

    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let list = new LinkedList();

    });

});
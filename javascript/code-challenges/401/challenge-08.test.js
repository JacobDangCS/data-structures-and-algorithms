'use strict';

const {LinkedList, zipList} = require('./challenge-08.js');

describe('Linked List', () => {   
    it('accepts new nodes as expected', () => {
    let list = new LinkedList();
        list.add('a');
        list.add('b');
        list.add('c');
        // visual: {a} -> {b} -> {c} -> null
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
    });

    it('append works as expected', () => {
        let list = new LinkedList();
        list.add('a');
        expect(list.head.value).toEqual('a');

    });

    it('traverse works as expected', () => {
        let list = new LinkedList();
        list.add('a');
        list.add('b');
        list.add('c');
        expect(list.toString()).toEqual(`{c} -> {b} -> {1} -> NULL`);
    });

    it('zipped list works as expected', () => {
    let listOne = new LinkedList();
    let listTwo = new LinkedList();
    listOne.append('a');
    listOne.append('b');
    listOne.append('c');
    listTwo.append('d');
    listTwo.append('e');
    listTwo.append('f');
    let finalList = zipList(listOne, listTwo);
    expect(finalList.toString()).toEqual('{a} -> {d} -> {b} -> {e} -> {c} -> {f} -> NULL');
    });
});

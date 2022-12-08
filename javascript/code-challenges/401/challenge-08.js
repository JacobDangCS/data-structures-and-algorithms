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

  //Methods
  add(value) {
    let node = new Node(value);
    //if no head exists, assign the new node as head
    if (!this.head) {
      this.head = node;
      return;
    }
    //traverse linked list & adds new node to the end
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
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

  traverse() {
    let current = this.head;
    while (current) {
      // performs the task
      console.log(current.value);
      current = current.next;
    }
  }

  toString() {
    let current = this.head;
    let newString = '';
    while (current !== null) {
      newString += `{${current.value.value} }`;
      current = current.next;
    }
    newString += 'null';
    return newString;
  }
}

//zip method
function zipList(listOne, listTwo) {
  let currentOne = listOne.head;
  let currentTwo = listTwo.head;
  let zipList = new LinkedList();
  while (currentOne && currentTwo) {
    zipList.append(currentOne);
    zipList.append(currentTwo);
    currentOne = currentOne.next;
    currentTwo = currentTwo.next;
  }

  if (!currentOne && currentTwo) {
    zipList.append(currentTwo);
  }

  if (currentOne && !currentTwo) {
    zipList.append(currentOne);
  }
  return zipList;
}


module.exports = { LinkedList, zipList };

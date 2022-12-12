'use strict';


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if(!this.top) throw new Error ('Empty stack');
    let node = this.top;
    this.top = this.top.next;
    node.next = null;
    return node.value;
  }

  peek() {
    if(!this.top) throw new Error ('Empty stack');
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }

}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.back) this.back = node;
    else{
      this.back.next = node;
      this.back = node;
    }
    if (!this.front) this.front = node;
  }

  dequeue() {
    if (!this.front) throw new Error('Empty queue');
    let node = this.front;
    this.front = this.front.next;
    if (this.front === null) this.back = null;
    node.next = null;
    return node.value;

  }

  peek() {
    if (!this.front) throw new Error('Empty queue');
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

}

module.exports = {Stack, Queue};

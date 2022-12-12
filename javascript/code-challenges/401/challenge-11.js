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
    if (!this.top) throw new Error('Empty stack');
    let node = this.top;
    this.top = this.top.next;
    node.next = null;
    return node.value;
  }

  peek() {
    if (!this.top) throw new Error('Empty stack');
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }

}

class PseudoQueue {
  constructor() {
    this.inputStack = new Stack;
    this.outputStack = new Stack;
  }

  enqueue(value) {
    this.inputStack.push(value);
  }

  dequeue() {
    while (this.inputStack.top !== null) {
      let data = this.inputStack.pop();
      this.outputStack.push(data);
    }

    let output = this.outputStack.pop();
    while (this.outputStack.top !== null) {
      let data = this.outputStack.pop();
      this.inputStack.push(data);
    }
    return output;
  }
}

module.exports = { Stack, PseudoQueue };

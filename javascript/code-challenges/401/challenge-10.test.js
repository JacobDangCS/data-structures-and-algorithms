'use strict';

const { Stack } = require('./challenge-10');
const { Queue } = require('./challenge-10');

describe('Tests stack & queue', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push('a');
    expect(stack.top.value).toEqual('a');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.top.value).toEqual('c');
    expect(stack.top.next.value).toEqual('b');
    expect(stack.top.next.next.value).toEqual('a');
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.top.value).toEqual('b');
    expect(stack.top.next.value).toEqual('a');
    expect(stack.top.next.next).toEqual(null);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.peek()).toEqual('c');
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toEqual(null);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(() => stack.peek()).toThrow('Empty stack');
    expect(() => stack.pop()).toThrow('Empty stack');
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('a');
    expect((queue.back)).not.toEqual(null);
    expect((queue.front)).not.toEqual(null);
    expect((queue.back.value)).toEqual('a');
    expect((queue.front.value)).toEqual('a');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect((queue.front.value)).toEqual('a');
    expect((queue.front.next.value)).toEqual('b');
    expect((queue.front.next.next.value)).toEqual('c');
    expect((queue.back.value)).toEqual('c');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('c');
    queue.dequeue();
    expect(queue.front.value).toEqual('b');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.peek()).toEqual('a');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);
  });

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.front).toEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    expect(() => queue.peek()).toThrow('Empty queue');
    expect(() => queue.dequeue()).toThrow('Empty queue');
  });

});

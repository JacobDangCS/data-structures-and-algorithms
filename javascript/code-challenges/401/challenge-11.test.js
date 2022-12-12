'use strict';

const { PseudoQueue } = require('./challenge-11');

describe('Pseudo Queue method testing', () => {
  let pseudo = new PseudoQueue();


  it('Should enqueue into a queue', () => {
    pseudo.enqueue('a');
    expect(pseudo.inputStack.top.value).toEqual('a');

  });

  it('Should enqueue multiple queues into queue', () => {
    pseudo.enqueue('b');
    pseudo.enqueue('c');
    pseudo.enqueue('d');
    expect(pseudo.inputStack.top.value).toEqual('d');
    expect(pseudo.inputStack.top.next.value).toEqual('c');
    expect(pseudo.inputStack.top.next.next.value).toEqual('b');
    expect(pseudo.outputStack.top).toBeNull();
  });


  it('Should dequeue into a queue', () => {
    pseudo.dequeue('b');
    pseudo.dequeue('c');
    pseudo.dequeue('d');
    expect(pseudo.inputStack.top.value).toEqual('d');
  });

});

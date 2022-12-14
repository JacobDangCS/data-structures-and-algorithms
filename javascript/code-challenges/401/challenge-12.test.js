'use strict';

const { AnimalShelter } = require('./challenge-12');

describe('Testing Animal Shelter Queues', () => {
  let animal = new AnimalShelter();

  it('Can successfully enqueue an animal', () => {
    animal.enqueue('dog');
    expect(animal.dog.value).toEqual('dog');
  });


  it('Can successfully dequeue an animal ', () => {
    animal.dequeue('dog');
    animal.dequeue('cat');
    animal.dequeue('dog');
    expect(animal.cat.value).toEqual('cat');
  });


  it('Can return null if no preference', () => {
    animal.dequeue('a');
    expect(animal.value).toEqual(null);
  });

});

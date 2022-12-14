'use strict';

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }
}

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if (animal === 'dog'){this.dog.enqueue(animal);}
    if (animal === 'cat'){this.cat.enqueue(animal);}
  }

  dequeue(pref) {
    if (pref === 'dog') {return this.dog.dequeue();}
    if (pref === 'cat') {return this.cat.dequeue();}
    else if (!pref){ return null; }
  }
}

module.exports = { AnimalShelter };


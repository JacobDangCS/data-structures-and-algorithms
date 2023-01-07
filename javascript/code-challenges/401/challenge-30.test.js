'use strict';

const HashTable = require('./challenge-30');

describe('Hash table testing', () => {

  it('Tests hash', () => {
    const hashTable = new HashTable(21);
    expect(hashTable.hash('Jacob')).toBeLessThan(21);
  });

  it('Tests set & get', () => {
    const hashTable = new HashTable();
    hashTable.set('Jacob', '21');
    expect(hashTable.get('Jacob')).toBe('21');

  });

  it('Tests has', () => {
    const hashTable = new HashTable(21);
    hashTable.set('Jacob', '21');
    hashTable.set('Diana', '22');
    hashTable.set('Cindy', '23');
    expect(hashTable.has('Jacob')).toBe(true);
  });


  it('Tests keys', () => {
    const hashTable = new HashTable(21);
    hashTable.set('Jacob', 21);
    expect(hashTable.keys()).toContain('Jacob');
  });

});


'use strict';

const mergeSort = require('./challenge-27');

describe('Tests merge sort', () => {

  it('Can sort an array of numbers', () => {
    const array = [8, 4, 23, 42, 16, 15];
    mergeSort(array);
    expect(array).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Can reverse order of numbers in array', () => {
    const array = [20, 18, 12, 8, 5, -2];
    mergeSort(array);
    expect(array).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Can sort array of numbers with same numbers', () => {
    const array = [5, 12, 7, 5, 5, 7];
    mergeSort(array);
    expect(array).toEqual([5, 5, 5, 7, 7, 12]);
  });

});

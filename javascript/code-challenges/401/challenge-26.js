'use strict';

function insertSort(array) {
  for (let i = 0; i < length; i++) {
    let j = i - 1;
    let current = array[i];
    while (j >= 0 && current < array[j]) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = current;
  }

  return array;

}

module.exports = insertSort;

'use strict';

function mergeSort(array) {

  const length = array.length;
  const mid = Math.floor(length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  if (array.length === 1) {
    return array;
  }

  mergeSort(left);
  mergeSort(right);
  return merge(left, right, array);

}


function merge(left, right, array){
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length){
    if (left[i] <= right[j]){
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
      k++;
    }
    return array;
  }
  
  if (i < right.length){
    array[k] = right[j];
    j++;
    k++;
  } else if (i < left.length){
    array[k] = left[j];
    j++;
    k++;
  }
  
}

module.exports = mergeSort;

'use strict';

function leftJoin(hashMap1, hashMap2) {
  let results = [];
  for (let key of hashMap1.keys()) {
    let arr = [key, hashMap1.get(key)];
    arr.push(hashMap2.get(key));
    results.push(arr);
  }
  return results;
}

module.exports = leftJoin;

'use strict';


class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};

    if (this.buckets[position]){
      this.buckets[position] = data;
    } else {
      this.buckets[position][key] = value;
    }
  }

  get(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      let value = this.buckets[position][key];
      return value;
    } else {
      return null;
    }
  }

  has(key){
    let position = this.hash(key);

    if(this.buckets[position]){
      this.buckets[position] [key] = true;
    } else {
      return false;
    }
  }

  keys(){
    let keys = [];
    this.buckets.forEach((item) => {
      if (item) keys.push(...Object.keys(item));
    });
    return keys;
  }

}

let table = new HashTable(1024);
console.log(table);
console.log('Jacob', table.hash('Jacob'));
console.log('Diana', table.hash('Diana'));
console.log('Cindy', table.hash('Cindy'));
console.log('Howard', table.hash('Howard'));
table.set('Jacob', 21);
//console.log(JSON.stringify{table.buckets[HASH NUMBER of JACOB]});
table.set('Jacob', 'Random Value');
console.log('Jacob\'s value', table.get('Jacob'));

'use strict';

class Queue {
  constructor(){
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(tree) {
  let queue = new Queue();
  let values = [];
  queue.enqueue(tree.root);

  while (!queue.isEmpty()){
    let currentNode = queue.dequeue();
    values.push(currentNode.value);

    if(currentNode.left) queue.enqueue(currentNode.left);

    if (currentNode.right) queue.enqueue(currentNode.right);
  }
  return values;
}

module.exports = { breadthFirst };

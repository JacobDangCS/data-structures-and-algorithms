'use strict';


//building off Challenge 15 methods

class Tree {
  constructor() {
    this.root = null;
  }

  maxValue() {
    if (!this.root) {
      return 'Error: Empty Tree';
    }

    let current = new Node(this.root.value);
    const traverse = (node) => {
      if (node.value > current.value) {
        current.value = node.value;
      }

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return current.value;

  }
}

module.exports = { Tree };

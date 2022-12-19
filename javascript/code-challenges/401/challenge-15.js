'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const traverse = (node) => {
      console.log(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }

  inOrder() {
    const traverse = (node) => {
      console.log(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {
      console.log(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }
}

class SearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (current) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (current) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }
}

module.exports = { Node, KaryNode, KaryTree, Tree, SearchTree };

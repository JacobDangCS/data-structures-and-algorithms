'use strict';

const { Tree } = require('./tree');

describe('Tree', () => {
  it('Finds max value as expected', () => {
    let tree = new Tree();
    tree.root = new Node (10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.maxValue()).toEqual(17);
  });

});

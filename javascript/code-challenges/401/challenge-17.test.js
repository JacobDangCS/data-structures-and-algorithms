'use strict';

const { breadthFirst } = require('./challenge17');
const { Tree } = require('./challenge-15');

describe('Breadth Tree', () => {
  it('Finds values in order of breadth first as expected', () => {
    let tree = new Tree();
    tree.root = new Node (10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(breadthFirst(tree)).toEqual([10, 5, 15, 1, 8, 17]);
  });

});

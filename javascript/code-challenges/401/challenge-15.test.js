'use strict';

const { Node, Tree, SearchTree } = require('./tree');

describe('Tree', () => {
  it('Creates as expected', () => {
    let tree = new Tree();
    tree.root = new Node (10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
  });

  it('Returns a preOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node (10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.preOrder()).toEqual([10, 5, 1, 8, 15, 17]);
  });

  it('Returns a preOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node (10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.inOrder()).toEqual([10, 5, 1, 8, 15, 17]);
  });

  it('Returns a preOrder traversal array as expected', () => {
    let tree = new Tree();
    tree.root = new Node (10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);
    expect(tree.postOrder()).toEqual([10, 5, 1, 8, 15, 17]);
  });

  it('Creates as expected', () => {
    let searchTree = new SearchTree();
    searchTree.root = new Node (10);
    searchTree.root.left = new Node(5);
    searchTree.root.right = new Node(15);
    searchTree.root.left.left = new Node(1);
    searchTree.root.left.right = new Node(8);
    searchTree.root.right.right = new Node(17);
    expect(searchTree.root.value).toEqual(10);
    expect(searchTree.root.left.value).toEqual(5);
  });

  it('Returns adds to traversal array as expected', () => {
    let searchTree = new SearchTree();
    searchTree.add(10);
    searchTree.root.add(5);
    expect(searchTree.root.value).toEqual(10);
    expect(searchTree.root.left.value).toEqual(5);
  });

  it('Returns contains values in traversal array as expected', () => {
    let searchTree = new SearchTree();
    searchTree.contains(10);
    searchTree.root.contains(5);
    expect(searchTree.root.value).toEqual(true);
    expect(searchTree.root.left.value).toEqual(true);
  });
});

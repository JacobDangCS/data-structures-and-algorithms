const { treeIntersection } = require('./tree-intersection');

describe('Testing Tree intersection', () => {

  test('Can return shared values', () => {
    let tree = new treeIntersection();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(4);
  });

  describe('Tests for function', () => {
    it('Returns an empty array if no shared values', () => {
      expect(treeIntersection).toEqual([]);

    });

    it('Returns an array of shared values', () => {
      expect(treeIntersection).toEqual([5,6,7]);
    });
  });
});

'use strict';

const HashMap = require('../401/challenge-30');


function treeIntersection(treeA, treeB) {
  if (!treeA.root || !treeB.root) return [];
  let table = new HashMap();
  let resultsArr = [];

  let traverse = (node, value) => {
    table.add(node.value, node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    if (!table.has(value)) {
      table.set(value, 1);
    }
  };

  traverse(treeA.root);

  let secondTraverse = (node, value) => {
    if (table.contains(node.value)) resultsArr.push(node.value);
    if (node.left) secondTraverse(node.left);
    if (node.right) secondTraverse(node.right);

    const check = table.get(value);
    if (check === 1) {
      resultsArr.push(value);
      table.set(value, 2);
    }
  };

  secondTraverse(treeB.root);

  return resultsArr;
}


module.exports = treeIntersection;

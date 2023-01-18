'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }


  depthFirst(root, callback) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      // first time we get the root vertex
      current = stack.pop();

      // if a callback has been passed in, then we "do the thing"
      if (callback) callback(current.value);

      // grab neighbor if they exist
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }
}

module.exports = { Vertex, Edge, Graph };

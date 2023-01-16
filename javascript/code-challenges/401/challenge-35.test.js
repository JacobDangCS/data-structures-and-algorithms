const Graph = require('./challenge-35');

describe('Tests the graph structure', () => {

  const graph = new Graph();

  const A = graph.addVertex('A');
  const B = graph.addVertex('B');
  const C = graph.addVertex('C');
  const D = graph.addVertex('D');
  const E = graph.addVertex('E');
  const F = graph.addVertex('F');
  const G = graph.addVertex('G');
  const H = graph.addVertex('H');

  it('Tests for an added vertex', () => {
    expect(graph.adjacencyList.has(A)).toBe(true);
    expect(graph.adjacencyList.has(B)).toBe(true);
    expect(graph.adjacencyList.has(C)).toBe(true);
    expect(graph.adjacencyList.has(D)).toBe(true);
    expect(graph.adjacencyList.has(E)).toBe(true);
    expect(graph.adjacencyList.has(F)).toBe(true);
    expect(graph.adjacencyList.has(G)).toBe(true);
    expect(graph.adjacencyList.has(H)).toBe(true);
  });

  it('Tests for an added edge', () => {

  });

  it('Tests for get all', () => {

  });

  it('Tests for neighbors retrieved', () => {

  });

  it('Tests for neighbors and their weight between vertex', () => {
    expect(graph.getNeighbors(A)[0].weight).toEqual(1);
    expect(graph.getNeighbors(B)[0].weight).toEqual(2);
    expect(graph.getNeighbors(B)[1].weight).toEqual(3);
    expect(graph.getNeighbors(C)[0].weight).toEqual(4);
    expect(graph.getNeighbors(D)[0].weight).toEqual(5);
    expect(graph.getNeighbors(D)[1].weight).toEqual(6);
    expect(graph.getNeighbors(E)[0].weight).toEqual(7);
    expect(graph.getNeighbors(E)[0].weight).toEqual(8);
    expect(graph.getNeighbors(G)[1].weight).toEqual(9);
    expect(graph.getNeighbors(H)[0].weight).toEqual(10);
  });

  it('Tests for the proper size returned', () => {

  });

  it('Tests for a graph with one vertex and edge', () => {

  });

});

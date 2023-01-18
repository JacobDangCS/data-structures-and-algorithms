'use strict';

const businessTrip = require('./challenge-37');
const Graph = require('./challenge-35');

describe('Testing businessTrip function', () => {
  let graph = new Graph();
  let pandora = graph.addVertex('pandora');
  let arendelle = graph.addVertex('arendelle');
  let metroville = graph.addVertex('metroville');
  let monstropolis = graph.addVertex('monstropolis');
  let naboo = graph.addVertex('naboo');
  let narnia = graph.addVertex('fig forest');

  graph.addDirectedEdge(pandora, arendelle, 150);
  graph.addDirectedEdge(arendelle, monstropolis, 42);
  graph.addDirectedEdge(pandora, metroville, 82);
  graph.addDirectedEdge(metroville, narnia, 37);
  graph.addDirectedEdge(narnia, naboo, 250);
  graph.addDirectedEdge(naboo, monstropolis, 73);

  it('Returns true & correct cost for one path input', () => {
    let results = businessTrip(graph, [pandora, arendelle, monstropolis]);
    expect(results).toStrictEqual([true, 192]);
  });

  it('Returns false & 0 for a failing location list', () => {
    let results = businessTrip(graph, [pandora, arendelle, naboo]);
    expect(results).toStrictEqual([false, 0]);
  });

  it('Returns true & correct cost for a back and forth trip', () => {
    let results = businessTrip(graph, [narnia, naboo, narnia, metroville]);

    expect(results).toStrictEqual([true, 537]);
  });
});

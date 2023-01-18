'use strict';


function businessTrip(graph, locations) {
  let currentLocation = locations.shift();
  let tripCost = 0;

  while (locations.length > 0) {
    const neighboringCities = graph.getNeighbors(currentLocation);
    currentLocation = locations.shift();
    let found = false;
    for (const location of neighboringCities) {
      if (location.vertex === currentLocation) {
        tripCost += location.weight;
        found = true;
        break;
      }
    }
    if (!found) {
      return [false, 0];
    }
  }
  return [true, tripCost];
}


module.exports = businessTrip;

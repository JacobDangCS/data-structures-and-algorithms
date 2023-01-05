'use strict';

const movies = require('./movies');

console.log(movies);

function sortYear(movies) {
  return movies.sort(compareYear);
}

function compareYear(a, b) {
  if (a.year - b.year < 0) return -1;
  else if (a.year - b.year > 0) return 1;
  else return 0;
}

function sortTitle(movies) {
  return movies.sort(compareTitle);
}

function compareTitle(a, b) {
  let titleA = a.title.replace('The ', '');
  let titleB = b.title.replace('The ', '');

  if (titleA < titleB) return -1;
  else if (titleA > titleB) return 1;
  else return 0;

}


module.exports = { sortYear, sortTitle, compareYear, compareTitle };


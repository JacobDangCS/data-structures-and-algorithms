'use strict';

const { validateBrackets } = require('./challenge-13');

describe('It validates brackets using given function', () => {
  it('Returns false when given an empty string', () => {
    expect(validateBrackets('')).toEqual(false);
  });


  it('Return true for one balanced bracket', () => {
    expect(validateBrackets('[]')).toEqual(true);
  });

  it('Returns true for multiple balanced brackets', () => {
    expect(validateBrackets('()[]{}')).toEqual(true);
  });

  it('Returns false when given unbalanced brackets', () => {
    expect(validateBrackets('[[()]')).toEqual(false);
  });

});

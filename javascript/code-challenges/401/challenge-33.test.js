const leftJoin = require('./challenge-33');
const HashMap = require('./challenge-30');

test('Tests function of leftJoin', () => {
  const hashMap1 = new HashMap();
  const hashMap2 = new HashMap();
  hashMap1.set('fond', 'enamored');
  hashMap1.set('wrath', 'anger');
  hashMap1.set('diligent', 'employed');
  hashMap2.set('fond', 'averse');
  hashMap2.set('wrath', 'delight');
  hashMap2.set('diligent', 'idle');

  let results = leftJoin(hashMap1, hashMap2);

  expect(results).toEqual([
    ['fond', 'enamored', 'averse'],
    ['wrath', 'anger', 'delight'],
    ['diligent', 'employed', 'idle']
  ]);
});

test('Tests function if there`s an empty hashmap', () => {
  const hashMap1 = new HashMap();
  const hashMap2 = new HashMap();
  hashMap2.set('fond', 'averse');
  hashMap2.set('wrath', 'delight');
  hashMap2.set('diligent', 'idle');

  let results = leftJoin(hashMap1, hashMap2);

  expect(results).toEqual([]);
});

test('Tests function if there`s an empty hashmap2', () => {
  const hashMap1 = new HashMap();
  const hashMap2 = new HashMap();
  hashMap1.set('fond', 'enamored');
  hashMap1.set('wrath', 'anger');
  hashMap1.set('diligent', 'employed');

  let results = leftJoin(hashMap1, hashMap2);

  expect(results).toEqual([
    ['fond', 'enamored', null],
    ['wrath', 'anger', null],
    ['diligent', 'employed', null]
  ]);
});

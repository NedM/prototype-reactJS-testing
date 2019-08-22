test('two, two times', () => {
  const value = 2*2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(10);
  expect(value).toBeLessThanOrEqual(4.000001);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Bools
test('true', () => {
  const value = true;

  expect(value).toBeDefined();
  expect(value).not.toBeNull();
  expect(value).not.toBeUndefined();
  expect(value).toBeTruthy();
  expect(value).not.toBeFalsy();
  expect(value).toBe(true);
});

// Null
test('null', () => {
  const value = null;

  expect(value).toBeDefined();
  expect(value).not.toBeUndefined();
  expect(value).not.toBeTruthy();
  expect(value).toBeFalsy();
  expect(value).toBeNull();
});

// Strings
test('there is no I in team', () => {
  // Match + RegEx
  expect('team').not.toMatch(/I/);
});

test('there is a me in meat', () => {
  expect('meat').toContain('me');
});

test('string equality', () => {
  const myString = 'This is my string. There are many like it but this one is mine.';
  const myOtherString = 'This is my string. There are many like it but this one is mine.';
  // toBe and toEqual use Object.is to compare which is equivalent for primitive values
  expect(myString).toEqual(myOtherString);
  expect(myString).toBe(myOtherString);
});

// Arrays & Sets
const shoppingList = [
  'diapers',
  'trash bags',
  'beer',
  'paper towels',
  'wine',
  'cleaning products',
  'laundry detergent',
  'liquor',
];

test("don't forget the beer!", () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

test('arrays containing arrays', () => {
  expect([
    ['diapers', 'wipes'],
    ['beer', 'scotch', 'wine'],
    ['paper towels', 'cleaning products'],
  ]).toContainEqual(['beer', 'scotch', 'wine']);
});

test('array of objects', () => {
  expect([{a: 1, b: 2}, {c: [3, 4, 5]}]).toContainEqual({c: [3, 4, 5]});
});

// Objects
test('object equality', () => {
  const objA = {
    name: 'My Favorite Object',
    price: null,
    value: Infinity
  };
  const objB = {
    name: 'My Favorite Object',
    price: null,
    value: Infinity
  };
  // toBe checks reference equality whereas toEqual does a deep property comparison
  // Objects have same property values
  expect(objA).toEqual(objB);
  // But are not the same object (reference inequality)
  expect(objA).not.toBe(objB);
});

// Arrays + Strings
const expected = [
  expect.stringMatching(/^Ninj/),
  expect.stringContaining('rates'),
  expect.stringMatching(/^[BR]ob/),
];

test('matches even if it contains additional elements', () => {
  const testList = ['Robots' , 'Ninjas', 'Pirates', 'Mutants'];

  expect(testList).toEqual(expect.arrayContaining(expected));
});

test('Does not match if array does not contain all expected elements', () => {
  const testList = ['Robots', 'Aliens', 'Mutants'];

  expect(testList).not.toEqual(expect.arrayContaining(expected));
})

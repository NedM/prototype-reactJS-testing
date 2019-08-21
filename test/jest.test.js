test('twice two', () => {
  expect(2*2).toBe(4);
});

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

// Mocks
test('returns the correct value', () => {
  const mocked = jest.fn().mockReturnValue('the correct value');

  expect(mocked()).toBe('the correct value');
});

test('mock name is correct', () => {
  const mocked = jest.fn().mockName('MyMockedFunc');

  expect(mocked.getMockName()).toBe('MyMockedFunc');
  expect(mocked).toHaveBeenCalled();
});

test('mock meets world', () => {
  const mockHello = jest.fn((name) => `Hello, ${name}!`);

  expect(mockHello('World')).toBe('Hello, World!');
});

test('can set returned value for mock', () => {
  const mocked = jest.fn().mockReturnValue('the correct value');

  expect(mocked()).toBe('the correct value');
});

test('can chain mock functions', () => {
  const mocked = jest.fn().
    mockReturnValue('default value').
    mockReturnValueOnce('first value').
    mockReturnValueOnce('2nd value');

  expect(mocked()).toBe('first value');
  expect(mocked()).toBe('2nd value');
  expect(mocked()).toBe('default value');
  expect(mocked()).toBe('default value');
});

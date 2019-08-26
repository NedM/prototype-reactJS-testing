// Mocks
test('returns the correct value', () => {
  const mocked = jest.fn().mockReturnValue('the correct value');

  expect(mocked()).toBe('the correct value');
});

test('mock name is correct', () => {
  // const mocked = jest.fn();
  const myMock = jest.fn();
  const mocked = jest.fn().mockName('MyMockedFunc');

  console.log(mocked());
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
    mockReturnValueOnce('first value').
    mockReturnValueOnce('2nd value').
    mockReturnValue('default value');

  expect(mocked()).toBe('first value');
  expect(mocked()).toBe('2nd value');
  expect(mocked()).toBe('default value');
  expect(mocked()).toBe('default value');
});

test('can verify methods were called', () => {
  const mockHello = jest.fn((name) => `Hello, ${name}!`);

  console.log(mockHello('console'));
  console.log(mockHello('FRIED'));

  expect(mockHello).toBeCalled(); //Called at least 1x
  expect(mockHello).toBeCalledWith('console');
  expect(mockHello).lastCalledWith('FRIED');

  expect(mockHello.mock.calls.length).toBeGreaterThan(0);
  expect(mockHello.mock.calls).toContainEqual(['console']);
  const lastIndex = mockHello.mock.calls.length - 1
  expect(mockHello.mock.calls[lastIndex]).toEqual(['FRIED']);
});
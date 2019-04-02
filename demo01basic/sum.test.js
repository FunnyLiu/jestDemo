const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    // expect相关api：https://jestjs.io/docs/zh-Hans/expect
  expect(sum(1, 2)).toBe(3);
});


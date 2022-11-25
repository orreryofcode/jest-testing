const sum = require("./sum");
const list = require("./shoppingList");

// toStrictEqual is preferred as it takes 'undefined' into account
test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toStrictEqual(3);
  expect(sum(1, 2)).not.toBeNull();
  expect(sum(1, 2)).not.toBeUndefined();
  expect(sum(1, 2)).toBeTruthy();
});

test("adds two and eight to equal 10", () => {
  expect(sum(2, 8)).toStrictEqual(10);
  expect(sum(2, 8)).not.toBeNull();
  expect(sum(2, 8)).not.toBeUndefined();
  expect(sum(2, 8)).toBeTruthy();
});

// Comparing numbers
test("two plus two", () => {
  expect(2 + 2).toBeGreaterThan(3);
  expect(2 + 2).toBeLessThan(5);
});

// Comparing strings
test("there is no I in team, but there is in win", () => {
  expect("team").not.toMatch(/I/);
  expect("win").toMatch(/i/);
  expect("win").toMatch(/I/i); //case insensitive
});

// Arrays and iterables
test("list to contain milk", () => {
  expect(list).toContain("milk");
  expect(new Set(list)).toContain("milk");
});

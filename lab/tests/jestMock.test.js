const game = require("../game");
const utilsMock = require("../utils");

// once you mock a value, you can't change it
jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  };
});

// Write the test for game but mock the getWinner() with jest.mock
test("returns winner", () => {
  const winner = game("Mary", "Bob");
  expect(winner).toEqual("Mary");
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2);
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(["Mary", "Bob"]);
  });
});

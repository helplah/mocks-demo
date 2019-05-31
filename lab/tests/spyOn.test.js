const game = require("../game");
const utils = require("../utils");

// Write the test for game but mock the getWinner() with jest.spyOn
const getWinnerMock = jest.spyOn(utils, "getWinner");

test("returns player 1 as winner", () => {
  getWinnerMock.mockImplementation((p1, p2) => p1);
  expect(game("Mary", "Bob")).toEqual("Mary");
});

test("returns player 2 as winner", () => {
  getWinnerMock.mockImplementation((p1, p2) => p2);
  expect(game("Mary", "Bob")).toEqual("Bob");
});

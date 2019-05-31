const app = require("../app");
const math = require("../math");

// when you use jest.fn(), math.add is being mocked
// math.add() is being overrided by the function within jest.fn()
math.add = jest.fn(() => "test");
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  // app.mockReturnValue("test");

  expect(math.add).toHaveBeenCalledWith(1, 2);
  expect(app.doAdd()).toEqual("test");
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

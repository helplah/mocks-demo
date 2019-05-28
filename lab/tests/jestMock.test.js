const game = require('../game')
const utilsMock =  require('../utils')

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p2),
  }
})

xtest('returns winner', () => {
  const winner = game('Mary', 'Bob')
  expect(winner).toBe('Bob')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Mary', 'Bob'])
  })
})

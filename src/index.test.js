import { Game } from './index.js'

describe('Bowling Game', () => {
  let game

  beforeEach(() => {
    game = new Game()
  })

  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins)
    }
  }

  const rollSpare = () => {
    game.roll(5)
    game.roll(5)
  }

  const rollStrike = () => {
    game.roll(10)
  }

  it('returns 0 for a game of all gutter balls', () => {
    rollMany(20, 0)
    expect(game.getScore()).toEqual(0)
  })

  it('returns 20 for a game with 1 pin hit on every roll', () => {
    rollMany(20, 1)
    expect(game.getScore()).toEqual(20)
  })

  it('handles getting one spare in a game', () => {
    rollSpare()
    game.roll(3)
    rollMany(17, 0)
    expect(game.getScore()).toEqual(16)
  })

  it('handles getting one strike in a game', () => {
    rollStrike()
    game.roll(3)
    game.roll(4)
    rollMany(16, 0)
    expect(game.getScore()).toEqual(24)
  })

  it('returns 300 for a perfect game of 12 strikes', () => {
    rollMany(12, 10)
    expect(game.getScore()).toEqual(300)
  })
})

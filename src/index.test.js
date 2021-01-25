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

  it('returns 0 for a game of all gutterballs', () => {
    rollMany(20, 0)
    expect(game.score()).toBe(0)
  })

  it('returns 20 for a game of all 1s', () => {
    rollMany(20, 1)
    expect(game.score()).toBe(20)
  })

  it('handles a game with one spare', () => {
    rollSpare()
    game.roll(3)
    rollMany(17, 0)
    expect(game.score()).toBe(16)
  })

  it('handles a game with one strike', () => {
    rollStrike()
    game.roll(3)
    game.roll(4)
    rollMany(16, 0)
    expect(game.score()).toBe(24)
  })

  it('returns 300 for a perfect game of all strikes', () => {
    rollMany(12, 10)
    expect(game.score()).toBe(300)
  })

  it('handles a game with one spare followed by a gutterball', () => {
    rollSpare()
    game.roll(0)
    game.roll(3)
    rollMany(16, 0)
    expect(game.score()).toBe(13)
  })

  it('handles a game with one strike followed by a gutterball', () => {
    rollStrike()
    game.roll(0)
    game.roll(3)
    rollMany(16, 0)
    expect(game.score()).toBe(16)
  })

  it('handles a game with one strike followed by a gutterball and a spare on the second throw', () => {
    rollStrike()
    game.roll(0)
    game.roll(10)
    game.roll(1)
    rollMany(15, 0)
    expect(game.score()).toBe(32)
  })
})

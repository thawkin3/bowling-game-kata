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

  it('returns 0 for a game of all gutter balls', () => {
    rollMany(20, 0)
    expect(game.getScore()).toEqual(0)
  })

  it('returns 20 for a game with 1 pin hit on every roll', () => {
    rollMany(20, 1)
    expect(game.getScore()).toEqual(20)
  })
})

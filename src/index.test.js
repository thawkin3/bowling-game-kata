import { Game } from './index.js'

describe('Bowling Game', () => {
  it('returns 0 for a game of all gutter balls', () => {
    const game = new Game()

    for (let i = 0; i < 20; i++) {
      game.roll(0)
    }

    expect(game.score()).toEqual(0)
  })
})

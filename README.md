# bowling-game-kata

This is Uncle Bob's bowling game kata to practice test-driven development. There is very little creativity involved here, as he instructs you in his Powerpoint how to accomplish each step. It's meant more as a repetition exercise to turn these steps and refactorings into muscle memory so that you can apply them to other projects.

His blog post can be found here: http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata

## Getting Started

```sh
yarn install
yarn test:watch
```

## Starting Over

The code as it stands is the completed exercise. To start over, simply delete the `index.js` and `index.test.js` files. Then create a test file and write the first test, then write the code to make the test pass. Repeat for all five tests to finish the kata.

## All NPM Scripts

- `format`: Runs Prettier to format the code
- `format:watch`: Runs Prettier in watch mode
- `test`: Runs all tests using Jest
- `test:coverage`: Runs all tests and generates a coverage report
- `test:watch`: Runs tests in watch mode

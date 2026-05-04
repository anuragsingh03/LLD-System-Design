/**
 * Entry point — equivalent of Java's main() method.
 * Run with: node Main.js
 */
const TicTacToeGame = require('./TicTacToeGame');

async function main() {
  console.log('============================');
  console.log('     TIC TAC TOE GAME       ');
  console.log('============================\n');

  const game = new TicTacToeGame();
  game.initializeGame();

  const result = await game.startGame();

  if (result === 'tie') {
    console.log("It's a tie! Well played by both players.");
  } else {
    console.log(`🎉 ${result} wins the game!`);
  }
}

main().catch(console.error);

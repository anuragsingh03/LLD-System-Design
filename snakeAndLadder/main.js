const SnakeAndLadderGame = require('./snakeAndLadderGame');
const Player = require('./models/player');
// create a game instance

const game = new SnakeAndLadderGame();
// initialize the game
game.initializeGame();

// add the player
game.addPlayer( new Player(1, 'Player 1'));
game.addPlayer( new Player(2, 'Player 2'));

// start the game
let winner= game.startGame();
console.log(`Winner is ${winner}`);

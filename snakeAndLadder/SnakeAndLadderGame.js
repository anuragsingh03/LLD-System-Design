const Board = require("./models/board");
const Player = require("./models/player");
const Snake = require("./models/snake");
const Ladder = require("./models/Ladder");
const Dice = require("./models/dice");

class SnakeAndLadderGame {
  constructor() {
    this.board = null;
    this.dice = null;
    this.players = []; // act as a queue- to rotate the player
  }
  initializeGame() {
    // create snakes
    const snakes = [
      new Snake(14, 7),
      new Snake(31, 26),
      new Snake(38, 3),
      new Snake(84, 58),
      new Snake(95, 24),
    ];
    // create ladders
    const ladders = [
      new Ladder(5, 25),
      new Ladder(10, 29),
      new Ladder(22, 41),
      new Ladder(28, 55),
      new Ladder(44, 95),
    ];
    // create board 10x10(100 cells)
    this.board = new Board(10, snakes, ladders);
    // create dice
    this.dice = new Dice(1);
  }
  addPlayer(player) {
    this.players.push(player);
  }
  startGame() {
    console.log("Game Started");
    while (true) {
      // current player is always at the front of the queue
      const currentPlayer = this.players[0];
      // roll the dice
      const diceValue = this.dice.rollDice();
      console.log(
        `${currentPlayer.name} rolled a ${diceValue} position: ${currentPlayer.position}`,
      );
      // calculate new position
      let newPostion = currentPlayer.position + diceValue;
      if (newPostion > this.board.cells) {
        console.log(
          `${currentPlayer.name} cannot move and current player stays at the same position`,
        );
      } else {
        // get a new position after checking for snake or ladder
        newPostion = this.board.getNewPostion(newPostion);
        console.log(`${currentPlayer.name} moved to position ${newPostion}`);
        currentPlayer.position = newPostion;
      }
      //check win condition
      if (currentPlayer.position == this.board.cells) {
        return currentPlayer.name;
      }
      this.players.push(this.players.shift()); // rotate the player
    }
  }
}
module.exports = SnakeAndLadderGame;

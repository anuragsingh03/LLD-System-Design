/**
 * Equivalent of Java class TicTacToeGame
 * Controls the flow of the TicTacToe game.
 *
 * In Java, Scanner is used for console input.
 * In Node.js, we use readline for synchronous-style input.
 */
const readline = require('readline');
const Board = require('./TikTacToe/Board');
const Player = require('./TikTacToe/Player');
const PlayingPieceX = require('./TikTacToe/PlayingPieceX');
const PlayingPieceO = require('./TikTacToe/PlayingPieceO');

class TicTacToeGame {
  constructor() {
    // Queue of players (deque in Java, we use an array and rotate)
    this.players = [];
    this.gameBoard = null;
  }

  /**
   * Initializes the game: creates the board and sets up 2 players.
   */
  initializeGame() {
    // Create two players with their respective pieces
    const playerX = new Player('Player1', new PlayingPieceX());
    const playerO = new Player('Player2', new PlayingPieceO());

    this.players = [playerX, playerO];

    // Initialize a 3x3 board
    this.gameBoard = new Board(3);
  }

  /**
   * Main game loop. Returns the name of the winner or 'tie'.
   * @returns {Promise<string>}
   */
  async startGame() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Helper to ask question and get answer as a Promise
    const askQuestion = (query) =>
      new Promise((resolve) => rl.question(query, resolve));

    let noWinner = true;

    while (noWinner) {
      // Pick the current player (front of queue)
      const currentPlayer = this.players[0];
      // Rotate: move current player to the back
      this.players.push(this.players.shift());

      // Print the board
      this.gameBoard.printBoard();

      // Check for free cells
      const freeCells = this.gameBoard.getFreeCells();
      if (freeCells.length === 0) {
        noWinner = false;
        break;
      }

      // Ask current player for their move
      console.log(
        `${currentPlayer.name}'s turn (${currentPlayer.playingPiece.pieceType}). Enter row and column (0-indexed, space separated):`
      );
      const input = await askQuestion('> ');

      const parts = input.trim().split(/\s+/);
      const row = parseInt(parts[0], 10);
      const col = parseInt(parts[1], 10);

      // Validate input
      if (
        isNaN(row) || isNaN(col) ||
        row < 0 || row >= this.gameBoard.size ||
        col < 0 || col >= this.gameBoard.size
      ) {
        console.log('Invalid input. Please enter valid row and column within board size.');
        // Put current player back at the front to retry
        this.players.unshift(this.players.pop());
        continue;
      }

      // Attempt to place piece
      const placed = this.gameBoard.addPiece(row, col, currentPlayer.playingPiece);
      if (!placed) {
        console.log('Cell is already occupied! Try again.');
        // Put current player back at the front to retry
        this.players.unshift(this.players.pop());
        continue;
      }

      // Check if the current player won
      const winner = this.isWinner(row, col, currentPlayer.playingPiece.pieceType);
      if (winner) {
        this.gameBoard.printBoard();
        rl.close();
        return currentPlayer.name;
      }
    }

    this.gameBoard.printBoard();
    rl.close();
    return 'tie';
  }

  /**
   * Checks whether the last move caused a win.
   * @param {number} row - Row of the last move
   * @param {number} col - Column of the last move
   * @param {string} pieceType - PieceType of the last move
   * @returns {boolean}
   */
  isWinner(row, col, pieceType) {
    const size = this.gameBoard.size;
    const board = this.gameBoard.board;

    // Check row
    let rowMatch = true;
    for (let j = 0; j < size; j++) {
      if (board[row][j] === null || board[row][j].pieceType !== pieceType) {
        rowMatch = false;
        break;
      }
    }

    // Check column
    let colMatch = true;
    for (let i = 0; i < size; i++) {
      if (board[i][col] === null || board[i][col].pieceType !== pieceType) {
        colMatch = false;
        break;
      }
    }

    // Check top-left to bottom-right diagonal
    let diag1Match = true;
    for (let i = 0; i < size; i++) {
      if (board[i][i] === null || board[i][i].pieceType !== pieceType) {
        diag1Match = false;
        break;
      }
    }

    // Check top-right to bottom-left diagonal
    let diag2Match = true;
    for (let i = 0; i < size; i++) {
      if (board[i][size - 1 - i] === null || board[i][size - 1 - i].pieceType !== pieceType) {
        diag2Match = false;
        break;
      }
    }

    return rowMatch || colMatch || diag1Match || diag2Match;
  }
}

module.exports = TicTacToeGame;

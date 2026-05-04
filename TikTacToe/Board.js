/**
 * Equivalent of Java class Board
 * Represents the TicTacToe game board.
 */
class Board {
  /**
   * @param {number} size - Size of the board (e.g. 3 for a 3x3 board)
   */
  constructor(size) {
    this.size = size;

    // Initialize the 2D board with null (equivalent to null in Java)
    this.board = [];
    for (let i = 0; i < size; i++) {
      this.board[i] = new Array(size).fill(null);
    }
  }

  /**
   * Adds a piece to the board at the given row and column.
   * @param {number} row
   * @param {number} col
   * @param {PlayingPiece} piece
   * @returns {boolean} true if the piece was placed successfully, false if cell is occupied
   */
  addPiece(row, col, piece) {
    if (this.board[row][col] !== null) {
      return false;
    }
    this.board[row][col] = piece;
    return true;
  }

  /**
   * Returns a list of all free cells as [row, col] pairs.
   * @returns {Array<[number, number]>}
   */
  getFreeCells() {
    const freeCells = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] === null) {
          freeCells.push([i, j]);
        }
      }
    }
    return freeCells;
  }

  /**
   * Prints the current state of the board to the console.
   */
  printBoard() {
    console.log('\nCurrent Board:');
    for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] !== null) {
          row += ` ${this.board[i][j].pieceType} `;
        } else {
          row += '   ';
        }
        if (j < this.size - 1) row += '|';
      }
      console.log(row);
      if (i < this.size - 1) {
        console.log('-'.repeat(this.size * 4 - 1));
      }
    }
    console.log();
  }
}

module.exports = Board;

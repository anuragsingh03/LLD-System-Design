// ================== symbols.js ==================
const Symbol = Object.freeze({
  X: 'X',
  O: 'O',
  EMPTY: null
});

// ================== gameState.js ==================
const GameState = Object.freeze({
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  DRAW: 'DRAW'
});

// ================== cell.js ==================
class Cell {
  #row;
  #col;
  #symbol;

  constructor(row, col) {
    this.#row = row;
    this.#col = col;
    this.#symbol = Symbol.EMPTY;
  }

  isEmpty() {
    return this.#symbol === Symbol.EMPTY;
  }

  getSymbol() {
    return this.#symbol;
  }

  setSymbol(symbol) {
    if (!this.isEmpty()) {
      throw new Error('Cell is already occupied');
    }
    this.#symbol = symbol;
  }

  reset() {
    this.#symbol = Symbol.EMPTY;
  }

  getPosition() {
    return { row: this.#row, col: this.#col };
  }
}

// ================== board.js ==================
class Board {
  #grid;
  #size;

  constructor(size = 3) {
    this.#size = size;
    this.#grid = [];
    this.initialize();
  }

  initialize() {
    this.#grid = [];
    for (let row = 0; row < this.#size; row++) {
      const rowCells = [];
      for (let col = 0; col < this.#size; col++) {
        rowCells.push(new Cell(row, col));
      }
      this.#grid.push(rowCells);
    }
  }

  getSize() {
    return this.#size;
  }

  getCell(row, col) {
    this.#validatePosition(row, col);
    return this.#grid[row][col];
  }

  placeMark(row, col, symbol) {
    this.#validatePosition(row, col);
    const cell = this.#grid[row][col];
    cell.setSymbol(symbol);
  }

  isCellEmpty(row, col) {
    return this.getCell(row, col).isEmpty();
  }

  isFull() {
    for (let row = 0; row < this.#size; row++) {
      for (let col = 0; col < this.#size; col++) {
        if (this.#grid[row][col].isEmpty()) {
          return false;
        }
      }
    }
    return true;
  }

  getGrid() {
    // Return a 2D array of symbols for display/checking
    return this.#grid.map(row => 
      row.map(cell => cell.getSymbol())
    );
  }

  reset() {
    for (let row = 0; row < this.#size; row++) {
      for (let col = 0; col < this.#size; col++) {
        this.#grid[row][col].reset();
      }
    }
  }

  #validatePosition(row, col) {
    if (row < 0 || row >= this.#size || col < 0 || col >= this.#size) {
      throw new Error(`Invalid position: (${row}, ${col})`);
    }
  }

  display() {
    const grid = this.getGrid();
    let output = '\n';
    for (let row = 0; row < this.#size; row++) {
      const rowStr = grid[row]
        .map(cell => cell ?? ' ')
        .join(' | ');
      output += ` ${rowStr} \n`;
      if (row < this.#size - 1) {
        output += '-'.repeat(this.#size * 4 - 1) + '\n';
      }
    }
    return output;
  }
}

// ================== player.js ==================
class Player {
  #name;
  #symbol;

  constructor(name, symbol) {
    if (!name || name.trim() === '') {
      throw new Error('Player name cannot be empty');
    }
    if (symbol !== Symbol.X && symbol !== Symbol.O) {
      throw new Error('Invalid symbol. Must be X or O');
    }
    this.#name = name;
    this.#symbol = symbol;
  }

  getName() {
    return this.#name;
  }

  getSymbol() {
    return this.#symbol;
  }
}

// ================== winChecker.js ==================
class WinChecker {
  #winningCombinations;

  constructor(boardSize = 3) {
    this.#winningCombinations = this.#generateWinningCombinations(boardSize);
  }

  #generateWinningCombinations(size) {
    const combinations = [];

    // Rows
    for (let row = 0; row < size; row++) {
      const rowCombo = [];
      for (let col = 0; col < size; col++) {
        rowCombo.push({ row, col });
      }
      combinations.push(rowCombo);
    }

    // Columns
    for (let col = 0; col < size; col++) {
      const colCombo = [];
      for (let row = 0; row < size; row++) {
        colCombo.push({ row, col });
      }
      combinations.push(colCombo);
    }

    // Main diagonal
    const mainDiag = [];
    for (let i = 0; i < size; i++) {
      mainDiag.push({ row: i, col: i });
    }
    combinations.push(mainDiag);

    // Anti-diagonal
    const antiDiag = [];
    for (let i = 0; i < size; i++) {
      antiDiag.push({ row: i, col: size - 1 - i });
    }
    combinations.push(antiDiag);

    return combinations;
  }

  checkWin(board, symbol) {
    const grid = board.getGrid();

    for (const combination of this.#winningCombinations) {
      const isWin = combination.every(
        ({ row, col }) => grid[row][col] === symbol
      );
      if (isWin) {
        return { won: true, combination };
      }
    }

    return { won: false, combination: null };
  }
}

// ================== game.js ==================
class Game {
  #board;
  #players;
  #currentPlayerIndex;
  #state;
  #winChecker;
  #winner;
  #moveHistory;

  constructor(player1Name = 'Player 1', player2Name = 'Player 2', boardSize = 3) {
    this.#board = new Board(boardSize);
    this.#players = [
      new Player(player1Name, Symbol.X),
      new Player(player2Name, Symbol.O)
    ];
    this.#winChecker = new WinChecker(boardSize);
    this.#currentPlayerIndex = 0;
    this.#state = GameState.PLAYING;
    this.#winner = null;
    this.#moveHistory = [];
  }

  start() {
    this.reset();
    console.log('Game started!');
    console.log(`${this.getCurrentPlayer().getName()} (${this.getCurrentPlayer().getSymbol()}) goes first.`);
    console.log(this.#board.display());
  }

  makeMove(row, col) {
    // Validate game is still in progress
    if (this.#state !== GameState.PLAYING) {
      throw new Error('Game has already ended');
    }

    // Validate and place the mark
    if (!this.#board.isCellEmpty(row, col)) {
      throw new Error('Cell is already occupied');
    }

    const currentPlayer = this.getCurrentPlayer();
    this.#board.placeMark(row, col, currentPlayer.getSymbol());
    
    // Record move
    this.#moveHistory.push({
      player: currentPlayer.getName(),
      symbol: currentPlayer.getSymbol(),
      position: { row, col }
    });

    // Check for win
    const winResult = this.#winChecker.checkWin(this.#board, currentPlayer.getSymbol());
    if (winResult.won) {
      this.#state = GameState.WIN;
      this.#winner = currentPlayer;
      return {
        state: this.#state,
        winner: this.#winner,
        winningCombination: winResult.combination
      };
    }

    // Check for draw
    if (this.#board.isFull()) {
      this.#state = GameState.DRAW;
      return { state: this.#state, winner: null };
    }

    // Switch to next player
    this.#switchPlayer();
    
    return { state: this.#state, nextPlayer: this.getCurrentPlayer() };
  }

  #switchPlayer() {
    this.#currentPlayerIndex = (this.#currentPlayerIndex + 1) % this.#players.length;
  }

  getCurrentPlayer() {
    return this.#players[this.#currentPlayerIndex];
  }

  getState() {
    return this.#state;
  }

  getWinner() {
    return this.#winner;
  }

  getBoard() {
    return this.#board;
  }

  getMoveHistory() {
    return [...this.#moveHistory];
  }

  reset() {
    this.#board.reset();
    this.#currentPlayerIndex = 0;
    this.#state = GameState.PLAYING;
    this.#winner = null;
    this.#moveHistory = [];
  }

  displayBoard() {
    console.log(this.#board.display());
  }
}

// ================== Example Usage ==================
function playDemo() {
  const game = new Game('Alice', 'Bob');
  game.start();

  const moves = [
    [0, 0], // Alice: X
    [1, 1], // Bob: O
    [0, 1], // Alice: X
    [2, 2], // Bob: O
    [0, 2], // Alice: X - wins!
  ];

  for (const [row, col] of moves) {
    const player = game.getCurrentPlayer();
    console.log(`${player.getName()} plays at (${row}, ${col})`);
    
    const result = game.makeMove(row, col);
    game.displayBoard();

    if (result.state === GameState.WIN) {
      console.log(`🎉 ${result.winner.getName()} wins!`);
      break;
    } else if (result.state === GameState.DRAW) {
      console.log("It's a draw!");
      break;
    }
  }

  console.log('\nMove History:', game.getMoveHistory());
}

// Run the demo
playDemo();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Game, Board, Cell, Player, WinChecker, Symbol, GameState };
}

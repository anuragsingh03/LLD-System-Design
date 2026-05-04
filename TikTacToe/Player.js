/**
 * Equivalent of Java class Player
 * Represents a player in the TicTacToe game.
 */
class Player {
  /**
   * @param {string} name - Player's name
   * @param {PlayingPiece} playingPiece - The piece assigned to this player
   */
  constructor(name, playingPiece) {
    this.name = name;
    this.playingPiece = playingPiece;
  }
}

module.exports = Player;

/**
 * Equivalent of Java abstract class PlayingPiece
 * Represents a playing piece on the board.
 */
class PlayingPiece {
  /**
   * @param {string} pieceType - One of PieceType values ('X' or 'O')
   */
  constructor(pieceType) {
    if (new.target === PlayingPiece) {
      throw new Error('PlayingPiece is an abstract class and cannot be instantiated directly.');
    }
    this.pieceType = pieceType;
  }
}

module.exports = PlayingPiece;

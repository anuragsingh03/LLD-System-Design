/**
 * Equivalent of Java class PlayingPieceO extends PlayingPiece
 * Represents the 'O' playing piece.
 */
const PlayingPiece = require('./PlayingPiece');
const PieceType = require('./PieceType');

class PlayingPieceO extends PlayingPiece {
  constructor() {
    super(PieceType.O);
  }
}

module.exports = PlayingPieceO;

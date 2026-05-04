/**
 * Equivalent of Java class PlayingPieceX extends PlayingPiece
 * Represents the 'X' playing piece.
 */
const PlayingPiece = require('./PlayingPiece');
const PieceType = require('./PieceType');

class PlayingPieceX extends PlayingPiece {
  constructor() {
    super(PieceType.X);
  }
}

module.exports = PlayingPieceX;

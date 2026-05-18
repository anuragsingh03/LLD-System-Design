class Board {
  constructor(size, snakes, ladders) {
    this.size = size;
    this.cells = size * size;
    this.snakes = snakes;
    this.ladders = ladders;
  }
  getNewPostion(position) {
    // for snakes
    for (let snake of this.snakes) {
      if (snake.head == position) {
        console.log(
          `Bitten by snake at ${position}, moving down to ${snake.tail}`,
        );
        return snake.tail;
      }
    }
    // for ladders
    for (let ladder of this.ladders) {
      if (ladder.start == position) {
        console.log(
          `Climbing ladder at ${position}, moving up to ${ladder.end}`,
        );
        return ladder.end;
      }
    }
    return position;
  }
}
module.exports = Board;

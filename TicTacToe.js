// Expected features
// ===============
// * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// * Win detection - detect and display who won

const ticTacToe = () => {
  this.board = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];
  this.currentPlayer = 'X';
};  

TicTacToe.prototype.printBoard = (board) => {
  // console.log the board, with newLines and O|X|O and ______
};

TicTacToe.prototype.play = (player) => {
  // ask user for input
  // parse input
  // if legal move
    // add move to board
    // print board
    // check for win
    // if win
      // console.log('a winner is you, player ', this.player);
    // if no win
      // change this.currentPlayer to other player
      // call this.play(currentPlayer)
  // if not legal input
    // console.log('invalid move, player ', this.currentPlayer);
    // call this.play(currentPlayer);  
};


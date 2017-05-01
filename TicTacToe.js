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

TicTacToe.prototype.printBoard = () => {
  // console.log the board, with newLines and O|X|O and _____
  console.log(`
    ${this.board[0]}|${this.board[1]}|${this.board[2]}
    ______
    ${this.board[3]}|${this.board[4]}|${this.board[5]}
    ______
    ${this.board[6]}|${this.board[7]}|${this.board[8]}
  `);
};

TicTacToe.prototype.parseInput = (col, row) => {
  return (col - 1) + (row - 1) * 3;
};

TicTacToe.prototype.legalMove = (index) => {
  return this.board[index] === ''; // not undefined, i.e off the board. not X or O, i.e. full
};

TicTacToe.prototype.isVerticalWin = () => {
  return (this.board[0] === this.board[3] && this.board[0] === this.board[6]) ||
  (this.board[1] === this.board[4] && this.board[1] === this.board[7]) ||
  (this.board[2] === this.board[5] && this.board[2] === this.board[8]);
};

TicTacToe.prototype.isDiaganolWin = () => {
  return null;//out of time
};

TicTacToe.prototype.isHorizontalWin = () => {
  return (this.board[0] === this.board[1] && this.board[0] === this.board[2]) ||
  (this.board[3] === this.board[4] && this.board[3] === this.board[5]) ||
  (this.board[6] === this.board[7] && this.board[6] === this.board[8]);
};

TicTacToe.prototype.isWin = () => {
  return this.isVerticalWin() || this.isDiaganolWin() || this.isHorizontalWin();
};

TicTacToe.prototype.play = (player) => {
  // ask user for input
  const playerInput = prompt(player, ', Enter your move col and row:');
  // parse input
  const move = parseInput(playerInput);
  // if legal move
  if (legalMove(move)) {
    // add move to board
    this.board[move] = player;
    // print board
    this.printBoard();
    // check for win
    // if win
    if (this.isWin(board)) {
      console.log('a winner is you, player ', this.player);
      return;
    } else {
    // if no win
      // change this.currentPlayer to other player
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      // call this.play(currentPlayer)
      this.play(this.currentPlayer);
    }
  } else { 
  // if not legal input
    console.log('invalid move, player ', this.currentPlayer);
    this.play(currentPlayer);  
  }
};




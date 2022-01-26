export class SudokuBoard {
  private stringGameState: string = ""; //game state in string form
  private arrayGameState: number[][] = []; //game state in array form
  //initiate empty board
  constructor() {
    for (let i = 0; i < 9; i++) {
      this.stringGameState = this.stringGameState + "000000000\n";
    }
  }
  //getter for current game state in string
  getGameState = () => {
    return this.stringGameState;
  };
  //getter for current game state in array
  getParsedGameState = () => {
    return this.arrayGameState;
  };

  //parse from string to 2D array
  parseGameState = () => {
    //split into array of sudoku rows
    const splittedRows = this.stringGameState.split("\n");
    splittedRows.pop(); //remove last "" in the array

    //for each string, format it into a nested array of numbers
    // result is a 2 dimensional array, with rows and columns
    const arrayGameState = splittedRows.map((row) => {
      let tempArray = [];
      for (const char of row) {
        tempArray.push(parseInt(char));
      }
      return tempArray;
    });

    //update array game state
    this.arrayGameState = arrayGameState;
  };

  //generate a random board game based on difficulty
  generateBoard = (difficulty: number) => {};

  //show full solution of current game
  getSolution = () => {};
}
const board = new SudokuBoard();
board.parseGameState();
console.log(board.getParsedGameState());

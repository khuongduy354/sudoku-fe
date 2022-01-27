import { sudokuSolver } from "../SudokuSolver/sudokuSolver";
export class SudokuBoard {
  //methods:🥳
  //props:🏬

  private stringGameState: string = ""; //game state in string form 🏬
  private arrayGameState: number[][] = []; //game state in array form 🏬

  //initiate board 🏗️
  constructor(initialBoard: string) {
    //if no input board found, make an empty board
    if (initialBoard === "") {
      for (let i = 0; i < 9; i++) {
        this.stringGameState = this.stringGameState + "000000000\n";
      }
      this.parseGameState();
    } else {
      //else update it according to input board
      this.stringGameState = initialBoard;
      this.parseGameState();
    }
  }

  //getter for full solution of current game 🥳
  getSolution = () => {};

  //getter for current game state in string 🥳
  getStringGameState = (): string => {
    return this.stringGameState;
  };
  //getter for current game state in array 🥳
  getArrayGameState = (): number[][] => {
    return this.arrayGameState;
  };

  //parse from string to 2D array 🥳
  parseGameState = (): void => {
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

  //generate a random board game based on difficulty 🥳
  generateBoard = (difficulty: number) => {};

  //check if a cell is valid 🥳
  isCellValid = (posX: number, posY: number): boolean => {
    //check if the input position is valid
    if (posX > 8 || posX < 0 || posY > 8 || posY < 0) {
      return false;
    }

    const currentCellValue = this.arrayGameState[posX][posY];

    //check the cell's row
    for (let column = 0; column <= posY; column++) {
      const testTargetValue = this.arrayGameState[posX][column];
      //if the selected cell has the same value as another cell in the same row
      //return false
      if (currentCellValue === testTargetValue && column !== posY) {
        return false;
      }
    }

    //check the cell's column
    for (let row = 0; row <= posX; row++) {
      const testTargetValue = this.arrayGameState[row][posY];
      //if the selected cell has the same value as another cell in the same row
      //return false
      if (currentCellValue === testTargetValue && row !== posX) {
        return false;
      }
    }

    //check the cell's 3x3 area around it

    return true;
  };
}

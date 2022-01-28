import { sudokuSolver } from "../SudokuSolver/sudokuSolver";
import {
  parseGameStateToArray,
  parseGameStateToString,
  isCellValid,
  randomNumbersGenerator,
} from "../helper";

export class SudokuBoard {
  //getter methods: 🥖
  //checker methods: 🏁
  //manipulate methods: 🧰
  //constructor / maker methods: 🏗️
  //props: 🏬

  private stringGameState: string = ""; //game state in string form 🏬
  private arrayGameState: number[][] = []; //game state in array form 🏬
  private arraySolutionState: number[][] = []; //solution state in array form 🏬
  private stringSolutionState: string = ""; //solution state in string form 🏬

  //initiate board 🏗️
  constructor(initialBoard: string) {
    //if no input board found, make an empty board
    if (initialBoard === "") {
      for (let i = 0; i < 9; i++) {
        this.stringGameState = this.stringGameState + "000000000\n";
      }
    } else {
      //else update it according to input board
      this.stringGameState = initialBoard;
    }
    //parse string to array
    this.arrayGameState = parseGameStateToArray(this.stringGameState);
    if (initialBoard !== "")
      //if it's not empty, solve it
      this.arraySolutionState = sudokuSolver(this.arrayGameState);
  }

  //display full board 🥖
  renderBoard = () => {
    this.arraySolutionState.map((row) => {
      row.map((col) => process.stdout.write(col.toString()));
      console.log("");
    });
  };

  //getter for array solution🥖
  getArraySolutionState = () => {
    return this.arraySolutionState;
  };

  getStringSolutionState = () => {
    return this.stringSolutionState;
  };

  //getter for string game state 🥖
  getStringGameState = (): string => {
    return this.stringGameState;
  };
  //getter for array game state 🥖
  getArrayGameState = (): number[][] => {
    return this.arrayGameState;
  };
  //check if a cell is valid 🏁
  isCellValid = (posX: number, posY: number): boolean => {
    return isCellValid(posX, posY, this.arrayGameState);
  };

  //check if board is empty (full of 0's) 🏁
  isEmptyBoard = () => {
    const emptyBoardPattern = new RegExp("([0]{9}\n){9}|([0]{9}\n){8}[0]{9}");
    if (emptyBoardPattern.test(this.stringGameState)) {
      return true;
    } else {
      return false;
    }
  };
  //check if sudoku is solved 🏁

  //generate a random board game based on difficulty 🏗️️
  generateRandomBoard = (difficulty: number = 0.5) => {
    //deep clone array
    const tempSolutionArray = JSON.parse(JSON.stringify(this.arrayGameState));

    //1. Fill 3 diagonal 3x3 areas randomly
    for (let i = 0; i <= 6; i += 3) {
      const randomArray = randomNumbersGenerator();
      for (let colOffset = 0; colOffset < 3; colOffset++) {
        //make sure not getting undefined
        const num = randomArray.pop();
        const num2 = randomArray.pop();
        const num3 = randomArray.pop();
        if (num && num2 && num3) {
          //set 1 row at a time
          tempSolutionArray[i][i + colOffset] = num;
          tempSolutionArray[i + 1][i + colOffset] = num2;
          tempSolutionArray[i + 2][i + colOffset] = num3;
        }
      }
    }
    //2. Solve for the rest of the board and update to solution state
    this.arraySolutionState = sudokuSolver(tempSolutionArray);
    this.stringSolutionState = parseGameStateToString(this.arraySolutionState);

    //3. Remove based on difficulty
    const easiest = 38; //amount of shown cells in easiest mode
    const hardest = 20; //amount of shown cells in hardest mode
    const removeAmount =
      9 * 9 - (hardest - Math.floor(difficulty * (hardest - easiest))); //amount of cells to be removed

    //board after deleted cells randomly
    const tempUnsolvedPuzzle: number[][] = JSON.parse(
      JSON.stringify(this.arraySolutionState)
    );

    //remove the cells randomly
    for (let i = 0; i < removeAmount; i++) {
      const row = Math.floor(Math.random() * 9); //random number in [1-9]
      const col = Math.floor(Math.random() * 9);

      //delete once more if the same cell is deleted twice
      if (tempUnsolvedPuzzle[row][col] === 0) i--;
      tempUnsolvedPuzzle[row][col] = 0;
    }

    this.arrayGameState = tempUnsolvedPuzzle;
    this.stringGameState = parseGameStateToString(this.arrayGameState);
  };

  //🧰
}

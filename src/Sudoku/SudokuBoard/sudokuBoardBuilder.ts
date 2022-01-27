import { SudokuBoard } from "./SudokuBoard";
export function sudokuBoardBuilder(initialBoard: string = "") {
  //empty input make empty board
  if (initialBoard === "") {
    return new SudokuBoard("");
  }

  //else, make board according to input board
  //regex validation for input board string
  const boardPattern = new RegExp("([0-9]{9}\n){9}|([0-9]{9}\n){8}[0-9]");
  if (boardPattern.test(initialBoard)) {
    const board = new SudokuBoard(initialBoard);
    return board;
  } else {
    return null;
  }
}

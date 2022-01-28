import { sudokuBoardBuilder } from "./SudokuBoard/sudokuBoardBuilder";

const board = sudokuBoardBuilder();
if (board) {
  board.generateRandomBoard();
  board.renderBoard();
}
export { sudokuBoardBuilder };

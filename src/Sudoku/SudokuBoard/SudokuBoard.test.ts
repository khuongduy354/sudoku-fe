import { SudokuBoard } from "./SudokuBoard";

let board = new SudokuBoard();
it("Can make empty board", () => {
  expect(board.getGameState()).toBe(
    "000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n"
  );
});

it("Can parse empty string board to 2D array", () => {
  board.parseGameState(); //parse string to array
  expect(board.getParsedGameState()).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("Can generate unique solution random board");

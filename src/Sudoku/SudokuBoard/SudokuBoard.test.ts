import { sudokuBoardBuilder } from "./";

const emptyBoard = sudokuBoardBuilder();
const boardString =
  "090000006\n" +
  "000960485\n" +
  "000581000\n" +
  "004000000\n" +
  "517200900\n" +
  "602000370\n" +
  "100804020\n" +
  "706000810\n" +
  "300090000";
const initializedBoard = sudokuBoardBuilder(boardString);

//Empty board
it("Can make empty string board ", () => {
  const stringBoard = emptyBoard?.getStringGameState();
  expect(stringBoard).toBe(
    "000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n"
  );
});

it("Can parse empty string board to 2D array", () => {
  const arrayBoard = emptyBoard?.getArrayGameState();
  expect(arrayBoard).toEqual([
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

//Initialized Board
it("Can generate board according to input board", () => {
  expect(initializedBoard?.getStringGameState()).toBe(boardString);
});
// it("Can generate unique solution random board");
// it("Can check if a position is valid",()=>{
//   expect().toBe(true)
// })

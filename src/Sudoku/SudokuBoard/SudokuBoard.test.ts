import { sudokuBoardBuilder } from "..";
import { boardString, invalidBoardString } from "../../_global";
const emptyBoard = sudokuBoardBuilder();
const initializedBoard = sudokuBoardBuilder(boardString);

//checker : 🏁
//manipulate : 🧰
//maker : 🏗️

//🏗️
it("Can make empty board ", () => {
  const stringBoard = emptyBoard?.getStringGameState();
  expect(stringBoard).toBe(
    "000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n"
  );
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

//🏗️
it("Can generate empty board if input is invalid", () => {
  //maker
  const invalidBoard = sudokuBoardBuilder(invalidBoardString);
  expect(invalidBoard.isEmptyBoard()).toBe(true);
});

//🏗️
it("Can generate board according to input if input board valid", () => {
  //maker
  expect(initializedBoard?.getStringGameState()).toBe(boardString);
});

//🏗️
// it("Can generate solution according to input if input board valid", () => {}); //maker

//🏗️
it("Can make random board", () => {
  //maker
  //solution array lengths
  //string pattern
});

//🏁
// it("Can check if board is empty", () => {}); //checker

//🏁
// it("Can check if a cell is valid", () => { //after append features //checker
//   const invalidBoard = sudokuBoardBuilder(invalidBoardString);
//   expect(invalidBoard?.isCellValid(0, 1)).toBe(false); //row check
//   expect(invalidBoard?.isCellValid(3, 2)).toBe(false); //3x3 check
//   expect(invalidBoard?.isCellValid(3, 2)).toBe(false); //column check
//   expect(invalidBoard?.isCellValid(0, 0)).toBe(true); //empty cell check
//   expect(invalidBoard?.isCellValid(7, 0)).toBe(true); //valid check
// });

//🧰
//append to a specific cell //doer
//erase a specific cell //doer
//forward last move //doer
//undo last move //doer
//check if sudoku is solved //doer

import { SudokuBoardComponent } from "./SudokuGame/SudokuBoardComponent";
import { sudokuBoardBuilder } from "../Sudoku";
export const SinglePlayer = () => {
  const backgroundColor = "#D3E4CD";
  const newBoard = sudokuBoardBuilder();
  newBoard.generateRandomBoard();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
      }}
    >
      <SudokuBoardComponent board={newBoard} />
    </div>
  );
};

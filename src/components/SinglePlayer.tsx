import { SudokuBoardComponent } from "./SudokuGame/SudokuBoardComponent";
import { sudokuBoardBuilder } from "../Sudoku";
export const SinglePlayer = () => {
  const newBoard = sudokuBoardBuilder();
  newBoard.generateRandomBoard();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "",
      }}
    >
      <SudokuBoardComponent board={newBoard} />
    </div>
  );
};

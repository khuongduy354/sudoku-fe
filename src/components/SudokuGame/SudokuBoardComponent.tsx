import React, { useEffect, useState } from "react";
import { SudokuBoard } from "../../Sudoku/SudokuBoard/SudokuBoard";
import { SudokuCell } from "./SudokuCell";
import { BoardProvider } from "./BoardContext/BoardContext";
type SudokuBoardProps = {
  board: SudokuBoard;
};

export const SudokuBoardComponent = ({ board }: SudokuBoardProps) => {
  const [gameBoardArray, setGameBoardArray] = useState(
    board.getArrayGameState()
  );

  useEffect(() => {
    if (board.isPuzzleSolved()) {
      alert("You solved the puzzle");
    }
  }, [gameBoardArray]);

  return (
    <BoardProvider
      value={{
        boardArray: gameBoardArray,
        setBoardArray: setGameBoardArray,
        board: board,
      }}
    >
      <table style={{ borderSpacing: "0px" }}>
        {gameBoardArray.map((row, posX) => {
          return (
            <React.Fragment>
              <tr key={posX}>
                {row.map((col, posY) => (
                  <SudokuCell key={posY} posX={posX} posY={posY} value={col} />
                ))}
              </tr>
            </React.Fragment>
          );
        })}
      </table>
    </BoardProvider>
  );
};

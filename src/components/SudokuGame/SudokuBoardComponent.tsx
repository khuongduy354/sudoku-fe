import React, { useState } from "react";
import { SudokuBoard } from "../../Sudoku/SudokuBoard/SudokuBoard";
import { SudokuCell } from "./SudokuCell";
type SudokuBoardProps = {
  board: SudokuBoard;
};

export const SudokuBoardComponent = ({ board }: SudokuBoardProps) => {
  const [arrayGameState, setArrayGameState] = useState(
    board.getArrayGameState()
  );
  return (
    <table style={{ borderSpacing: "0px" }}>
      {arrayGameState.map((row, posX) => {
        return (
          <React.Fragment>
            <tr>
              {row.map((col, posY) => (
                <SudokuCell key={posY} posX={posX} posY={posY} value={col} />
              ))}
            </tr>
          </React.Fragment>
        );
      })}
    </table>
  );
};

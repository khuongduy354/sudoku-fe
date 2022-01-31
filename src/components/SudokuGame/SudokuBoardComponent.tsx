import React, { useEffect, useState } from "react";
import { SudokuBoard } from "../../Sudoku/SudokuBoard/SudokuBoard";
import { SudokuCell } from "./SudokuCell";
import { BoardProvider } from "./BoardContext/BoardContext";

import { getAffectedCells, isCellInList } from "../../Sudoku/helper";

type SudokuBoardProps = {
  board: SudokuBoard;
};

export const SudokuBoardComponent = ({ board }: SudokuBoardProps) => {
  const [gameBoardArray, setGameBoardArray] = useState(
    board.getArrayGameState()
  );
  const [selectedCell, setSelectedCell] = useState({
    posX: -1,
    posY: -1,
    value: 0,
  });
  const [affectedCellsList, setAffectedCellsList] = useState(
    getAffectedCells(selectedCell.posX, selectedCell.posY)
  );

  useEffect(() => {
    if (selectedCell.posX !== -1) {
      const { posX: testPosX, posY: testPosY } = selectedCell;
      const affectedCellsList = getAffectedCells(testPosX, testPosY);
      setAffectedCellsList(affectedCellsList);
    }
  }, [selectedCell]);

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
                  <SudokuCell
                    isAffected={isCellInList(posX, posY, affectedCellsList)}
                    selectedCell={selectedCell}
                    setSelectedCell={setSelectedCell}
                    key={posY}
                    posX={posX}
                    posY={posY}
                    value={col}
                  />
                ))}
              </tr>
            </React.Fragment>
          );
        })}
      </table>
    </BoardProvider>
  );
};

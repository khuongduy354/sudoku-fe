import React, { useEffect, useState } from "react";
import { SudokuBoard } from "../../Sudoku/SudokuBoard/SudokuBoard";
import { SudokuCell } from "./SudokuCell";
import { BoardProvider } from "./BoardContext/BoardContext";
import { Store } from "react-notifications-component";
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

  const [gameFinished, setGameFinished] = useState(false);
  useEffect(() => {
    if (selectedCell.posX !== -1) {
      const { posX: testPosX, posY: testPosY } = selectedCell;
      const affectedCellsList = getAffectedCells(testPosX, testPosY);
      setAffectedCellsList(affectedCellsList);
    }
  }, [selectedCell]);

  useEffect(() => {
    if (board.isPuzzleSolved()) {
      setGameFinished(true);
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
      {gameFinished && (
        <div
          style={{ position: "absolute" }}
          className="alert alert-primary"
          role="alert"
        >
          You won the game!
          <button
            style={{ fontSize: "16px", width: "100px", marginLeft: "30px" }}
            onClick={() => {
              window.location.href = "single-player";
            }}
          >
            Restart
          </button>
        </div>
      )}

      <table style={{ borderSpacing: "0px" }}>
        {gameBoardArray.map((row, posX) => {
          return (
            <React.Fragment>
              <tr key={posX}>
                {row.map((col, posY) => (
                  <SudokuCell
                    isAffectedByPosition={isCellInList(
                      posX,
                      posY,
                      affectedCellsList
                    )}
                    isAffectedByValue={
                      selectedCell.value === col && selectedCell.value !== 0
                    }
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

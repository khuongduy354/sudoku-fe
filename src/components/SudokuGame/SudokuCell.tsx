import React, { useEffect, useRef, useContext } from "react";
import { FaPencilAlt, FaEraser } from "react-icons/fa";
import { Planet } from "react-planet";
import { useState } from "react";
import BoardContext from "./BoardContext/BoardContext";
type SudokuCellProps = {
  value: number;
  posX: number;
  posY: number;
};

export const SudokuCell = ({ value, posX, posY }: SudokuCellProps) => {
  const { boardArray, setBoardArray, board } = useContext(BoardContext);

  const [doRenderOption, setDoRenderOption] = useState(false);
  const [isCorrectValue, setIsCorrectValue] = useState(
    board.getArraySolutionState()[posX][posY] === boardArray[posX][posY]
  );

  useEffect(() => {
    setIsCorrectValue(
      board.getArraySolutionState()[posX][posY] === boardArray[posX][posY]
    );
  }, [boardArray, board.getArrayGameState()]);

  const isCellOriginal = board.getOriginalArray()[posX][posY] !== 0;
  const areaBorderColor = "#99A799";
  const cellSize = "53px";
  const cellColor = "#F8F9FA";
  const OptionColor = "#F8F9FA";
  const highlightColor = "grey";

  const SatelitesOption = ({ option }: { option: number }) => {
    const shownValue =
      option === 10 ? <FaPencilAlt /> : option === 0 ? <FaEraser /> : option;
    return (
      <div
        onClick={() => {
          switch (option) {
            case 0:
              board.eraseCell(posX, posY);
              break;
            case 10:
              break;
            default:
              board.fillCell(posX, posY, option);
              break;
          }
          const tempBoard = JSON.parse(
            JSON.stringify(board.getArrayGameState())
          );
          setDoRenderOption(false);
          setBoardArray(tempBoard);
        }}
        style={{
          color: "black",
          height: 50,
          width: 50,
          borderRadius: "50%",
          border: "thin solid ",
        }}
        className="satelites"
      >
        {shownValue}
      </div>
    );
  };

  const renderOptions = () => {
    return (
      <div style={{ position: "relative" }}>
        <Planet
          orbitRadius={80}
          hideOrbit
          centerContent={
            <div
              className="pointer"
              style={{
                zIndex: -1,
                width: cellSize,
                height: cellSize,
              }}
            ></div>
          }
          open
          autoClose
        >
          <SatelitesOption option={1} />
          <SatelitesOption option={2} />
          <SatelitesOption option={3} />
          <SatelitesOption option={4} />
          <SatelitesOption option={5} />
          <SatelitesOption option={6} />
          <SatelitesOption option={7} />
          <SatelitesOption option={8} />
          <SatelitesOption option={9} />
          <SatelitesOption option={0} />
          <SatelitesOption option={10} />
        </Planet>
      </div>
    );
  };
  return (
    <td
      onClick={() => {
        !isCellOriginal && setDoRenderOption(true);
      }}
      className={"" + `${!isCellOriginal && "pointer"}`}
      style={{
        color: isCellOriginal ? "black" : isCorrectValue ? "blue" : "red",
        backgroundColor: cellColor,
        display: "inline-block",
        width: cellSize,
        height: cellSize,
        border: "thin solid grey",
        borderBottom: `${posX === 8 && "thick solid " + areaBorderColor}`,
        borderTop: `${
          (posX === 0 || posX === 3 || posX === 6) &&
          "thick solid " + areaBorderColor
        }`,
        borderLeft: `${
          (posY === 0 || posY === 3) && "thick solid " + areaBorderColor
        }`,
        borderRight: `${
          (posY === 8 || posY === 5) && "thick solid " + areaBorderColor
        }`,
        textAlign: "center",
        fontSize: "22px",
        lineHeight: "50px",
      }}
    >
      {!isCellOriginal && doRenderOption && renderOptions()}
      <span>{value !== 0 && value}</span>
    </td>
  );
};

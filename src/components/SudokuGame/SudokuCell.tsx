import React, { useEffect, useRef, useContext } from "react";
import { FaPencilAlt, FaEraser } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";

import { Planet } from "react-planet";
import { useState } from "react";
import BoardContext from "./BoardContext/BoardContext";
type SudokuCellProps = {
  value: number;
  posX: number;
  posY: number;
  setSelectedCell: Function;
  selectedCell: { posX: number; posY: number; value: number };
  isAffectedByPosition: boolean;
  isAffectedByValue: boolean;
};

export const SudokuCell = ({
  selectedCell,
  setSelectedCell,
  value,
  posX,
  posY,
  isAffectedByPosition,
  isAffectedByValue,
}: SudokuCellProps) => {
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
  const isSelected = selectedCell.posX === posX && selectedCell.posY === posY;
  const areaBorderColor = "#99A799";
  const cellSize = "53px";
  const defaultCellColor = "#F8F9FA";

  const getCellColor = () => {
    if (isSelected) return "#A1B57D";
    if (isAffectedByPosition) return "#D3ECA7";
    if (isAffectedByValue) return "#b8c79e";
    return defaultCellColor;
  };

  //Circular option
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

  //Circular options
  const renderOptions = () => {
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          setDoRenderOption(false);
        }}
      >
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
      </OutsideClickHandler>
    );
  };

  //Render cell
  return (
    <td
      onDoubleClick={() => {
        !isCellOriginal && setDoRenderOption(true);
      }}
      onMouseUp={() => {
        setDoRenderOption(false);
      }}
      onClick={() => {
        setSelectedCell({ posX, posY, value });
      }}
      className={"cell " + `${!isCellOriginal && "pointer"}`}
      style={{
        color: isCellOriginal ? "black" : isCorrectValue ? "blue" : "red",
        backgroundColor: getCellColor(),
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

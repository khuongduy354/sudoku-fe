import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { isPropertySignature } from "typescript";
type SudokuCellProps = {
  value: number;
  posX: number;
  posY: number;
};

export const SudokuCell = ({ value, posX, posY }: SudokuCellProps) => {
  const renderOptions = () => {
    return (
      <div>
        <CircleMenu
          startAngle={-90}
          rotationAngle={360}
          itemSize={2}
          radius={5}
          rotationAngleInclusive={false}
        ></CircleMenu>
      </div>
    );
  };
  return (
    <td
      onDoubleClick={() => renderOptions()}
      style={{
        display: "inline-block",
        width: "50px",
        height: "50px",
        border: "thin solid grey",
        borderBottom: `${posX === 8 && "thick solid black"}`,
        borderTop: `${
          (posX === 0 || posX === 3 || posX === 6) && "thick solid black"
        }`,
        borderLeft: `${(posY === 0 || posY === 3) && "thick solid black"}`,
        borderRight: `${(posY === 8 || posY === 5) && "thick solid black"}`,
        textAlign: "center",
        fontSize: "22px",
        lineHeight: "50px",
      }}
    >
      {value !== 0 && value}
    </td>
  );
};

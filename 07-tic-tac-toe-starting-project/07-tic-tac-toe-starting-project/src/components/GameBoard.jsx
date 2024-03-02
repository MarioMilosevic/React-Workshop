import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = () => {
const [gameBoard, setGameBoard] = useState(initialGameBoard)

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prev) => {
            const updatedBoard = [...prev]
            updatedBoard[rowIndex][colIndex] = "X"
            return updatedBoard
        })
    }

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={handleSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

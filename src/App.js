import React, { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  // setup initial squares and player X vs O
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    // reset board to initial squares and player
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  const calculateWinner = (arr) => {
    // winning combinations -- 3 horizontal, 3 vertical, 2 diagonal
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // if three squares in a row (any of the winning combos) have the same value, we have a winner!
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c])
        return `${arr[a]} won!`;
    }
    // return this question until we have a winner
    return "Who will win?";
  };

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        // set up game board - each square has index, value, and player attached
        {squares.map((squareValue, index) => (
          <Square
            setSquares={setSquares}
            index={index}
            squareValue={squareValue}
            squares={squares}
            player={player}
            setPlayer={setPlayer}
          />
        ))}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;

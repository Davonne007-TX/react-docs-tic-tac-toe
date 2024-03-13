import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Square from "./components/Square.jsx";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    console.log("Winner:", winner);
  } else {
    status = "Player Up: " + (xIsNext ? "X" : "O");
  }

  const startNewGame = () => {
    setSquares(Array(9).fill(null));
    setXisNext(true);
    console.log("A New Game has been started!");
  };

  return (
    <>
      <main className=" flex flex-col h-screen justify-center items-center bg-cover bg-[url('/images/finished.jpg')]">
        <h1 className="text-white text-center text-5xl lg:text-6xl font-titan font-bold absolute bottom-3/4 top-20 lg:top-30 underline">
          Tik-Tac-Toe
        </h1>

        <section>
          <div className="bg-pink-400 mb-10 p-2 font-titan text-white rounded-xl text-center text-xl">
            {status}
          </div>
          <div className="flex flex-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="flex flex-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="flex flex-row">
            <Square
              value={squares[6]}
              onSquareClick={() => {
                handleClick(6);
              }}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => {
                handleClick(7);
              }}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => {
                handleClick(8);
              }}
            />
          </div>
        </section>

        <Button label="Start New Game" onClick={startNewGame} />
      </main>
    </>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
export default App;

import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Square from "./components/Square.jsx";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };

  return (
    <>
      <main className=" flex flex-col h-screen justify-center items-center bg-cover bg-[url('/images/skee-ball.jpg')]">
        <h1 className="text-myTeal text-center text-5xl lg:text-6xl font-titan font-bold absolute bottom-3/4 top-20 lg:top-30 underline">
          Tik-Tac-Toe
        </h1>

        <section>
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

        <Button label="Start New Game" />
      </main>
    </>
  );
}

export default App;

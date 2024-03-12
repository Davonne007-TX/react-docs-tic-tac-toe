import "./App.css";
import Button from "./components/Button";
import Square from "./components/Square.jsx";

function App() {
  return (
    <>
      <main className=" flex flex-col h-screen justify-center items-center bg-cover bg-[url('/images/skee-ball.jpg')]">
        <h1 className="text-white text-center text-5xl lg:text-6xl font-titan font-bold absolute bottom-3/4 top-20 underline">
          Tik-Tac-Toe
        </h1>

        <section>
          <div className="flex flex-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="flex flex-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="flex flex-row">
            <Square />
            <Square />
            <Square />
          </div>
        </section>

        <Button label="Start New Game" />
      </main>
    </>
  );
}

export default App;

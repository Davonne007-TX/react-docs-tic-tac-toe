import "./App.css";
import Button from "./components/Button";
import Square from "./components/Square.jsx";

function App() {
  return (
    <>
      <main className=" flex flex-col h-screen justify-center items-center bg-cover bg-[url('/images/paddysDay.jpg')]">
        <h1 className="text-orange-100 text-4xl md:text-5xl lg:text-7xl font-mon font-bold absolute bottom-3/4 top-20">
          Tik-Tac-Toe
        </h1>

        <section className=" rounded-2xl">
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

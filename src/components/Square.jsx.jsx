export default function Square({ value, onSquareClick }) {
  return (
    <>
      <section className="bg-white">
        <button
          className="border-2 border-black p-4 w-32 h-32 font-titan text-5xl text-black"
          onClick={onSquareClick}
        >
          {value}
        </button>
      </section>
    </>
  );
}

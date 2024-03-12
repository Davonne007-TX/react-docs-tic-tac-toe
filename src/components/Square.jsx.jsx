import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null); //each square has its own state

  const handleClick = () => {
    setValue("X");
  };

  return (
    <>
      <section className="bg-white">
        <button
          className="border-4 border-black p-4 w-32 h-32 font-titan text-5xl text-candy"
          onClick={handleClick}
        >
          {value}
        </button>
      </section>
    </>
  );
}

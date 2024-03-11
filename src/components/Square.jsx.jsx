import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue("X");
  };

  return (
    <>
      <section className="bg-white">
        <button
          className="border-4 border-green-500 text-black p-4 w-32 h-32 font-serif text-2xl"
          onClick={handleClick}
        >
          {value}
        </button>
      </section>
    </>
  );
}

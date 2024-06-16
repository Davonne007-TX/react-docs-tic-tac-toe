export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-pink-400 mt-10 bg-white p-4 rounded-full font-titan text-xl hover:bg-black hover:text-white"
    >
      {label}
    </button>
  );
}

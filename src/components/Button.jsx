export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white mt-10 bg-pink-300 p-4 rounded-full font-titan text-xl hover:bg-purple-300 hover:text-white"
    >
      {label}
    </button>
  );
}

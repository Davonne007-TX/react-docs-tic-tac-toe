export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-green-500 mt-10 bg-white p-4 rounded-full font-titan text-xl hover:bg-black hover:text-green-500"
    >
      {label}
    </button>
  );
}

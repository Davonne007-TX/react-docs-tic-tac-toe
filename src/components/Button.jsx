export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white mt-10 bg-green-500 p-4 rounded-full font-titan text-xl hover:bg-white hover:text-green-500"
    >
      {label}
    </button>
  );
}

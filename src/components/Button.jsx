export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white mt-10 bg-green-500 p-4 rounded-full font-mon text-xl hover:text-orange-100"
    >
      {label}
    </button>
  );
}

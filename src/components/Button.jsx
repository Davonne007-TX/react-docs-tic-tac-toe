export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white mt-10 bg-black p-4 rounded-full font-titan text-xl hover:bg-myTeal hover:text-black"
    >
      {label}
    </button>
  );
}

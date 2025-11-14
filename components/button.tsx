export default function Button({text= ''}) {
  return (
      <button className="border-white border-3 p-3 md:p-4 rounded-2xl hover:bg-white hover:text-black m-1 cursor-pointer">
        <span className="text-sm">{text}</span>
      </button>
  );
}
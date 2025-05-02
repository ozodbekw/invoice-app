import { FaPlus } from "react-icons/fa";

function Button() {
  return (
    <button className="btn rounded-[24px] hover:bg-[#9277FF] bg-[#7C5DFA] p-2 border-0 h-12 text-white">
      <FaPlus className="p-3 bg-white rounded-full text-[#9277FF] w-8 h-8" />
      New Invoice
    </button>
  );
}

export default Button;

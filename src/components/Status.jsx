function Status({ status }) {
  const statusStyles = {
    paid: {
      text: "text-[#33D69F]",
      bg: "bg-[#F3FDFA]",
      dot: "bg-[#33D69F]",
    },
    pending: {
      text: "text-[#FF8F00]",
      bg: "bg-[#FFF9F0]",
      dot: "bg-[#FF8F00]",
    },
    draft: {
      text: "text-[#373B53]",
      bg: "bg-[#F4F4F5]",
      dot: "bg-[#373B53]",
    },
  };

  const key = status.toLowerCase();
  const style = statusStyles[key] || {
    text: "text-[#222]",
    bg: "bg-[#fff]",
    dot: "bg-[#222]",
  };

  return (
    <div
      className={`w-[104px] h-[40px] py-[13px] ${style.text} ${style.bg} rounded-[6px]`}
    >
      <span className="font-bold text-[12px] leading-[15px] flex gap-2 items-center justify-center mx-auto w-[69px]">
        <span className={`w-2 h-2 rounded-full ${style.dot}`}></span>
        {status}
      </span>
    </div>
  );
}

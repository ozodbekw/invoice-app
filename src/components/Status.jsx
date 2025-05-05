function Status({ status }) {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const statusStyles = {
    paid: {
      text: "text-[#33D69F]",
      bg: "bg-[#33D69F]/6",
      dot: "bg-[#33D69F]",
    },
    pending: {
      text: "text-[#FF8F00]",
      bg: "bg-[#FF8F00]/6",
      dot: "bg-[#FF8F00]",
    },
    draft: {
      text: "text-[#373B53] dark:text-[#DFE3FA]",
      bg: "bg-[#373B53]/6 dark:bg-[#DFE3FA]/6",
      dot: "bg-[#373B53] dark:bg-[#DFE3FA]",
    },
  };

  const style = statusStyles[status] || {
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
        {capitalizeFirstLetter(status)}
      </span>
    </div>
  );
}

export default Status;

// router-dom
import { Link } from "react-router-dom";

// components
import Status from "./Status";

function formatDate(dateStr) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = dateStr.split("-");
  const formatted = `Due ${parseInt(day)} ${
    months[parseInt(month) - 1]
  } ${year}`;
  return formatted;
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function Invoice({ invoice }) {
  const { id, clientName, createdAt, total, status } = invoice;
  return (
    <Link
      to={"/invoice/" + id}
      className="flex items-center relative pr-10 justify-between py-4 pl-8  rounded-lg dark:bg-[#1E2139] border-1 border-transparent bg-base-100 hover:border-[#7C5DFA]"
    >
      <h3 className="font-bold text-[12px] leading-[15px] tracking-[-0.25%] dark:text-[#fff]">
        <span className="text-[#7E88C3] ">&#35;</span>
        {id}
      </h3>
      <span className="text-[#888EB0] dark:text-[#DFE3FA] text-[12px] leading-[15px] font-normal">
        {formatDate(createdAt)}
      </span>
      <span className="text-[#888EB0] dark:text-white text-[12px] leading-[15px]">
        {clientName}
      </span>
      <h3 className="text-[#0C0E16] dark:text-white font-bold text-[16px] leading-[24px]">
        £ {formatNumber(total)}
      </h3>
      <Status status={status} />
      <img
        className="absolute right-5"
        src="../assets/arrow-right.svg"
        alt="arrow right"
      />
    </Link>
  );
}

export default Invoice;

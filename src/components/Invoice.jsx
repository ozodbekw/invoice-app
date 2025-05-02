import Status from "./Status";

function Invoice({ status }) {
  return (
    <div className="flex items-center justify-between py-4 pl-8 pr-6 rounded-lg dark:bg-[#1E2139] bg-base-200">
      <h3 className="font-bold text-[12px] leading-[15px] tracking-[-0.25%] dark:text-[#fff]">
        <span className="text-[#7E88C3] ">&#35;</span>
        RT3080
      </h3>
      <span className="text-[#888EB0] text-[12px] leading-[15px] font-normal">
        Due 19 Aug 2021
      </span>
      <span className="text-[#888EB0] text-[12px] leading-[15px]">
        Jensen Huang
      </span>
      <h3 className="text-[#0C0E16] dark:text-white font-bold text-[16px] leading-[24px]">
        £ 1,800.90
      </h3>
      <Status status={status} />
    </div>
  );
}

export default Invoice;

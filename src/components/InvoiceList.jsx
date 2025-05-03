import Invoice from "./Invoice";

import data from "../../data.json";

function InvoiceList() {
  console.log(data);
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => {
        return <Invoice key={item.id} invoice={item} />;
      })}
      {null && (
        <div className="mx-auto mt-[10vh]">
          <img src="../assets/no-invoice.svg" alt="" />
          <h3 className="text-[#0C0E16] dark:text-white font-bold text-[20px] mb-6 text-center">
            There is nothing here
          </h3>
          <p className="text-[#888EB0] dark:text-[#DFE3FA] w-[230px] tracking-[-0.25px] text-center">
            Create an invoice by clicking the
            <span className="font-bold"> New Invoice</span> button and get
            started
          </p>
        </div>
      )}
    </div>
  );
}

export default InvoiceList;

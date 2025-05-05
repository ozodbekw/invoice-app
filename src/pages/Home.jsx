// components
import { FaPlus } from "react-icons/fa";
import { FormInput } from "../components";
import InvoiceList from "../components/InvoiceList";

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const from_street = formData.get("from_street");
    const from_city = formData.get("from_city");
    const from_postCode = formData.get("from_postCode");
    const from_country = formData.get("from_country");
    const to_select = formData.get("to_select");
    console.log({
      from_street,
      from_city,
      from_postCode,
      from_country,
      to_select,
    });
  };

  return (
    <div className="pt-[72px] pb-10">
      {/* home top bar */}
      <div className="flex justify-between mb-[65px]">
        <div>
          <h2 className="text-[#0C0E16] dark:text-white font-bold leading-[100%] text-[32px] mb-2">
            Invoices
          </h2>
          <p className="text-[#888EB0] dark:text-[#DFE3FA] text-[12px] leading-[15px]">
            There are 7 total invoices
          </p>
        </div>
        <div className="flex items-center justify-start">
          <div className=" w-[118px] dropdown dropdown-center border-0">
            <div
              tabIndex={0}
              role="button"
              className="w-[118px] bg-transparent  shadow-0 btn border-0"
            >
              Filter by status
            </div>
            <ul
              tabIndex={0}
              className="p-2   bg-white dark:bg-[#252945] shadow-sm dropdown-content menu rounded-box z-1 filter-shadow dark:shadow-[#00000040]"
            >
              <li className="flex flex-col ">
                <a className="relative ">
                  <svg
                    className="absolute top-[13px] left-[15px] text-white dark:text-[#1E2139]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="m1.5 4.5 2.124 2.124L8.97 1.278"
                    />
                  </svg>
                  <input
                    type="checkbox"
                    id="draft"
                    className="w-4 h-4 form-checkbox
                   bg-white dark:bg-[#1E2139] 
                   border border-[#7C5DFA] appearance-none
                   checked:bg-[#7C5DFA] 
                   checked:text-white
                   dark:checked:bg-[#7C5DFA] 
                   outline-none rounded"
                  />

                  <label htmlFor="draft">Draft</label>
                </a>
              </li>
              <li className="flex flex-col ">
                <a>
                  <svg
                    className="absolute top-[13px] left-[15px] text-white dark:text-[#1E2139]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="m1.5 4.5 2.124 2.124L8.97 1.278"
                    />
                  </svg>
                  <input
                    type="checkbox"
                    id="pending"
                    name="pending"
                    className="w-4 h-4 form-checkbox
                    bg-white dark:bg-[#1E2139] 
                    border border-[#7C5DFA] appearance-none
                    checked:bg-[#7C5DFA] 
                    checked:text-white
                    dark:checked:bg-[#7C5DFA] 
                    outline-none rounded"
                  />
                  <label htmlFor="pending">Pending</label>
                </a>
              </li>
              <li className="flex flex-col ">
                <a>
                  <svg
                    className="absolute top-[13px] left-[15px] text-white dark:text-[#1E2139]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="m1.5 4.5 2.124 2.124L8.97 1.278"
                    />
                  </svg>
                  <input
                    type="checkbox"
                    id="paid"
                    className="w-4 h-4 form-checkbox
             bg-white dark:bg-[#1E2139] 
             border border-[#7C5DFA] appearance-none
             checked:bg-[#7C5DFA] 
             checked:text-white
             dark:checked:bg-[#7C5DFA] 
             outline-none rounded peer"
                  />
                  <label htmlFor="paid">Paid</label>
                </a>
              </li>
            </ul>
          </div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn rounded-[24px] hover:bg-[#9277FF] bg-[#7C5DFA] p-2 ml-10 border-0 h-12 text-white"
              >
                <FaPlus className="p-3 bg-white rounded-full text-[#9277FF] w-8 h-8" />
                New Invoice
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="min-h-full pl-[159px] py-8 pr-[56px] menu bg-base-200 text-base-content w-[719px] rounded-r-[20px] overflow-y-hidden">
                <h2 className="mt-[56px] font-bold text-[24px] leading-[32px] text-[#0C0E16] dark:text-white">
                  New Invoice
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="overflow-y-auto h-[79vh] pb-[110px]">
                    {/* Bill From */}
                    <div className="mt-12">
                      <span className="text-[#7C5DFA] font-bold text-[12px] leading-[15px]">
                        Bill From
                      </span>
                      <FormInput
                        name="from_street"
                        label={"Street Address"}
                        type={"text"}
                      />
                      <div className="grid grid-cols-3 gap-6">
                        <FormInput
                          name="from_city"
                          label={"City"}
                          type={"text"}
                        />
                        <FormInput
                          name="from_postCode"
                          label={"Post Code"}
                          type={"text"}
                        />
                        <FormInput
                          name="from_country"
                          label={"Country"}
                          type={"text"}
                        />
                      </div>
                    </div>
                    {/* Bill to */}
                    <div className="mt-12">
                      <span className="text-[#7C5DFA] font-bold text-[12px] leading-[15px]">
                        Bill To
                      </span>
                      <FormInput
                        name="to_name"
                        label={"Client’s Name"}
                        type={"text"}
                      />
                      <FormInput
                        name="to_email"
                        label={"Client’s Email"}
                        type={"email"}
                      />
                      <FormInput
                        name="to_street"
                        label={"Street Address"}
                        type={"text"}
                      />
                      <div className="grid grid-cols-3 gap-6">
                        <FormInput
                          name="to_city"
                          label={"City"}
                          type={"text"}
                        />
                        <FormInput
                          name="to_postCode"
                          label={"Post Code"}
                          type={"text"}
                        />
                        <FormInput
                          name="to_country"
                          label={"Country"}
                          type={"text"}
                        />
                      </div>
                      <div className="mt-6">
                        <div className="grid grid-cols-2 gap-6 ">
                          <FormInput
                            name="to_date"
                            label={"Invoice Date"}
                            type={"date"}
                          />
                          <div className="mt-6">
                            <label
                              htmlFor="to_select"
                              className="mb-[10px] text-[#7E88C3] dark:text-[#DFE3FA] font-normal text-[12px] leading-[15px] "
                            >
                              Payment Terms
                            </label>
                            <select
                              defaultValue="Net 30 Days"
                              className="select focus:outline-0 active:border-[#7C5DFA] bg-transparent h-12 hover:border-[#7C5DFA] border-[#DFE3FA] py-4 px-5 "
                              name="to_select"
                              id="to_select"
                            >
                              <option className="bg-[#252945]">
                                Net 1 Day
                              </option>
                              <option className="bg-[#252945]">
                                Net 7 Days
                              </option>
                              <option className="bg-[#252945]">
                                Net 14 Days
                              </option>
                              <option
                                value="Net 30 Days"
                                className="bg-[#252945]"
                              >
                                Net 30 Days
                              </option>
                            </select>
                          </div>
                        </div>
                        <FormInput
                          name="to_project"
                          label={"Project Description"}
                          type={"text"}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-bold text-[18px] leading-[32px] text-[#777F98] my-8">
                        Item List
                      </h2>
                      <div className="flex mb-4">
                        <p className="w-[205px] text-[#7E88C3]">Item Name</p>
                        <span className="w-[65px] text-[#7E88C3]">Qty.</span>
                        <span className="w-[100px] text-[#7E88C3] ">
                          Price
                        </span>
                        <span className=" text-[#7E88C3]">Total</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="text"
                          className="dark:bg-[#1E2139] dark:border-[#252945] dark:text-white px-5 py-4 text-[#0C0E16] font-bold text-[12px] leading-[15px] border-[#DFE3FA] border-1 rounded-[4px] focus:outline-0"
                        />
                        <input
                          type="text"
                          className="dark:bg-[#1E2139] dark:border-[#252945] dark:text-white px-4 py-4 text-[#0C0E16] w-[46px] font-bold text-[12px] leading-[15px] border-[#DFE3FA] border-1 rounded-[4px] focus:outline-0"
                        />
                        <input
                          type="number"
                          className="dark:bg-[#1E2139] dark:border-[#252945] dark:text-white px-5 py-4 text-[#0C0E16] font-bold text-[12px] leading-[15px] border-[#DFE3FA] border-1 rounded-[4px] focus:outline-0 w-[100px]"
                        />
                        <span className="text-[#888EB0] dark:text-[#DFE3FA] font-bold text-[12px] leading-[15px] w-[45px]">
                          156.00
                        </span>
                        <img
                          className="ml-[22px] cursor-pointer"
                          src="../assets/remove.svg"
                          alt="hello"
                        />
                      </div>
                      <button
                        type="button"
                        className="py-4 px-[165px] mt-[18px] rounded-[24px] dark:bg-[#252945] bg-[#F9FAFE] dark:text-[#DFE3FA] btn border-0"
                      >
                        + Add New Item
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-white dark:bg-[#141625] right-0 px-14  pl-[159px] py-[32px]">
                    <label
                      className="btn rounded-[24px] bg-[#F9FAFE] border-0 mr-[139px] dark:text-[#7E88C3]"
                      aria-label="close sidebar"
                      htmlFor="my-drawer"
                    >
                      Discard
                    </label>
                    <button
                      type="button"
                      className="btn rounded-[24px] bg-[#F9FAFE] dark:bg-[#252945] text-[#7E88C3] border-0 mr-2"
                    >
                      Save as Draft
                    </button>
                    <button className="btn rounded-[24px] bg-[#7C5DFA] text-white border-0">
                      Save & Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InvoiceList />
    </div>
  );
}

export default Home;

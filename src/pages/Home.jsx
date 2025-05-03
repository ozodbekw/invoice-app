// components
import { Button, Invoice } from "../components";
import InvoiceList from "../components/InvoiceList";

function Home() {
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
        <div>
          <div className="mr-10 dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="m-1 bg-transparent shadow-0 btn"
            >
              Filter by status
            </div>
            <ul
              tabIndex={0}
              className="p-2 bg-white dark:bg-[#252945] shadow-sm dropdown-content menu rounded-box z-1 w-52 filter-shadow dark:shadow-[#00000040]"
            >
              <li className="flex flex-col ">
                <a className="relative">
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
                   outline-none rounded peer "
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
          <Button />
        </div>
      </div>
      <InvoiceList />
    </div>
  );
}

export default Home;

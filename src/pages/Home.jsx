import { Button, Invoice } from "../components";

function Home() {
  return (
    <div className="pt-[72px]">
      {/* home top bar */}
      <div className="flex justify-between mb-[65px]">
        <div>
          <h2 className="text-[#0C0E16] dark:text-darkText font-bold leading-[100%] text-[32px] mb-2">
            Invoices
          </h2>
          <p className="text-[#888EB0] text-[12px] leading-[15px]">
            There are 7 total invoices
          </p>
        </div>
        <div>
          <div className="mr-10 dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="m-1 bg-transparent border-0 btn"
            >
              Filter by status
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52"
            >
              <li>
                <a>Draft</a>
              </li>
              <li>
                <a>Pending</a>
              </li>
              <li>
                <a>Paid</a>
              </li>
            </ul>
          </div>
          <Button />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Invoice status={"Paid"} />
        <Invoice status={"Draft"} />
        <Invoice status={"Pending"} />
        <Invoice status={"Paid"} />
        <Invoice status={"Paid"} />
      </div>
    </div>
  );
}

export default Home;

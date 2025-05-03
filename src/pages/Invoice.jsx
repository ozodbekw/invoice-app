import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Status from "../components/Status";

function Invoice() {
  const { id } = useParams();
  const { users } = useSelector((store) => store.user);
  const [user, setUser] = useState(null);
  useEffect(() => {
    users.filter((item) => {
      item.id === id && setUser(item);
    });
  }, []);
  return (
    <div className="mt-[64px] mb-[54px] text-[#0C0E16] text-[12px] font-bold leading-[15px]">
      <Link
        to="/"
        className="flex gap-[23.6px] items-center mb-8 dark:text-white hover:text-[#7E88C3] dark:hover:text-[#888EB0]"
      >
        <img src="../assets/arrow-left.svg" alt="arrow left" />
        Go back
      </Link>

      {/* Invoice top */}
      <div className="px-8 py-5 rounded-[8px] bg-white dark:bg-[#1E2139] flex justify-between invoice-top-shadow">
        {/* Status */}
        <div className="flex items-center gap-4">
          <span className="dark:text-[#DFE3FA] text-[#858BB2]">Status</span>
          {user && <Status status={user.status} />}
        </div>
        {/* Top buttons */}
        <div className="flex gap-2">
          <button className="px-6 py-4 btn text-[#7E88C3] bg-[#F9FAFE] hover:bg-[#DFE3FA] font-bold text-[12px] leading-[15px] rounded-[24px] border-0">
            Edit
          </button>
          <button className="px-6 py-4 text-white btn bg-[#EC5757] hover:bg-[#FF9797] font-bold text-[12px] leading-[15px] rounded-[24px] border-0">
            Delete
          </button>
          <button className="btn  bg-[#7C5DFA] text-white hover:bg-[#9277FF] font-bold text-[12px] leading-[15px] rounded-[24px] border-0">
            Mark as Paid
          </button>
        </div>
      </div>

      {/* Invoice Bottom */}
      <div className="bg-white dark:bg-[#1E2139] p-12 rounded-[8px] mt-6 invoice-top-shadow">
        <div className="flex items-center justify-between mb-[21px]">
          <div className="flex flex-col gap-2">
            <span className="dark:text-white text-[#0C0E16] font-bold text-[16px] leading-[24px]">
              <span className="text-[#7E88C3]">&#35;</span>XM9141
            </span>
            <span className="text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA] font-normal">
              Graphic Design
            </span>
          </div>
          <div className="flex flex-col gap-0 text-right text-[#7E88C3] dark:text-[#DFE3FA] text-[11px] leading-[18px] font-normal">
            <span> 19 Union Terrace</span>
            <span>London </span>
            <span>E1 3EZ</span>
            <span>United Kingdom</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-[100px] gap-y-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                Invoice Date
              </span>
              <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px]">
                21 Aug 2021
              </h2>
            </div>
            <div className="flex flex-col gap-3 w-[98px]">
              <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                Payment Due
              </span>
              <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px]">
                20 Sep 2021
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
              Bill To
            </span>
            <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px]">
              Alex Grim
            </h2>
            <span className="w-[93px] dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[11px] leading-[18px]">
              84 Church Way Bradford BD1 9PB United Kingdom
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
              Sent to
            </span>
            <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px]">
              alexgrim@mail.com
            </h2>
          </div>
        </div>
        <div className="mt-[45px] bg-[#F9FAFE] dark:bg-[#252945] rounded-t-[8px] p-8">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-[#7E88C3] dark:text-[#DFE3FA] text-[11px] border-0">
                  <th className="font-normal">Item Name</th>
                  <th className="font-normal">QTY.</th>
                  <th className="font-normal">Price</th>
                  <th className="font-normal">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="border-0">
                  <th className="text-[#0C0E16]  dark:text-white font-bold text-[12px] leading-[15px]">
                    Banner Design
                  </th>
                  <td className="font-bold text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA]">
                    1
                  </td>
                  <td className="font-bold text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA]">
                    £ 156.00
                  </td>
                  <td className="font-bold text-[12px] leading-[15px] text-[#0C0E16] dark:text-white">
                    £ 156.00
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th className="text-[#0C0E16] dark:text-white  font-bold text-[12px] leading-[15px]">
                    Email Design
                  </th>
                  <td className="font-bold text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA]">
                    2
                  </td>
                  <td className="font-bold text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA]">
                    £ 200.00
                  </td>
                  <td className="font-bold text-[12px] leading-[15px] text-[#0C0E16] dark:text-white">
                    £ 400.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-[#373B53] dark:bg-[#0C0E16] text-white flex items-center justify-between py-6 px-8 rounded-b-[8px]">
          <span className="font-normal text-[11px] leading-[18px] tracking-[-0.23px]">
            Amount Due
          </span>
          <span className="font-bold text-[24px] leading-[32px]">£ 556.00</span>
        </div>
      </div>
    </div>
  );
}

export default Invoice;

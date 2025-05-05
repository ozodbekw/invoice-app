import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Status from "../components/Status";

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
  const formatted = `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
  return formatted;
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function Invoice() {
  const { id } = useParams();
  const { users } = useSelector((store) => store.user);
  const [user, setUser] = useState(null);
  useEffect(() => {
    users.filter((item) => {
      item.id === id && setUser(item);
    });
  }, []);

  console.log(user);
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

          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="px-6 py-4 text-white btn bg-[#EC5757] hover:bg-[#FF9797] font-bold text-[12px] leading-[15px] rounded-[24px] border-0"
          >
            Delete
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_1" className="modal">
            <div className="p-12 modal-box">
              <h3 className="font-bold dark:text-white mb-[13px] text-[24px] leading-[32px]">
                Confirm Deletion
              </h3>
              <p className="py-4 text-[#888EB0] dark:text-[#DFE3FA] font-normal text-[12px] leading-[22px] ">
                Are you sure you want to delete invoice #{user && user.id}? This
                action cannot be undone.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="px-6 py-4 btn text-[#7E88C3] bg-[#F9FAFE] hover:bg-[#DFE3FA] font-bold text-[12px] leading-[15px] rounded-[24px] border-0 mr-2">
                    Cancel
                  </button>
                  <button className="px-6 py-4 text-white btn bg-[#EC5757] hover:bg-[#FF9797] font-bold text-[12px] leading-[15px] rounded-[24px] border-0">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </dialog>
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
              <span className="text-[#7E88C3]">&#35;</span>
              {user && user.id}
            </span>
            <span className="text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA] font-normal">
              {user && user.description}
            </span>
          </div>
          <div className="flex flex-col gap-0 text-right text-[#7E88C3] dark:text-[#DFE3FA] text-[11px] leading-[18px] font-normal">
            <span>{user && user.senderAddress.street}</span>
            <span>{user && user.senderAddress.city}</span>
            <span>{user && user.senderAddress.postCode}</span>
            <span>{user && user.senderAddress.country}</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-[100px] gap-y-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                Invoice Date
              </span>
              <h2 className="text-[#0C0E16] w-[96px] dark:text-white font-bold text-[15px] leading-[12px]">
                {user && formatDate(user.createdAt)}
              </h2>
            </div>
            <div className="flex flex-col gap-3 w-[98px]">
              <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                Payment Due
              </span>
              <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px] w-[120px]">
                {user && formatDate(user.paymentDue)}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
              Bill To
            </span>
            <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px] w-[120px]">
              {user && user.clientName}
            </h2>
            <span className="w-[120px] dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[11px] leading-[18px] flex-col flex">
              <span>{user && user.clientAddress.street}</span>
              <span>{user && user.clientAddress.city}</span>
              <span>{user && user.clientAddress.postCode}</span>
              <span>{user && user.clientAddress.country}</span>
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
              Sent to
            </span>
            <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px]">
              {user && user.clientEmail}
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
                {user &&
                  user.items.map((item, index) => {
                    return (
                      <tr key={index} className="border-0">
                        <th className="text-[#0C0E16]  dark:text-white font-bold text-[12px] leading-[15px]">
                          {item.name}
                        </th>
                        <td className="font-bold text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA]">
                          {item.quantity}
                        </td>
                        <td className="font-bold text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA]">
                          £ {formatNumber(item.price)}
                        </td>
                        <td className="font-bold text-[12px] leading-[15px] text-[#0C0E16] dark:text-white">
                          £ {formatNumber(item.total)}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-[#373B53] dark:bg-[#0C0E16] text-white flex items-center justify-between py-6 px-8 rounded-b-[8px]">
          <span className="font-normal text-[11px] leading-[18px] tracking-[-0.23px]">
            Amount Due
          </span>
          <span className="font-bold text-[24px] leading-[32px]">
            £ {user && formatNumber(user.total)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Invoice;

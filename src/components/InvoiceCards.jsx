// react hooks
import { useEffect, useState } from "react";

// requests
import { getInvoices } from "../request";

// zustand
import { useAppStore } from "../lib/zustand";

// components
import MyCard from "./MyCard";
import CardSkeleton from "./CardSkeleton";
import PageNotuFound from "./PageNotuFound";

function InvoiceCards() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filter, invoices, setInvoices } = useAppStore();

  useEffect(() => {
    setLoading(true);
    getInvoices(filter)
      .then((res) => {
        setInvoices(res.data, "static");
      })
      .catch(({ message }) => {
        console.log(message);
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filter]);

  if (loading) {
    return <CardSkeleton />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (invoices.length === 0) {
    return <PageNotuFound />;
  }

  return (
    <div className="base-container flex flex-col gap-4 pb-5">
      {invoices.map((item) => {
        const { clientName, createdAt, id, status, total } = item;
        if (item.status === "") {
          item.status === "draft";
        }
        return (
          <MyCard
            clientName={clientName}
            createdAt={createdAt}
            key={id}
            status={status}
            total={total}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default InvoiceCards;

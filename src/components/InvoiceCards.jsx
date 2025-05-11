import { useEffect, useState } from "react";
import { getInvoices } from "../request";
import CardSkeleton from "./CardSkeleton";
import MyCard from "./MyCard";
import { useAppStore } from "../lib/zustand";
import PageNotuFound from "./PageNotuFound";

function InvoiceCards() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const { filter } = useAppStore();

  useEffect(() => {
    setLoading(true);
    getInvoices("/invoices", filter)
      .then((res) => {
        setInvoices(res.data);
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
        const { clientName, invoiceId, createdAt, id, status, total } = item;
        return (
          <MyCard
            clientName={clientName}
            invoiceId={invoiceId}
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

import { Link, useParams } from "react-router-dom";
import { getInvoice } from "../request";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import Status from "../components/Status";
import { Button, buttonVariants } from "../components/ui/button";
import { BallTriangle } from "react-loader-spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ArrowLeft } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";

function Details() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInvoice(id, "/invoices")
      .then((res) => {
        setInvoice(res);
        console.log(res);
      })
      .catch(({ message }) => {
        console.log(message);
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="mx-auto absolute left-[45vw]  top-[45vh]">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

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

  console.log(invoice);
  console.log(invoice.senderAddress);
  return (
    <div className="py-5">
      <div className="base-container">
        <Link
          to="/"
          className="inline-flex items-center gap-4 my-8 font-bold text-[12px] leading-[15px] text-zinc-950"
        >
          <ArrowLeft className="w-5" /> Go Home
        </Link>
        <Card>
          <CardContent className="flex justify-between items-center">
            <div>
              <span className="inline-flex gap-4 items-center">
                Status: <Status status={invoice.status} />
              </span>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost">Edit</Button>
              <Dialog>
                <DialogTrigger
                  className={buttonVariants({ variant: "destructive" })}
                >
                  Delete
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete invoice #
                      {invoice.invoiceId}? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-3 justify-end">
                    <DialogClose
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Cancel
                    </DialogClose>
                    <Button variant={"destructive"}>Delete</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="default">Mark as paid</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-6">
          {invoice.senderAddress && (
            <CardContent className="p-0">
              <div className="p-12">
                <div className="flex items-center justify-between mb-[21px]">
                  <div className="flex flex-col gap-2">
                    <span className="dark:text-white text-[#0C0E16] font-bold text-[16px] leading-[24px]">
                      <span className="text-[#7E88C3]">&#35;</span>
                      {invoice.invoiceId}
                    </span>
                    <span className="text-[12px] leading-[15px] text-[#7E88C3] dark:text-[#DFE3FA] font-normal">
                      {invoice.description}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0 text-right text-[#7E88C3] dark:text-[#DFE3FA] text-[11px] leading-[18px] font-normal">
                    <span>{invoice.senderAddress.street}</span>
                    <span>{invoice.senderAddress.city}</span>
                    <span>{invoice.senderAddress.postCode}</span>
                    <span>{invoice.senderAddress.country}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-x-[100px] gap-y-8">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                      <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                        Invoice Date
                      </span>
                      <h2 className="text-[#0C0E16] w-[96px] dark:text-white font-bold text-[15px] leading-[12px]">
                        {formatDate(invoice.createdAt)}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-3 w-[98px]">
                      <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                        Payment Due
                      </span>
                      <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px] w-[120px]">
                        {formatDate(invoice.paymentDue)}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                      Bill To
                    </span>
                    <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px] w-[120px]">
                      {invoice.clientName}
                    </h2>
                    <span className="w-[120px] dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[11px] leading-[18px] flex-col flex">
                      <span>{invoice.clientAddress.street}</span>
                      <span>{invoice.clientAddress.city}</span>
                      <span>{invoice.clientAddress.postCode}</span>
                      <span>{invoice.clientAddress.country}</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                      Sent to
                    </span>
                    <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px]">
                      {invoice.clientEmail}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-t-2xl mt-8">
                <div className=" bg-[#F9FAFE]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Item Name</TableHead>
                        <TableHead>QTY.</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Banner Design
                        </TableCell>
                        <TableCell classNametext="text-[#7E88C3]">1</TableCell>
                        <TableCell classNametext="text-[#7E88C3]">
                          £ 156.00
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          £ 156.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Email Design
                        </TableCell>
                        <TableCell classNametext="text-[#7E88C3]">2</TableCell>
                        <TableCell classNametext="text-[#7E88C3]">
                          £ 200.00
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          £ 400.00
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-between bg-[#373B53] py-8 px-6 items-center rounded-b-2xl text-white">
                  <p>Amount Due</p>
                  <h3>£ 556.00</h3>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Details;

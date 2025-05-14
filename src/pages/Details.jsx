// router-dom
import { Link, useNavigate, useParams } from "react-router-dom";

// requests
import { deleteById, getInvoice, updateById } from "../request";

// react hooks
import { useEffect, useState } from "react";

// components
import Status from "../components/Status";

// shadcn
import { Card, CardContent } from "../components/ui/card";
import { Button, buttonVariants } from "../components/ui/button";
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogClose } from "@radix-ui/react-dialog";

// icons
import { ArrowLeft } from "lucide-react";

// toaster
import { toast } from "sonner";

// zustand
import { useAppStore } from "../lib/zustand";

// function formatDate(dateStr) {
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const [year, month, day] = dateStr.split("-");
//   const formatted = `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
//   return formatted;
// }

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const { updateInvoices, setSheetOpen, setEditedData } = useAppStore();

  function handleDelete(id) {
    setDeleteLoading(true);
    deleteById(id)
      .then((res) => {
        navigate("/");
      })
      .catch(({ message }) => {
        toast.error(message);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  }

  function handleUpdate(id, data) {
    setUpdateLoading(true);
    updateById(id, data)
      .then((res) => {
        updateInvoices(res);
        navigate("/");
      })
      .catch(({ message }) => {
        toast.error(message);
      })
      .finally(() => {
        setUpdateLoading(false);
      });
  }

  function handleEdit(data) {
    setEditedData(data);
    setSheetOpen();
  }

  useEffect(() => {
    setLoading(true);
    getInvoice(id)
      .then((res) => {
        setInvoice(res);
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
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="py-5">
      <div className="base-container">
        <Link
          to="/"
          className="inline-flex items-center gap-4 my-8 font-bold text-[12px] leading-[15px] text-zinc-950 dark:text-white"
        >
          <ArrowLeft className="w-5" /> Go Home
        </Link>
        <Card>
          <CardContent className="flex md:flex-row gap-5 md:gap-0 flex-col justify-between items-center">
            <div>
              <span className="inline-flex gap-4 items-center">
                Status: <Status status={invoice.status} />
              </span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => {
                  handleEdit(invoice);
                }}
              >
                Edit
              </Button>
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
                      Are you sure you want to delete invoice #{invoice.id}?
                      This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-3 justify-end">
                    <DialogClose
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Cancel
                    </DialogClose>
                    <Button
                      variant={"destructive"}
                      onClick={() => {
                        handleDelete(id);
                      }}
                      disabled={deleteLoading}
                    >
                      {deleteLoading ? "Loading..." : "Delete"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              {invoice.status === "pending" && (
                <Button
                  variant="default"
                  onClick={() => handleUpdate(invoice.id, { status: "paid" })}
                >
                  {updateLoading ? "Loading" : "Mark as paid"}
                </Button>
              )}
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
                      <span className="dark:text-[#fff]">{invoice.id}</span>
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
                        {invoice.createdAt}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-3 w-[98px]">
                      <span className="dark:text-[#DFE3FA] text-[#7E88C3] font-normal text-[12px] leading-[15px]">
                        Payment Due
                      </span>
                      <h2 className="text-[#0C0E16] dark:text-white font-bold text-[15px] leading-[12px] w-[120px]">
                        {invoice.paymentDue}
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
                <div className="dark:bg-slate-900 dark:text-white">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px] text-indigo-300 dark:text-indigo-100">
                          Item Name
                        </TableHead>
                        <TableHead className="text-indigo-300 dark:text-indigo-100">
                          QTY.
                        </TableHead>
                        <TableHead className="text-indigo-300 dark:text-indigo-100">
                          Price
                        </TableHead>
                        <TableHead className="text-right text-indigo-300 dark:text-indigo-100">
                          Total
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoice.items.map((item, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {item.name}
                            </TableCell>
                            <TableCell className=" text-indigo-300 dark:text-indigo-100">
                              {item.quantity}
                            </TableCell>
                            <TableCell className=" text-indigo-300 dark:text-indigo-100">
                              £ {item.price}
                            </TableCell>
                            <TableCell className="text-right font-medium">
                              £ {item.total}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-between bg-[#373B53] py-8 px-6 items-center rounded-b-2xl text-white">
                  <p>Amount Due</p>
                  <h3>£ {invoice.total}</h3>
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

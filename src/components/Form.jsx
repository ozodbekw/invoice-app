// react hooks
import { useEffect, useState } from "react";

// zustand
import { useAppStore } from "../lib/zustand";

// request
import { addInvoice, updateById } from "../request";
import { propareData } from "../lib/utils";

// components
import ItemList from "./ItemList";

// shadcn
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// toaster
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Form({ info, setSheetOpen }) {
  const [sending, setSending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(null);

  const navigate = useNavigate();

  const { items: zustandItems } = useAppStore();

  const {
    createdAt,
    clientAddress,
    senderAddress,
    clientEmail,
    clientName,
    description,
    paymentTerms,
  } = info || {};

  const { updateInvoices } = useAppStore();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const result = {};

    if (!info) {
      result.status = e.nativeEvent.submitter.id;
    }

    const ignoreKeys = ["quantity", "price", "name", "description"];

    formData.forEach((value, key) => {
      if (key === "quantity" || key === "price" || key === "paymentTerms") {
        return (result[key] = Number(value));
      } else if (ignoreKeys.includes(key)) {
        return;
      } else {
        return (result[key] = value);
      }
    });

    result.items = zustandItems;

    const readyData = propareData(result);
    setSending({
      mode: e.nativeEvent.submitter.id === "edit" ? "edit" : "add",
      data: readyData,
    });
  }

  useEffect(() => {
    if (sending) {
      if (sending.mode === "add") {
        console.log(sending.data);
        setLoading(true);
        addInvoice(sending.data)
          .then((res) => {
            updateInvoices(res);
            toast.success("Successfully added ✅");
            setSheetOpen(false);
            navigate("/");
            console.log(res.data);
          })
          .catch(({ message }) => {
            toast.error(message);
          })
          .finally(() => {
            setLoading(false);
            setSending(null);
          });
      } else if (sending.mode === "edit") {
        setLoading(true);
        updateById(info.id, sending.data)
          .then((res) => {
            updateInvoices(res);
            toast.success("Successfully edited ✅");
            setSheetOpen(false);
            navigate("/");
          })
          .catch(({ message }) => {
            toast.error(message);
          })
          .finally(() => {
            setLoading(false);
            setSending(null);
          });
      }
    }
  }, [sending ? JSON.stringify(sending) : sending]);

  return (
    <form onSubmit={handleSubmit} className="p-4 pt-[50px]">
      {/* Bill From */}
      <div className="mb-10">
        <h3 className="text-xl font-medium text-[#7C5DFA] mb-6">Bill From</h3>
        <div className="flex flex-col">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="senderAddress-street">Street Address</Label>
            <Input
              id="senderAddress-street"
              name="senderAddress-street"
              type="text"
              placeholder="Street address"
              defaultValue={info && senderAddress.street}
              required
            />
          </div>

          <div className="flex gap-4 mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="senderAddress-city">City</Label>
              <Input
                id="senderAddress-city"
                type="text"
                placeholder="City"
                name="senderAddress-city"
                defaultValue={info && senderAddress.city}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="senderAddress-postCode">Post Code</Label>
              <Input
                id="senderAddress-postCode"
                name="senderAddress-postCode"
                type="text"
                placeholder="Post Code"
                defaultValue={info && senderAddress.postCode}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="senderAddress-country">Country</Label>
              <Input
                id="senderAddress-country"
                name="senderAddress-country"
                type="text"
                placeholder="Country"
                defaultValue={info && senderAddress.country}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bill To */}
      <div className="mb-10">
        <h3 className="text-xl font-medium text-[#7C5DFA] mb-6">Bill To</h3>
        <div className="flex flex-col gap-4 mb-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="clientName">Client’s Name</Label>
            <Input
              id="clientName"
              name="clientName"
              type="text"
              placeholder="Client Name"
              defaultValue={info && clientName}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="clientEmail">Client’s Email</Label>
            <Input
              id="clientEmail"
              name="clientEmail"
              type="email"
              placeholder="Client Email"
              defaultValue={info && clientEmail}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="clientAddress-street">Street Address</Label>
            <Input
              id="clientAddress-street"
              name="clientAddress-street"
              type="text"
              placeholder="Street address"
              defaultValue={info && clientAddress.street}
            />
          </div>

          <div className="flex gap-4 mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="clientAddress-city">City</Label>
              <Input
                id="clientAddress-city"
                type="text"
                placeholder="City"
                name="clientAddress-city"
                defaultValue={info && clientAddress.city}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="clientAddress-postCode">Post Code</Label>
              <Input
                id="clientAddress-postCode"
                name="clientAddress-postCode"
                type="text"
                placeholder="Post Code"
                defaultValue={info && clientAddress.postCode}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="clientAddress-country">Country</Label>
              <Input
                id="clientAddress-country"
                name="clientAddress-country"
                type="text"
                placeholder="Country"
                defaultValue={info && clientAddress.country}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="mb-5">
        <div className="flex gap-4 mb-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="createdAt">Invoice Date</Label>
            <Input
              id="createdAt"
              name="createdAt"
              type="date"
              placeholder="Invoice Date"
              defaultValue={info && createdAt}
            />
          </div>
          <div className="w-full">
            <p>Payment Terms</p>

            <Select name="paymentTerms">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Payment Terms" />
              </SelectTrigger>
              <SelectContent defaultValue={info && paymentTerms}>
                <SelectItem value="1">Net 1 Day</SelectItem>
                <SelectItem value="7">Net 7 Days</SelectItem>
                <SelectItem value="14">Net 14 Days</SelectItem>
                <SelectItem value="30">Net 30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="describtion">Project Describtion</Label>
          <Input
            id="describtion"
            name="describtion"
            type="text"
            placeholder="Describtion"
            defaultValue={info && description}
          />
        </div>
      </div>

      <ItemList info={info && info.items} />

      {info ? (
        <div className="flex justify-end gap-5 mt-10">
          <Button type="button" variant="outline" onClick={setSheetOpen}>
            Cancel
          </Button>
          <Button id="edit" disabled={loading}>
            {updating ? "Loading..." : "Save Changes"}
          </Button>
        </div>
      ) : (
        <div className="flex justify-end gap-5 mt-10">
          <Button onClick={setSheetOpen} type="button" variant="outline">
            Discard
          </Button>
          <Button id="draft" variant="secondary">
            Sava as Draft
          </Button>
          <Button disabled={loading} id="pending">
            {loading ? "Loading..." : "Save & Send"}{" "}
          </Button>
        </div>
      )}
    </form>
  );
}

export default Form;

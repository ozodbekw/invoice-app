// shadcn icons
import { PlusCircle, Trash2 } from "lucide-react";

// shadcn
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// react hooks
import { useEffect, useState } from "react";

// toaster
import { toast } from "sonner";

// zustand
import { useAppStore } from "../lib/zustand";

function ItemList({ info }) {
  const [localItems, setLocalItems] = useState(
    info
      ? info
      : [
          {
            id: crypto.randomUUID,
            name: "Des",
            quantity: 2,
            price: 156,
            get total() {
              return +this.price * +this.quantity;
            },
          },
        ]
  );

  const { items, setItems } = useAppStore();
  useEffect(() => {
    setItems(localItems);
  }, [JSON.stringify(localItems)]);

  function handleChange(e, id) {
    e.preventDefault();

    const changedItem = localItems.find((el) => {
      return el.id === id;
    });
    changedItem[e.target.name] = e.target.value;

    setLocalItems((prev) => {
      const mapped = prev.map((item) => {
        if (prev.id === changedItem.id) {
          return changedItem;
        } else {
          return item;
        }
      });
      return mapped;
    });
  }

  function handleClick(type, id) {
    if (type === "add") {
      if (localItems.at(-1).name.trim() !== "") {
        setLocalItems((prev) => {
          return [
            ...prev,
            {
              id,
              name: "",
              quantity: 1,
              price: 0,
              get total() {
                return this.price * this.quantity;
              },
            },
          ];
        });
      } else {
        toast.info("Oxirgi nameni kiriting!");
      }
    } else if (type === "delete") {
      if (localItems.length === 1) {
        toast.info("1 ta qolsin.");
      } else {
        const filtered = localItems.filter((el) => el.id !== id);
        setLocalItems(filtered);
      }
    }
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[#777F98] text-2xl mt-8 mb-4">Item List</h2>
      <div className="flex  items-center gap-4 justify-between">
        <span>Item Name</span>
        <span>Name</span>
        <span>Price</span>
        <span>Total</span>
        <span></span>
      </div>
      <ul className="mb-5 flex flex-col gap-5">
        {localItems.map(({ name, quantity, total, price, id }, index) => {
          return (
            <li key={index} className="flex items-center justify-between gap-5">
              <Input
                onChange={(e) => handleChange(e, id)}
                name="name"
                id=""
                className="w-[100px]"
                type="text"
                defaultValue={name}
                placeholder="Item Name"
              />
              <Input
                onChange={(e) => handleChange(e, id)}
                name="quantity"
                id=""
                className="w-[100px]"
                type="number"
                defaultValue={quantity}
                placeholder="Item Qty."
              />
              <Input
                onChange={(e) => handleChange(e, id)}
                name="price"
                id=""
                className="w-[100px]"
                type="number"
                defaultValue={price}
                placeholder="Item Price"
              />
              <span>{total}</span>
              {/* <span>{total.toFixed(2)}</span> */}
              <Button
                type="button"
                onClick={() => handleClick("delete", id)}
                variant="destructive"
                size={"icon"}
                className="cursor-pointer"
              >
                <Trash2 />
              </Button>
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        onClick={() => handleClick("add", crypto.randomUUID())}
        variant={"secondary"}
      >
        <PlusCircle /> Add New Item
      </Button>
    </div>
  );
}

export default ItemList;

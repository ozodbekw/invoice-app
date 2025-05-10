import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { queryGenerator } from "../lib/utils";
import { ArrowBigDown, Plus } from "lucide-react";
import { useAppStore } from "../lib/zustand";

function Header() {
  const [items, setItems] = useState({
    draft: false,
    paid: false,
    pending: false,
  });
  const { setFilter } = useAppStore();

  function handleChange(key) {
    setItems((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  }

  useEffect(() => {
    const query = queryGenerator(items);
    setFilter(query);
  }, [JSON.stringify(items)]);

  return (
    <header>
      <div className="base-container flex items-center justify-between py-10">
        <div>
          <h1 className="font-bold text-[32px]">Invoices</h1>
          <p className="text-[12px]">There are 7 total invoices</p>
        </div>
        <div className="flex gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={buttonVariants({ variant: "ghost" })}>
                Filter by status <ArrowBigDown />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Statuses</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="flex flex-col">
                {Object.entries(items).map(([key, value], index) => {
                  return (
                    <label
                      key={index}
                      htmlFor={key}
                      className={`${buttonVariants({
                        variant: "ghost",
                      })} justify-start`}
                    >
                      <Checkbox
                        checked={value}
                        onCheckedChange={() => handleChange(key)}
                        id={key}
                        value={key}
                      />
                      <span> {key}</span>
                    </label>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Button></Button> */}
          <Sheet className="w-[800px]">
            <SheetTrigger className={buttonVariants({ variant: "default" })}>
              <Plus /> New invoice
            </SheetTrigger>
            <SheetContent
              className="w-[800px] sm:w-[540px] ml-[78px]"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription className="">
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  voluptatum illo expedita beatae quod asperiores soluta fugiat
                  assumenda, quaerat voluptate eos odio nobis nemo dolorum
                  nesciunt placeat deleniti iusto sit? Iste perferendis tenetur
                  soluta, eos quibusdam minima asperiores qui id doloremque.
                  Doloribus est a laborum modi nisi? Magnam, voluptates omnis.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;

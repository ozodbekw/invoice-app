// shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Checkbox } from "./ui/checkbox";
import { Button, buttonVariants } from "./ui/button";

// react hooks
import { useEffect, useState } from "react";
import { queryGenerator } from "../lib/utils";

// icons
import { ArrowBigDown, Plus } from "lucide-react";

// zustand
import { useAppStore } from "../lib/zustand";

function Header() {
  const [items, setItems] = useState({
    draft: false,
    paid: false,
    pending: false,
  });
  const { setFilter, setSheetOpen } = useAppStore();

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
      <div className="base-container flex-col md:flex-row gap-5 md:gap-0 flex items-center justify-between py-10">
        <div>
          <h1 className="font-bold text-[32px]">Invoices</h1>
          <p className="text-[12px]">There are {items.length} total invoices</p>
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
          <Button
            onClick={setSheetOpen}
            className="rounded-[24px] bg-[#7C5DFA] hover:bg-[#9277FF] text-white"
          >
            <Plus className="border-1 border-white rounded-full bg-white text-[#7C5DFA]" />
            New invoice
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

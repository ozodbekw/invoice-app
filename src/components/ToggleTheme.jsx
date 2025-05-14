// react hooks
import { useEffect, useState } from "react";

// shadcn icons
import { ArrowBigDown, Moon, Sun } from "lucide-react";

// zustand
import { useAppStore } from "../lib/zustand";

// shadcn
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function ToggleTheme() {
  const [dark, setDark] = useState(
    document.documentElement.dataset.theme.startsWith("dark-")
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "default"
  );

  const { themes } = useAppStore();
  function handleTheme(type, mode) {
    const html = document.documentElement;
    let isDark;
    if (html.dataset.theme.startsWith("dark-")) {
      isDark = true;
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
      isDark = false;
    }
    setDark(isDark);

    if (mode === "theme") {
      if (isDark) {
        html.dataset.theme = `dark-${type}`;
        setTheme(`dark-${type}`);
      } else {
        html.dataset.theme = type;
        setTheme(type);
      }
    } else if (mode === "dark") {
      if (type.startsWith("dark-")) {
        html.dataset.theme = type.replace("dark-", "");
        setTheme(type.replace("dark-", ""));
      } else {
        html.dataset.theme = `dark-${type}`;
        setTheme(`dark-${type}`);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, []);

  return (
    <div className="flex gap-5 md:flex-col z-30">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={buttonVariants({ variant: "secondary" })}>
            <span className="md:hidden"> Change theme</span> <ArrowBigDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-[100]">
          <DropdownMenuLabel>Themes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-col">
            {themes.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => handleTheme(item, "theme")}
                  className="justify-start"
                  variant="ghost"
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button onClick={() => handleTheme(theme, "dark")}>
        {dark ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}

export default ToggleTheme;

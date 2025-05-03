import { useEffect, useState } from "react";

// react-icons
import { FaMoon, FaSun } from "react-icons/fa";

function Sidebar() {
  const themeFromLocalStorage = () => {
    return localStorage.getItem("theme") || "light";
  };

  const [theme, setTheme] = useState(themeFromLocalStorage());
  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (theme == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-[#373B53] rounded-r-[20px] overflow-hidden flex flex-col justify-between w-[103px] h-[100dvh]">
      <div
        className="w-[103px] h-[103px] flex bg-[#7C5DFA] justify-center items-center rounded-r-[20px]"
        style={{
          backgroundImage: "url('../assets/sidebar-logo-bg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <img src="../assets/logo.svg" alt="site logo" />
      </div>

      <div className="">
        <label className="swap swap-rotate p-8 border-b-2 border-[#494E6E]">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleTheme} />

          {/* sun icon */}

          <FaSun className="swap-off h-[20px]  fill-current text-[#7E88C3]  w-[20px]" />

          {/* moon icon */}
          <FaMoon className="swap-on h-[20px]  fill-current text-[#7E88C3] w-[20px] " />
        </label>
        <img className="mx-auto my-6" src="../assets/user.png" alt="hellow" />
      </div>
    </div>
  );
}

export default Sidebar;

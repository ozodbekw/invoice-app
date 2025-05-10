import Logo from "../assets/logo.svg";
import ToggleTheme from "./ToggleTheme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Sidebar() {
  return (
    <div className="bg-[#373B53] flex items-center justify-between md:flex-col md:fixed md:h-full md:left-0 md:w-[78px] md:top-0 md:bottom-0 md:z-[99]">
      <div>
        <img src={Logo} alt="site logo" />
      </div>
      <div className=" flex items-center gap-4 pr-5 md:pr-0 md:flex-col">
        <ToggleTheme />
        <Avatar className="mt-5 mb-5 mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Sidebar;

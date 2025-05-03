// components
import Sidebar from "../components/Sidebar";

// router-dom
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex relative h-full w-full bg-[#f8f8fb] dark:bg-[#141625] ">
      <Sidebar />
      <main className="grow mx-auto w-full max-w-[730px] overflow-y-auto scrollbar-none h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

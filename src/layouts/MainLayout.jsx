import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex relative w-full">
      <Sidebar />
      <main className="grow mx-auto w-full max-w-[730px]">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

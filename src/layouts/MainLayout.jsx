// components
import Sidebar from "../components/Sidebar";

// router-dom
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

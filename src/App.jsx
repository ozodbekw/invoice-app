import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;

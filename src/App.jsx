import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Details from "./pages/Details";
import MainLayout from "./layouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/:id", element: <Details /> },
      ],
    },
    { path: "/*", element: <NotFound /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;

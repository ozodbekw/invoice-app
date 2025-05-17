import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home, Details, Login, Register } from "./pages";
import MainLayout from "./layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { isAuthReady, login } from "./app/features/userSlice";

function App() {
  const { user, isAuth } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Home /> },
        { path: "/:id", element: <Details /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      }
      dispatch(isAuthReady());
    });
  }, []);
  return <>{isAuth && <RouterProvider router={routes} />}</>;
}

export default App;

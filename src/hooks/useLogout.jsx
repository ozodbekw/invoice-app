import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { logout } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

export const useLogout = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const signout = async () => {
    setIsPending(true);
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { signout, isPending };
};

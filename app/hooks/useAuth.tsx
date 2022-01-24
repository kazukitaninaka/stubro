import { useEffect } from "react";
import "../utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/user";

export default function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    // check if user is logged in at first mount
    // if so set user to userSlice
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ id: user.uid, email: user.email! }));
      }
    });
  }, []);
}

import { useEffect } from "react";
import "../utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/user";

export default function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email! }));
      }
    });
  }, []);
}

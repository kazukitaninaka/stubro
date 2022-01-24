import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInitial } from "../../slices/user";
import { RootState } from "../../stores";
import { useRouter } from "next/router";

export default function MyPage() {
  const { id, email } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setUserInitial());
        router.push("/signin");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div>
      <p>Email: {email}</p>
      <button
        className="border bg-sky-500 text-white p-2 mt-5"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

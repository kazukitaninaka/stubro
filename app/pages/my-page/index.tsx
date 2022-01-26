import { getAuth, signOut } from "firebase/auth";
import React from "react";
import useUserSlice from "../../slices/user/useUserSlice";
import { useRouter } from "next/router";

export default function MyPage() {
  const { user, setUserInitial } = useUserSlice();
  const router = useRouter();

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInitial();
        router.push("/signin");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div>
      <p>Email: {user.email}</p>
      <button
        className="border bg-sky-500 text-white p-2 mt-5"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

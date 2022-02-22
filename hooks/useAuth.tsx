import { useEffect, useState } from 'react';
import '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useUserSlice from '../slices/user/useUserSlice';
import { getUserIdByUid } from "../utils"


export default function useAuth() {
  const { setUser } = useUserSlice();

  useEffect(() => {
    const auth = getAuth();
    // check if user is logged in at first mount
    // if so set user to userSlice
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userId = await getUserIdByUid(user)
          setUser({ id: userId!, email: user.email!, username: user.displayName! });
        } catch (error) {
          console.log(error);
        }

      }
    });
  }, []);
}

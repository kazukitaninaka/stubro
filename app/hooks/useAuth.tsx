import { useEffect } from 'react';
import '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useUserSlice from '../slices/user/useUserSlice';

export default function useAuth() {
  const { setUser } = useUserSlice();

  useEffect(() => {
    const auth = getAuth();
    // check if user is logged in at first mount
    // if so set user to userSlice
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ id: user.uid, email: user.email!, username: user.displayName ?? 'hoge' });
      }
    });
  }, []);
}

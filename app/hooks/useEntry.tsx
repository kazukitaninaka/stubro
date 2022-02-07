import React, { useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import useUserSlice from '../slices/user/useUserSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function useEntry() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSigning, setIsSigning] = useState<boolean>(false);
  const { setUser } = useUserSlice();
  const router = useRouter();

  function login(e: React.FormEvent<HTMLFormElement>) {
    setIsSigning(true);
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({ id: user.uid, email: user.email! });
        toast.success('ログイン完了!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
        setIsSigning(false);
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsSigning(false);
      });
  }

  function loginViaGoogle(e: React.FormEvent<HTMLFormElement>) {
    setIsSigning(true);
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser({ id: user.uid, email: user.email! });
        toast.success('ログイン完了!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
        setIsSigning(false);
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsSigning(false);
      });
  }

  function signup(e: React.FormEvent<HTMLFormElement>) {
    setIsSigning(true);
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({ id: user.uid, email: user.email! });
        toast.success('ログイン完了!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
        setIsSigning(false);
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsSigning(false);
      });
  }

  return { setEmail, setPassword, isSigning, signup, login, loginViaGoogle };
}

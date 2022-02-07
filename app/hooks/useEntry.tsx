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

  const renderInputFields = () => (
    <div className='rounded-md shadow-sm -space-y-px'>
      <div>
        <input
          name='email'
          type='email'
          autoComplete='email'
          required
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
          placeholder='メールアドレス'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          name='password'
          type='password'
          autoComplete='current-password'
          required
          className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
          placeholder='パスワード'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );

  return { renderInputFields, isSigning, signup, login, loginViaGoogle };
}

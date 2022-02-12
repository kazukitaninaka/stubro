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
import { UserApi } from '../api';

export default function useEntry() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
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
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
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

  const renderEntry = (type: 'signup' | 'login') => {
    const isForSignup = type === 'signup';
    return (
      <form
        className='mt-8 space-y-6'
        action='#'
        method='POST'
        onSubmit={isForSignup ? signup : login}
      >
        <input type='hidden' name='remember' defaultValue='true' />
        <div className='rounded-md shadow-sm -space-y-px flex flex-col'>
          <input
            name='email'
            type='email'
            autoComplete='email'
            required
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
            placeholder='メールアドレス'
            onChange={(e) => setEmail(e.target.value)}
          />
          {isForSignup && (
            <input
              name='username'
              autoComplete='username'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
              placeholder='ユーザー名'
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            name='password'
            type='password'
            autoComplete='current-password'
            required
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
            placeholder='パスワード'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
            disabled={isSigning}
          >
            {isSigning ? 'Loading...' : isForSignup ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </form>
    );
  };

  return { renderEntry, loginViaGoogle };
}

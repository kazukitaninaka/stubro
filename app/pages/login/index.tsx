import React, { useState } from 'react';
import '../../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import useUserSlice from '../../slices/user/useUserSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import ContainerSm from '../../components/ContainerSm';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUserSlice();
  const router = useRouter();

  function login(e: React.FormEvent<HTMLFormElement>) {
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
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
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

  return (
    <ContainerSm>
      <h2 className='text-center text-2xl text-zinc-500 font-bold'>ログイン</h2>

      <form className='mt-8 space-y-6' action='#' method='POST' onSubmit={login}>
        <input type='hidden' name='remember' defaultValue='true' />
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <input
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
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
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
          >
            Log in
          </button>
        </div>
      </form>
      <div className='flex items-center my-5 before:content-[""] before:h-[1px] before:grow before:bg-gray-300 before:mr-5 after:content-[""] after:h-[1px] after:grow after:bg-gray-300 after:ml-5'>
        または
      </div>
      <form className='mt-8 space-y-6' action='#' method='POST' onSubmit={loginViaGoogle}>
        <button
          type='submit'
          className='relative flex w-full shadow-sm items-center font-medium rounded-md bg-white py-2 border border-gray-300 hover:border-[#4285F4]'
        >
          <img src='g-logo.png' className='absolute h-7 w-7 left-2' alt='Google Icon' />
          <span className='mx-auto text-center'>Sign in with Google</span>
        </button>
      </form>

      <div className='mt-2'>
        アカウントをお持ちでない場合
        <span className='text-sky-500 ml-2'>
          <Link href='/signup'>新規登録</Link>
        </span>
      </div>
    </ContainerSm>
  );
}

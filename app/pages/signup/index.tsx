import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import useUserSlice from '../../slices/user/useUserSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUserSlice();
  const router = useRouter();

  function createUser(e: React.FormEvent<HTMLFormElement>) {
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
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div className='max-w-screen-sm mx-auto'>
      <h2 className='text-center text-2xl text-zinc-500 font-bold mt-10'>新規登録</h2>
      <form className='mt-8 space-y-6' action='#' method='POST' onSubmit={createUser}>
        <input type='hidden' name='remember' defaultValue='true' />
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

        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
          >
            Sign up
          </button>
        </div>
        <div>
          すでにアカウントをお持ちの場合
          <span className='text-sky-500 ml-2'>
            <Link href='/login'>ログイン</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

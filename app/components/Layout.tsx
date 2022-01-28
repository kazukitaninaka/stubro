import React, { ReactNode } from 'react';
import useAuth from '../hooks/useAuth';
import { UserCircleIcon } from '@heroicons/react/solid';
import { LoginIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useUserSlice from '../slices/user/useUserSlice';

export default function Layout({ children }: { children: ReactNode }) {
  useAuth();
  const { isUserLoggedIn } = useUserSlice();
  const router = useRouter();
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-sky-500 p-5 text-white flex justify-between'>
        <Link href='/'>
          <h1 className='cursor-pointer'>STUBRO</h1>
        </Link>
        {isUserLoggedIn ? (
          <UserCircleIcon
            className='h-7 w-7 cursor-pointer'
            onClick={() => router.push('/my-page')}
          />
        ) : (
          <button
            className='bg-white text-sky-500 border border-transparent rounded-md px-2 py-1 hover:bg-slate-100 flex items-center gap-x-1'
            onClick={() => router.push('/login')}
          >
            <span>LOGIN</span>
            <LoginIcon className='h-5 w-5' />
          </button>
        )}
      </header>
      <main className='bg-gray-50 flex-1'>
        <div className='container mx-auto py-5 px-3'>{children}</div>
      </main>
      <footer className='bg-sky-500 p-5 text-white'>FOOTER</footer>
    </div>
  );
}

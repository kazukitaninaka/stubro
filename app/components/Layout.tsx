import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../hooks/useAuth';
import { RootState } from '../stores';
import { UserCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: ReactNode }) {
  useAuth();
  const id = useSelector((state: RootState) => state.user.id);
  const router = useRouter();
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-sky-500 p-5 text-white flex justify-between'>
        <Link href='/'>
          <h1 className='cursor-pointer'>STUBRO</h1>
        </Link>
        {id ? (
          <Link href='/my-page'>
            <UserCircleIcon className='h-7 w-7 cursor-pointer' />
          </Link>
        ) : (
          <button
            className='bg-white text-sky-500 border border-transparent rounded-md px-2 py-1 hover:bg-slate-100'
            onClick={() => router.push('/signin')}
          >
            LOGIN
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

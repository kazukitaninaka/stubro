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
    <div className='bg-gray-50'>
      <div className='flex flex-col min-h-screen max-w-6xl mx-auto'>
        <header className='p-5 flex justify-between'>
          <Link href='/'>
            <h1 className='cursor-pointer text-sky-500 text-xl font-semibold'>StuBro 🎓</h1>
          </Link>
          {isUserLoggedIn ? (
            <UserCircleIcon
              className='h-7 w-7 cursor-pointer'
              onClick={() => router.push('/my-page')}
            />
          ) : (
            <button
              className='bg-sky-500 text-white border border-transparent rounded-md px-2 py-1 hover:bg-sky-600 flex items-center gap-x-1'
              onClick={() => router.push('/login')}
            >
              <span>LOGIN</span>
              <LoginIcon className='h-5 w-5' />
            </button>
          )}
        </header>
        <main className='flex-1'>
          <div className='container mx-auto py-5 px-3'>{children}</div>
        </main>
        <footer className='p-5'>FOOTER</footer>
      </div>
    </div>
  );
}

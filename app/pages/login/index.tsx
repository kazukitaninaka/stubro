import React from 'react';
import '../../firebase';
import Link from 'next/link';

import ContainerSm from '../../components/ContainerSm';
import useEntry from '../../hooks/useEntry';

export default function SingIn() {
  const { renderEntry, loginViaGoogle } = useEntry();

  return (
    <ContainerSm>
      <h2 className='text-center text-2xl text-zinc-500 font-bold'>ログイン</h2>
      {renderEntry('login')}
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

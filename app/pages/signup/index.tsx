import Link from 'next/link';
import ContainerSm from '../../components/ContainerSm';
import useEntry from '../../hooks/useEntry';

export default function SignUp() {
  const { renderEntry } = useEntry();
  return (
    <ContainerSm>
      <h2 className='text-center text-2xl text-zinc-500 font-bold mt-10'>新規登録</h2>
      {/* <form className='mt-8 space-y-6' action='#' method='POST' onSubmit={signup}>
        <input type='hidden' name='remember' defaultValue='true' />
        {renderInputFields()}
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
            disabled={isSigning}
          >
            {isSigning ? 'Signing up...' : 'Sign up'}
          </button>
        </div>
      </form> */}
      {renderEntry("signup")}
      <div>
        すでにアカウントをお持ちの場合
        <span className='text-sky-500 ml-2'>
          <Link href='/login'>ログイン</Link>
        </span>
      </div>
    </ContainerSm>
  );
}

import Link from 'next/link';
import ContainerSm from '../../components/ContainerSm';
import useEntry from '../../hooks/useEntry';

export default function SignUp() {
  const { renderEntry } = useEntry();
  return (
    <ContainerSm>
      <h2 className='text-center text-2xl text-zinc-500 font-bold mt-10'>新規登録</h2>
      {renderEntry('signup')}
      <div className='mt-3'>
        すでにアカウントをお持ちの場合
        <span className='text-sky-500 ml-2'>
          <Link href='/login'>ログイン</Link>
        </span>
      </div>
    </ContainerSm>
  );
}

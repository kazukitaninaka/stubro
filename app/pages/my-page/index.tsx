import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import useUserSlice from '../../slices/user/useUserSlice';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ContainerSm from '../../components/ContainerSm';

export default function MyPage() {
  const { user, setUserInitial } = useUserSlice();
  const router = useRouter();

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInitial();
        toast.info('ログアウトしました', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
        router.push('/login');
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <ContainerSm>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>現在の申し込み状況</p>
      <table className='table-fixed mx-auto'>
        <tbody className='divide-y divide-gray-200'>
          <tr>
            <td className='w-1/3 font-bold'>メンター名</td>
            <td className='text-lg'>tom</td>
          </tr>
          <tr>
            <td className='font-bold'>希望日時</td>
            <td className='text-lg whitespace-pre-wrap'>5/9</td>
          </tr>
          <tr>
            <td className='font-bold'>コメント</td>
            <td className='text-lg'>いろいろ</td>
          </tr>
        </tbody>
      </table>
      <button className='border bg-sky-500 text-white p-2 mt-5' onClick={handleSignOut}>
        Sign Out
      </button>
    </ContainerSm>
  );
}

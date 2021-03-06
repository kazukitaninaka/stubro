import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import useConsultationDetailsSlice from '../../slices/consultationDetails/useConsultationDetailsSlice';
import ContainerSm from '../../components/ContainerSm';
import useConsultationFetchResult from '../../hooks/useConsultationFetchResult';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';

export default function PaymentCompleted() {
  const { consultationDetails, setConsultationDetailsInitial } = useConsultationDetailsSlice();
  const { isRegisterSuccess, isRegistering } = useConsultationFetchResult();
  const router = useRouter()

  useEffect(() => {
    return () => {
      // ページを離れる時にpersistantのconsultationDetailsをリセット
      setConsultationDetailsInitial();
    };
  }, [setConsultationDetailsInitial]);
  return (
    <ContainerSm>
      {isRegistering ? <Loading /> :
        isRegisterSuccess ? (
          <>
            <CheckCircleIcon className='h-48 w-48 text-green-500 mx-auto' />
            <p className='text-center text-4xl mb-5'>Payment completed!</p>
            <p className='text-center text-xl mb-3'>お申し込み内容</p>
            <table className='table-fixed mx-auto'>
              <tbody className='divide-y divide-gray-200'>
                <tr>
                  <td className='w-1/3 font-bold'>メンター名</td>
                  <td className='text-lg'>{consultationDetails.username}</td>
                </tr>
                <tr>
                  <td className='font-bold'>希望日時</td>
                  <td className='text-lg whitespace-pre-wrap'>{consultationDetails.desirableDate}</td>
                </tr>
                <tr>
                  <td className='font-bold'>メッセージ</td>
                  <td className='text-lg'>{consultationDetails.message}</td>
                </tr>
              </tbody>
            </table>
            <p className='mt-5 text-lg'>
              メンターと日程を調整の上、決まり次第登録されたメールアドレスに日程とzoomリンクをお送りします。
            </p>
          </>
        ) : (
          <>
            <p>エラーが発生しました。TOPページに戻ってからもう一度お試しください。</p>
            <button className='mt-3 border bg-sky-500 text-white p-2 rounded-sm' onClick={() => router.push("/")}>TOP</button>
          </>
        )}
    </ContainerSm>
  );
}

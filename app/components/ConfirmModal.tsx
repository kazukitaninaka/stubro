import React, { useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { Transition, Dialog } from '@headlessui/react';
import useUserSlice from '../slices/user/useUserSlice';
import { useRouter } from 'next/router';
import useConsultationDetailsSlice from '../slices/consultationDetails/useConsultationDetailsSlice';

export default function ConfirmModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { isUserLoggedIn } = useUserSlice();
  const router = useRouter();
  const [desirableDate, setDesirableDate] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const { consultationDetails, setUserInput, setConsultationDetailsInitial } =
    useConsultationDetailsSlice();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // put user input in persisted state because it will redirect user to payment page
    setUserInput({ desirableDate, comments });

    axios
      .post('http://localhost:3000/api/paypay', {
        method: 'POST',
        body: {
          amount: consultationDetails.price,
          mentor: consultationDetails.username,
          userAgent: navigator.userAgent, // PayPayアプリで決済終了後自動でリダイレクトさせるためUserAgentをPayPay側に送る
        },
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        const { data } = res.data;
        router.push(data.url);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Transition appear show={isModalOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={() => {
          setIsModalOpen(false);
          setTimeout(() => {
            // モーダルが閉じ切るまでは状態維持
            setConsultationDetailsInitial();
            setDesirableDate('');
            setComments('');
          }, 500);
        }}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 opacity-50' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='inline-block h-screen align-middle' aria-hidden='true'>
            &#8203;
          </span>
          {/* change modal content conditionally depending on if id exists, meaning user is logged in */}
          {isUserLoggedIn ? (
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <form
                onSubmit={handleSubmit}
                className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md'
              >
                <Dialog.Title as='h3' className='text-lg text-center font-medium'>
                  {consultationDetails.username}さんと面談しましょう！
                </Dialog.Title>
                <p className='mt-5'>直近2週間の中で相談希望日時を複数入力してください</p>
                <small>なるべく多くの日程をご提示下さい</small>
                <textarea
                  className='w-full mt-2 py-2 px-3 border h-[150px] rounded-sm'
                  required
                  value={desirableDate}
                  onChange={(e) => setDesirableDate(e.target.value)}
                ></textarea>
                <p className='pt-2'>その他メッセージがございましたら入力してください</p>
                <small>（特に聞いてみたいことなど）</small>
                <textarea
                  className='w-full mt-2 py-2 px-3 border h-[100px] rounded-sm'
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
                <div className='mt-4 text-center'>
                  <button
                    type='submit'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-sky-500 border border-transparent rounded-md hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                  >
                    決済画面へ
                  </button>
                </div>
                <small>※PayPayの決済画面へ移動します。クリックしてもまだ決済は完了しません。</small>
              </form>
            </Transition.Child>
          ) : (
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md'>
                <Dialog.Title as='h3' className='text-lg text-center font-medium'>
                  相談するためにログインしてください
                </Dialog.Title>
                <div className='mt-4 text-center'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-sky-500 border border-transparent rounded-md hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={() => {
                      setIsModalOpen(false);
                      router.push('/login');
                    }}
                  >
                    ログイン画面へ
                  </button>
                </div>
              </div>
            </Transition.Child>
          )}
        </div>
      </Dialog>
    </Transition>
  );
}

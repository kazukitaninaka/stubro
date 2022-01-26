import React, { Dispatch, SetStateAction } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import useUserSlice from '../slices/user/useUserSlice';
import { useRouter } from 'next/router';

export default function ConfirmModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { user } = useUserSlice();
  const router = useRouter();
  return (
    <Transition appear show={isModalOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={() => setIsModalOpen(false)}
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
          {user.id ? (
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
                  詳細
                </Dialog.Title>
                <p>直近2週間の中で相談希望日時を複数入力してください</p>
                <small>なるべく多くの日程をご提示下さい</small>
                <textarea
                  className='w-full mt-2 py-2 px-3 border h-[150px] rounded-sm'
                  required
                ></textarea>
                <p className='pt-2'>その他メッセージがございましたら入力してください</p>
                <small>（特に聞いてみたいことなど）</small>
                <textarea className='w-full mt-2 py-2 px-3 border h-[100px] rounded-sm'></textarea>
                <div className='mt-4 text-center'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-sky-500 border border-transparent rounded-md hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={() => setIsModalOpen(false)}
                  >
                    決済画面へ
                  </button>
                </div>
              </div>
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

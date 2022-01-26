import React, { Dispatch, SetStateAction } from 'react';
import { TagIcon } from '@heroicons/react/solid';
import { Mentor } from '../api';

export default function Card({
  mentor,
  setIsModalOpen,
}: {
  mentor: Mentor;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className='h-full w-full md:w-[48%] lg:w-[30%] border border-transparent rounded-md divide-y divide-dashed shadow-md bg-white'>
      <div className='p-3'>
        <table className='table-fixed'>
          <tbody>
            <tr>
              <td className='w-1/3 font-bold'>留学先国</td>
              <td className='text-lg'>{mentor.destination}</td>
            </tr>
            <tr>
              <td className='font-bold'>教育機関名</td>
              <td className='text-lg'>{mentor.eduOrg}</td>
            </tr>
            <tr>
              <td className='font-bold'>留学形態</td>
              <td className='flex flex-wrap gap-x-2 gap-y-0.5'>
                {mentor.type.map((tag) => (
                  <span
                    key={tag}
                    className='flex items-center border-2 border-gray-500 rounded-full px-1.5'
                  >
                    <TagIcon className='h-4 w-4' />
                    <span>{tag}</span>
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td className='font-bold'>留学期間</td>
              <td className='text-lg'>{mentor.term}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='p-3 flex items-center justify-between'>
        <div className='flex items-center gap-x-5'>
          <img
            src={mentor.image}
            alt='profile picture'
            className='w-12 h-12 inline object-cover rounded-full'
          />
          <div className='text-xl'>{mentor.username}</div>
        </div>
        <div className='text-sm'>
          相談料: <span className='text-lg'>{mentor.price}</span>円 / 回
        </div>
      </div>
      <div className='p-3 flex justify-center'>
        <button
          className='bg-sky-500 text-white py-2 px-3 rounded-full hover:bg-sky-600'
          onClick={() => setIsModalOpen(true)}
        >
          相談してみる
        </button>
      </div>
    </div>
  );
}

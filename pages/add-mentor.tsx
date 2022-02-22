import React, { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

type Terms = {
  aWeek: string;
  aMonth: string;
  threeMonths: string;
  sixMonths: string;
  aYear: string;
  twoYears: string;
  threeYears: string;
  fourYears: string;
};

const terms = {
  aWeek: '〜1週間',
  aMonth: '1週間〜1ヶ月',
  threeMonths: '1ヶ月〜3ヶ月',
  sixMonths: '3ヶ月〜半年',
  aYear: '半年〜1年',
  twoYears: '2年',
  threeYears: '3年',
  fourYears: '4年',
};

export default function addMentor() {
  const [selectedTerm, setSelectedTerm] = useState(terms.aWeek);
  return (
    <>
      <p>Add a mentor</p>
      <input
        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
        placeholder='username'
      />
      <input
        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
        placeholder='email'
      />
      <input
        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
        placeholder='image'
        type='file'
      />
      <input
        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm'
        placeholder='destination'
      />
      <div className='w-72'>
        <Listbox value={selectedTerm} onChange={setSelectedTerm}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
              <span className='block truncate'>{selectedTerm}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {Object.keys(terms).map((term, termIdx) => (
                  <Listbox.Option
                    key={termIdx}
                    className={({ active }) =>
                      `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={terms[term as keyof Terms]}
                  >
                    {({ selectedTerm, active }: { selectedTerm: string; active: boolean }) => (
                      <>
                        <span
                          className={`${
                            selectedTerm ? 'font-medium' : 'font-normal'
                          } block truncate`}
                        >
                          {terms[term as keyof Terms]}
                        </span>
                        {selectedTerm ? (
                          <span
                            className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
}

import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import DateButton from './DateButton';
import CalendarCarousel from './CalendarCarousel';

export default function Content() {
  const { from, to, trip, adult, child, infant } = useContext(Context);


  return (
    <div className='lg:container'>
      <div>
       
        <div className='-left-32 -top-32  bg-blue-50 rounded-lg '>
          <div className='leading-28 ml-3 mt-2 flex flex-row'>
            <div className='text-black font-helvetica-neue text-32 flex flex-shrink-0 flex-grow-0 font-normal mt-5'>
              New Reservation
            </div>
            {/* <div className='w-7 h-7 mt-5 ml-64 flex flex-row '>
              <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#0773bb' }} />
              <div>
                <div className='rounded-full w-32 mt-1 h-1 bg-white'></div>
              </div>
              <FontAwesomeIcon icon={faCircleDot} style={{ color: '#0773bb' }} />
              <div>
                <div className='rounded-full w-32 mt-1 h-1 bg-white'></div>
              </div>
              <FontAwesomeIcon icon={faCircleDot} style={{ color: '#ffffff' }} />
              <div>
                <div className='rounded-full w-32 mt-1 h-1 bg-white'></div>
              </div>
              <FontAwesomeIcon icon={faCircleDot} style={{ color: '#ffffff' }} />
            </div> */}
            <div className='flex flex-row space-x-16 mt-9 '>
              <div>Search</div>
              <div>Availability</div>
              <div>Passengers</div>
              <div>Payment</div>
            </div>
          </div>
          <div className='p-4'>
            <div className=' bg-white rounded-tl-lg flex-shrink-0 '>
              <div className='bg-transparent bg-gradient-to-r bg-clip-content p-1 from-blue-700 to-white rounded-xl  mt-2 px-4 flex flex-row'>
                <div className='flex flex-col flex-shrink-0 '>
                  <div className='text-white py-1 pl-2 text-base '>
                    {from} - {to}
                    <div className='text-white text-xs '>
                        {adult} Adult , {child} Child , {infant} Infant | {trip}
                    </div>
                  </div>
                </div>
                <div className='flex ml-72'>
                  <div className='flex flex-row ml-36'>
                    <div className='px-4 py-2  '>
                      <label className='relative block'>
                        <span className='absolute inset-y-0 flex items-center '>
                          <i className='fas fa-search ml-4 text-blue-500 h-5 w-5 fill-slate-300 bg-blue-50' viewBox='0 0 20 20'>
                          </i>
                        </span>
                        <input
                          className='placeholder:Helvetica Neue placeholder:text-slate-400 block bg-blue-50 w-32  border border-slate-300 rounded-lg py-2 pl-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                          placeholder='Enter'
                        />
                      </label>
                    </div>
                    <button className='rounded-full w-[107px] h-[34px] flex-shrink-0 p-1 mt-2 bg-white text-blue-600'>
                      Search Sr
                    </button>
                    <div className='p-2 flex flex-row'>
                      <DateButton />
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <div className=' rounded-xl flex-shrink-0 border-2 border-inherit h-20 mt-2 px-4 flex justify-bewtween flex-row'>
                <div className=' px-12 lg:container '>
        <CalendarCarousel/>
        </div>
                  
                  {/* <div className='pt-6 '>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  </div> */}
                  {/* <button className="text-gray-700 hover:text-black">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className='pl-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="2" height="76" viewBox="0 0 2 90" fill="none">
                        <path d="M1 1V89.3525" stroke="#F2F5F6" stroke-linecap="square"/>
                      </svg>
                    </div> */}

                  {/* <FontAwesomeIcon icon={faChevronRight} />
                    <button className="text-gray-700 hover:text-black">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}


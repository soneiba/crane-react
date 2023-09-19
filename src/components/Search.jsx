import React from 'react'
import {Link} from 'react-router-dom'
import Trip from'./Trip.jsx'
import FromTo from'./FromTo.jsx'
import Passengers from'./Passengers.jsx'


// const handleSelect = () => { 
    
// };

export default function Search() {
    return (
      <div>
  
        <div className='-left-32 -top-32 w-85/100 h-screen bg-blue-50 rounded-lg flex flex-row'>
  
          <div className="text-black font-helvetica-neue text-22 font-normal leading-28 ml-3 mt-2  ">
            New Reservation 
  
            <div>
              <div className='w-screen h-screen bg-white rounded-tl-lg  '>
                
                <hr className='mt-4'/>

                <Trip/>

                <hr className='mt-12'/>

                <FromTo/>
  
                <hr className='mt-12'/>
  
                <Passengers/>

                <Link to="/f" className="">
                <div className='flex flex-col items-center mt-16 ml-10 '>
                    <button className='rounded-[19px] bg-[#44CC9E] text-white p-1 w-[173px] h-[38px]' 
                    // onClick={() => handleSelect()}
                    >
                        Search Flight
                    </button>
                </div>
                </Link>

                
  
               
              </div>
              
            </div>
  
        </div>
  
        </div>
    
    
        </div>
    )
  }
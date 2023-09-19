import React, { useContext } from 'react';
import { Context } from './Context';

const Passengers = () => {

  const { adult, child, infant, setAdult, setChild, setInfant } = useContext(Context);

    const aplaces = [
    { code: '1', name: '1' }, 
    { code: '2', name: '2' }, 
    { code: '3', name: '3' },  
    { code: '4', name: '4' },  
    ];

    const cplaces = [
    { code: '1', name: '1' }, 
    { code: '2', name: '2' }, 
    { code: '3', name: '3' },  
    { code: '4', name: '4' },  
    ];

    const iplaces = [
    { code: '0', name: '0' }, 
    { code: '1', name: '1' }, 
    { code: '2', name: '2' },  
    { code: '3', name: '3' },  
    ];

    const handleSelectaPlace = (aplaceCode) => {
        setAdult(aplaceCode);
      };
    
      const handleSelectcPlace = (cplaceCode) => {
        setChild(cplaceCode);
      };

      const handleSelectiPlace = (iplaceCode) => {
        setInfant(iplaceCode);
      };


return (

    
    <div className="relative mt-2 flex flex-row space-x-8">

        <div className=' mt-8 ml-4'>
            <div className='flex-col text-sm'>
                Adult (12+)
                <select onChange={(e) => handleSelectaPlace(e.target.value)} value={adult}
                className="mt-2 ml-4 py-2 w-32 bg-white border border-gray-200 rounded shadow-md">
                {aplaces.map((lang) => (
              <option
                value={lang.code}
                key={lang.code}
                className={`block px-1 tex-sm text-black hover:bg-gray-100 ${
                  adult === lang.code ? 'bg-gray-200' : ''
                }`}
              >
                {lang.name}
              </option>
            ))}
          </select>
            </div>
        </div>

        <div className=' mt-8 ml-4'>
            <div className='flex-col text-sm'>
                Child (2-12)
                <select
            onChange={(e) => handleSelectcPlace(e.target.value)}
            value={child}
            className="mt-2 ml-4 py-2 w-32 bg-white border border-gray-200 rounded shadow-md"
          >
            {cplaces.map((lang) => (
              <option
                value={lang.code}
                key={lang.code}
                className={`block px-1 tex-sm text-black hover:bg-gray-100 ${
                  child === lang.code ? 'bg-gray-200' : ''
                }`}
              >
                {lang.name}
              </option>
            ))}
          </select>
            </div>
        </div>

        <div className=' mt-8 ml-4'>
            <div className='flex-col text-sm'>
                Infant (0-2)
                <select
            onChange={(e) => handleSelectiPlace(e.target.value)}
            value={infant}
            className="mt-2 ml-4 py-2 w-32 bg-white border border-gray-200 rounded shadow-md"
          >
            {iplaces.map((lang) => (
              <option
                value={lang.code}
                key={lang.code}
                className={`block px-1 tex-sm text-black hover:bg-gray-100 ${
                  infant === lang.code ? 'bg-gray-200' : ''
                }`}
              >
                {lang.name}
              </option>
            ))}
          </select>
            </div>
        </div>   

        

        <div className=''>
        <div className="flex items-center ">
           <input type="checkbox" className="h-4 w-4 mt-16 bg-blue-300 rounded-full text-indigo-600 focus:ring-indigo-500 "/>
           <label className="ml-2 text-sm mt-16 text-black ">Strecher Passenger</label>
        </div>
        </div>

        
    </div>
);
}; 

export default Passengers;
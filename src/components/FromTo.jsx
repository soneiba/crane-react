import React, { useContext } from 'react';
import { Context } from './Context';

const FromTo = () => {
  const { from, to, setFrom, setTo } = useContext(Context);

  const fplaces = [
    { code: 'AYT', name: 'Antalya (AYT)' },
    { code: 'IST', name: 'İstanbul (IST)' }, 
    { code: 'ANK', name: 'Ankara (ANK)' },  
    { code: 'IZ', name: 'İzmir (IZ)' },  
  ];

  const tplaces = [
    { code: 'AKX', name: 'Aktobe (AKX)' },
    { code: 'IST', name: 'İstanbul (IST)' }, 
    { code: 'ANK', name: 'Ankara (ANK)' },  
    { code: 'IZ', name: 'İzmir (IZ)' },  
  ];

  const handleSelectfPlace = (fplaceCode) => {
    setFrom(fplaceCode);
  };

  const handleSelecttPlace = (tplaceCode) => {
    setTo(tplaceCode);
  };

  return (
    <div className="relative mt-2 flex flex-row space-x-16">
      <div className=" mt-8 ml-8">
        <div className="flex-col">
          From:
          <select
            onChange={(e) => handleSelectfPlace(e.target.value)}
            value={from}
            className="mt-2 ml-4 py-2 w-32 bg-white border border-gray-200 rounded shadow-md"
          >
            {fplaces.map((lang) => (
              <option
                value={lang.code}
                key={lang.code}
                className={`block px-1 tex-sm text-black hover:bg-gray-100 ${
                  from === lang.code ? 'bg-gray-200' : ''
                }`}
              >
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 ml-8">
        <div className="flex-col">
          To:
          <select
            onChange={(e) => handleSelecttPlace(e.target.value)}
            value={to}
            className="mt-2 ml-4 py-2 w-32 bg-white border border-gray-200 rounded shadow-md"
          >
            {tplaces.map((lang) => (
              <option
                value={lang.code}
                key={lang.code}
                className={`block px-1 tex-sm text-black hover:bg-gray-100 ${
                  to === lang.code ? 'bg-gray-200' : ''
                }`}
              >
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FromTo;

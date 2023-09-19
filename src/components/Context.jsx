// import React from "react";
// export const Context = React.createContext();

import React, { createContext, useContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [from, setFrom] = useState('AYT');
  const [to, setTo] = useState('AKX');
  const [trip, setTrip] = useState('');
  const [adult, setAdult] = useState('1');
  const [child, setChild] = useState('0');
  const [infant, setInfant] = useState('0');



  return (
    <Context.Provider value={{ from, to, trip, adult, child, infant, setFrom, setTo, setTrip, setAdult, setChild, setInfant}}>
      {children}
    </Context.Provider>
  );
};







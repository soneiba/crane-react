import React, { useState, useContext } from 'react';
import { Context } from './Context';

const Trip = () => {
  const { trip, setTrip } = useContext(Context);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId, buttonLabel) => {
    console.log(buttonId);
    setSelectedButton(buttonId);
    setTrip(buttonLabel)
  };

  const buttons = [
    { id: 1, label: 'One Way'},
    { id: 2, label: 'Roundtrip' },
    { id: 3, label: 'Multi-Directional' },
    { id: 4, label: 'Inbound Open' },
    { id: 5, label: 'Outbound Open' },
  ];

  return (
    <div className="flex space-x-16">
        {buttons.map((button) => (
        <label key={button.id} className={`border mt-3  p-2 rounded-full 
            ${selectedButton === button.id ? 'border-blue-500' : 'border-gray-300'}`} 
            >
            <input type="radio" name="buttonGroup" className="sr-only" checked={selectedButton === button.id} 
            onChange={() => handleButtonClick(button.id, button.label)}/>
            {button.label}
           
        </label>
        
    ))}
    </div>
  );
};

export default Trip;
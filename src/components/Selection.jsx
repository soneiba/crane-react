import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PassengerSelection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const options = [
    { label: 'CBG', subOptions: ['Select','Option 1', 'Option 2', 'Option 3'] },
    { label: 'Extra Seat', subOptions: ['Select','Option 1', 'Option 2', 'Option 3'] },
    { label: 'İns', subOptions: ['Select', 'Option 1', 'Option 2', 'Option 3'] },
    { label: 'PD-ADLT-SN', subOptions: ['Select','Option 1', 'Option 2', 'Option 3'] },
    { label: 'Student', subOptions: ['Select','Option 1', 'Option 2', 'Option 3'] },
    { label: 'PD-SLDR-MI', subOptions: ['Select','Option 1', 'Option 2', 'Option 3'] },
  ];

  const handleMainOptionClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubOptionClick = (mainLabel, subLabel) => {
    setSelectedOptions((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (!updatedSelected[mainLabel]) {
        updatedSelected[mainLabel] = [];
      }

      if (updatedSelected[mainLabel].includes(subLabel)) {
        updatedSelected[mainLabel] = updatedSelected[mainLabel].filter((label) => label !== subLabel);
      } else {
        updatedSelected[mainLabel] = [...updatedSelected[mainLabel], subLabel];
      }

      return updatedSelected;
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={handleMainOptionClick}
      >
       <div className='flex flex-row space-x-48'>
        <div> Other Passengers Selection </div>
        <div>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </div>
        </div>
      </div>
      {isOpen && (
        <div className="grid grid-cols-3 gap-4">
          {options.map((option) => (
            <div key={option.label} className="border p-2 rounded-md">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleSubOptionClick(option.label, option.label)}
              >
                {option.label}
                <FontAwesomeIcon icon={selectedOptions[option.label]?.length ? faChevronUp : faChevronDown} />
              </div>
              {selectedOptions[option.label]?.length && (
                <ul className="mt-2 space-y-2">
                  {option.subOptions.map((subOption, index) => (
                    <li key={index}>
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => handleSubOptionClick(option.label, subOption)}
                      >
                        <button>
                        {subOption}
                        </button>
                        {/* <FontAwesomeIcon icon={selectedOptions[option.label]?.includes(subOption) ? faChevronUp : faChevronDown} /> */}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PassengerSelection;

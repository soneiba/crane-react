import React, { useState } from 'react';

const DateButton = () => { 
    const [currentDate, setCurrentDate] = useState(new Date());
 
    const handleDateChange = (days) => {  
        const newDate = new Date(currentDate);  
        newDate.setDate(newDate.getDate() + days);
  
        const today = new Date();  
        if (newDate <= today) {   
            setCurrentDate(newDate);  
        } 
    };
 
    const formatDate = (date) => {  
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };  
        return date.toLocaleDateString('tr-TR', options); 
    };
 
    return (  
        <div className="flex items-center space-x-2 bg-white h-8 rounded-full p-2">   
            <button className="text-gray-700 hover:text-black" onClick={() => handleDateChange(-1)} disabled={currentDate <= new Date()}>    
                {/* <FontAwesomeIcon icon={faChevronLeft} />    */}
            </button>   
            <p className="text-lg">{formatDate(currentDate)}</p>   
            <button className="text-gray-700 hover:text-black" onClick={() => handleDateChange(1)}>    
                {/* <FontAwesomeIcon icon={faChevronRight} />    */}
            </button>  
        </div> 
    );
};
export default DateButton;
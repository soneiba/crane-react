import React, { useState } from 'react';

const Language = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const languages = [
    { code: 'en', name: 'En' }, 
    { code: 'tr', name: 'Tr' },  
    ];

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen); 
    };
 
    const handleSelectLanguage = (languageCode) => { 
        setSelectedLanguage(languageCode); 
        setDropdownOpen(false); 
    };

return (
    <div className="relative">

    <button onClick={handleToggleDropdown} 
    className="bg-white text-black px-4 py-2 rounded  text-xs "> {languages.find((lang) => lang.code === selectedLanguage)?.name}
    <i className="fa-solid fa-caret-down ml-1 text-blue-400"></i>
    </button>
    
    

    {isDropdownOpen && (
    <div className="mt-2 py-2 w-16 bg-white border border-gray-200 rounded shadow-md"> 
    {languages.map((lang) => (
    <button key={lang.code} onClick={() => handleSelectLanguage(lang.code)} 
    className={`block px-4 py-2 text-black hover:bg-gray-100 ${
        selectedLanguage === lang.code ? 'bg-gray-200' : '' 
        }`} 
        >
        {lang.name} 
        </button> 
        ))}
        </div> 
        )}
    </div>
);
}; 
export default Language;
import React, { useState } from 'react';

    const Sidebar = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => { 
        setSidebarOpen(!isSidebarOpen);
    };
 
    return ( 

        <div className="flex mt-4 "> 

            <button onClick={handleToggleSidebar}
            className="fixed top-4 left-2 p-2 bg-gray-300 text-white rounded-md" >
            {/* <i className="fa-solid fa-bars"></i> */}
            </button>

            <div className={`w-16 mt-32 bg-white text-white pr-4 ${isSidebarOpen ? 'transform translate-x-0' : '-translate-x-full'} 
            transition-transform ease-in-out duration-300`} >
           
                <div  className="flex flex-col ml-6  text-blue-500 w-5 h-auto">
                <i className='fas fa-plane ml-4 mt-4 text-gray-300 hover:text-blue-500 hover:bg-blue-200'> </i>
                <i className='fas fa-file-lines ml-4 mt-4 text-gray-300 hover:text-blue-500 hover:bg-blue-200'> </i>
                <i className='fas fa-filter ml-4 mt-4 text-gray-300 hover:text-blue-500 hover:bg-blue-200'> </i>
                <i className='fas fa-ticket ml-4 mt-4 text-gray-300 hover:text-blue-500 hover:bg-blue-200'> </i>
                <i className='fas fa-star ml-4 mt-4 text-gray-300 hover:text-blue-500 hover:bg-blue-200'> </i>
                </div> 
            
            </div>
            

            <div className={`flex-1 ${isSidebarOpen ? 'ml-16' : 'ml-0'} transition-all ease-in-out duration-300`}> 
            {children}
            </div>
            
        </div>
    );
    };
export default Sidebar;
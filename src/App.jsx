import {Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
// import { Context } from "./components/Context.jsx";
import { ContextProvider } from './components/Context.jsx';
import React, { useState } from 'react';


function App() {
  // const [context, setContext] = useState("default context value");
  
  return (
    // <Context.Provider value={[context, setContext]}>
<ContextProvider>
      <div className=''>
        
        <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path='/f' element={<Home/>}/>
        </Routes>

      </div>
      </ContextProvider>
    // </Context.Provider>
  )
}

export default App




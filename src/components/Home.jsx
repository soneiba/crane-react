import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import Content from './Content.jsx'



function App() {

  return (
   <div className=''>
    
    <Header/>
    <SideBar>
      <Content/>
    </SideBar>
   </div>
  )
}

export default App

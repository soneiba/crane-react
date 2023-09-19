import ImgDemoSvg from '../assets/ImgDemo.svg'
import Language from'./Language.jsx'




export default function Header() {
  return (
    <header className='bg-white mt-2 lg:mt-1 lg:container '>
      <div className='lg:container flex items-center justify-between space-x-8 lg:space-x-16 '>
       <div className="flex flex-row ">

            <div className="bg-white w-[143.03px] shrink-0 h-auto">
                <img src={ImgDemoSvg} alt="logo"  />
            </div>

            <div className="text-blue-500 font-italic flex flex-shrink-0 flex-grow-0 text-[8px] lg:text-xs mt-1 lg:mt-2 font-normal leading-7 ml-4 w-30 ">
                <p> Server Info Terminal.220 master </p>
            </div>

        </div>

        <div className='flex flex-row items-center '>

            <div className='px-4  py-1'>
              <label className="relative block">
                <span className="absolute inset-y-0 flex items-center ">
                  <i className='fas fa-search ml-4 text-blue-500 h-5 w-5 fill-slate-300 bg-blue-50' viewBox="0 0 20 20"> </i>
                </span>
                <input className="placeholder:Helvetica Neue placeholder:text-slate-400 block bg-blue-50 w-full  border border-slate-300 rounded-lg py-2 pl-12 pr-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="PNR Or Ticket Number" />
              </label>
            </div>
        
            <button className='rounded-full bg-blue-600 text-white p-1 sm:w-16'>Search</button>
            <button className='rounded-full text-black p-2 sm:w-32 h-auto text-xs'>Shortcut Menu <i className="fa-solid fa-caret-down" ></i></button>
           <div className='flex flex-col text-xs '>
            <p className='text-black'>TUNCASU </p> 
            <p className=' text-gray-400'>HITITADMIN</p> 
            </div>
            <button className='rounded-full w-10 h-10 ml-2 p-2 bg-blue-200 text-white'>T</button>
            <div className='mr-4'>
            <Language/>
            </div>
        </div>
      </div>
    </header>
  )
}

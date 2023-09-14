import logo from '../assets/Logo.svg';
import Search from '../assets/Search.svg';
import Menu from '../assets/Menu.svg';

// eslint-disable-next-line react/prop-types
const Navbar = ({ setToggleOn, toggleOn, searchInput, setSearchInput }) => {

  return (
    <header className="w-[90%] md:w-[86%] mx-auto py-4 flex justify-between items-center">
      <img src={logo} alt="" className='w-[120px] md:w-auto' />

      <div className='relative w-fit'>
        <input type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value.toLowerCase())} className='w-[9.5rem] focus:w-60 sm:focus:w-full sm:w-full pl-4 pr-8 sm:px-2.5 py-1 transition-all duration-700 ease-in-out bg-transparent text-white border-white border rounded-lg placeholder:text-white outline-none' placeholder='What do you want to watch?' name="" id="" />
        <img src={Search} alt="" className='absolute right-3 top-2' />
      </div>
      
      {/* <div className='flex items-center font-bold gap-6'> */}
        <button onClick={() => setToggleOn(!toggleOn)}>
          <img src={Menu} alt="" className='duration-700 transition-all sm:hidden' />
        </button>
      {/* </div> */}
    </header>
  )
}

export default Navbar
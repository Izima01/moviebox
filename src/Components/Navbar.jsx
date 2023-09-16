import logo from '../assets/Logo.svg';
import Search from '../assets/Search.svg';
import Menu from '../assets/Menu.svg';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({ setToggleOn, toggleOn, handleSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(value);
  }

  return (
    <header className="w-[95%] md:w-[86%] mx-auto py-4 flex justify-between items-center">
      <img src={logo} alt="" className='w-[110px] md:w-auto' />

      <form className='relative w-fit' onSubmit={(e) => handleSubmit(e)}>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value.toLowerCase())} className='w-[9.5rem] focus:w-[16rem] sm:focus:w-[360px] sm:w-[360px] md:focus:w-[420px] md:w-[420px] pl-4 pr-8 px-2 py-1 transition-all duration-700 ease-in-out bg-transparent text-white border-white border rounded-lg placeholder:text-white outline-none' placeholder='What do you want to watch?' name="" id="" />
        <button type='submit' onClick={(e) => handleSubmit(e)}>
          <img src={Search} alt="" className='absolute right-3 top-2.5' />
        </button>
      </form>
      
      {/* <div className='flex items-center font-bold gap-6'> */}
        <button onClick={() => setToggleOn(!toggleOn)}>
          <img src={Menu} alt="" className='duration-700 transition-all' />
        </button>
      {/* </div> */}
    </header>
  )
}

export default Navbar
/* eslint-disable react/prop-types */
import Navbar from './Navbar';
import imdb from '../assets/imdb.svg';
import tomato from '../assets/tomato.svg';
import Play from '../assets/Play.svg';
import Aside from './Aside';
import { useState } from 'react';

const Hero = ({ searchInput, setSearchInput, handleSearch }) => {
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <main className='h-screen hero'>
      <Navbar setToggleOn={setToggleOn} toggleOn={toggleOn} searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
      <section className='mx-[5%] md:mx-[7%] mt-14'>
        <h2 className="text-5xl font-bold leading-snug">John Wick 3 : <br /> Parebellum</h2>

        <ul className="list-none flex items-center gap-8 my-4">
          <li className='flex gap-2.5 items-center text-sm'>
            <img src={imdb} alt="" />
            <p>86.0/100</p>
          </li>

          <li className='flex gap-2.5 items-center text-sm'>
            <img src={tomato} alt="" />
            <p>97%</p>
          </li>
        </ul>

        <p className="mb-4 w-10/12 md:w-7/12 lg:w-1/2 font-medium">
          John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </p>

        <button className="bg-[#BE123C] flex gap-2 px-4 py-1.5 rounded-lg">
          <img src={Play} alt="" />
          <p>WATCH TRAILER</p>
        </button>
      </section>

      <div className={`fixed left-0 top-0 bottom-0 transition duration-500 ease-in-out ${toggleOn ? 'translate-x-0' : '-translate-x-60'}`}>
        <Aside />
      </div>

    </main>
  )
}

export default Hero
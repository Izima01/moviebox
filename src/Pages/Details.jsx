import Aside from "../Components/Aside"
import topgun from '../assets/topgun.png';
import Play from '../assets/Play(1).svg';
import MovieInfo from "../Components/MovieInfo";
import { useState } from "react";
import Menu from '../assets/Menu.svg';

const Details = () => {
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <>
      <div className="flex">
        <div className={`sm:hidden fixed left-0 top-0 bottom-0 transition duration-500 ease-in-out z-10 ${toggleOn ? 'translate-x-0' : '-translate-x-60'}`}>
          <Aside />
        </div>

        <button onClick={() => setToggleOn(!toggleOn)} className="absolute top-4 right-4 block z-10 md:hidden">
          <img src={Menu} alt="" className='' />
        </button>

        <div className='hidden md:block'>
          <Aside />
        </div>
        <main className="w-full lg:m-7 m-4">
          <div className="rounded-[1.25rem] relative mb-6">
            <img src={topgun} className="w-full h-48 sm:h-auto" alt="" />
            <button className="absolute top-[calc(50%-10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 md:p-5 rounded-full bg-[#ffffff59]">
              <img src={Play} className="md:w-8 w-4" alt="" />
            </button>
            <p className="absolute top-[calc(50%+38px)] left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-lg">Watch Trailer</p>
          </div>
          <MovieInfo />
        </main>
      </div>
    </>
    
  )
}

export default Details
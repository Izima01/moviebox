/* eslint-disable no-unused-vars */
import Aside from "../Components/Aside"
import Play from '../assets/Play(1).svg';
import MovieInfo from "../Components/MovieInfo";
import { useState } from "react";
import Menu from '../assets/Menu.svg';
import { Link, useParams } from "react-router-dom";
import useGetDetailsFetcher from "../Hooks/useGetDetails";
// import { singleMovie } from "../data";

const Details = () => {
  const [toggleOn, setToggleOn] = useState(false);
  const { productId } = useParams();

  const { isLoading, data, error } = useGetDetailsFetcher(productId);

  const { backdrop_path, homepage } = data;
  
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
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="w-full h-[13.5rem] sm:h-auto rounded-3xl" alt="" />
            <Link target="_blank" to={homepage} className="absolute top-[calc(50%-10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 md:p-5 rounded-full bg-[#ffffff59]">
              <img src={Play} className="md:w-8 w-4" alt="" />
            </Link>
            <p className="absolute top-[calc(50%+38px)] left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-lg">Watch Trailer</p>
          </div>
          <MovieInfo data={data} />
        </main>
      </div>
    </>
    
  )
}

export default Details
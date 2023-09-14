/* eslint-disable react/prop-types */

import right from '../assets/right.svg';
import MovieCard from './MovieCard';
import Loader from './Loader';

const MovieCollection = ({ data, isLoading, filteredData }) => {

  return (
    <section className="w-[90%] md:w-[86%] mx-auto pt-10">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-black text-3xl font-semibold">Featured Movie</h3>

        <button className="text-[#BE123C] flex gap-1 items-center">
          See more
          <img src={right} alt="" />
        </button>
      </div>

      {
        isLoading ? <Loader /> : (
          <div className='grid sm:grid-cols-3 lg:grid-cols-4 w-full gap-6 md:gap-10 mb-10 collection'>
            {(filteredData ? filteredData : data)?.map((data) => <MovieCard key={data.id} details={data} />)}
          </div>
        )
      }
    </section>
  )
}

export default MovieCollection
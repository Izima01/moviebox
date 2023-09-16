/* eslint-disable react/prop-types */

import right from '../assets/right.svg';
import MovieCard from './MovieCard';
import Loader from './Loader';
import Error from './Error';

const MovieCollection = ({ data, isLoading, filteredData, searchLoading, error }) => {

  return (
    <section className="w-[90%] md:w-[86%] mx-auto pt-10">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-black text-3xl font-semibold">Featured Movie</h3>

        <button className="text-[#BE123C] flex gap-1 items-center">
          <span className='text-[#be123c]'>See more</span>
          <img src={right} alt="" />
        </button>
      </div>

      {
        isLoading ? <Loader />
        : searchLoading ? <Loader />
        : error ? <Error info={error} />
        : <div className='grid sm:grid-cols-3 lg:grid-cols-4 w-full gap-6 md:gap-10 mb-10 collection'>
            {(filteredData.length == 0 ? data.slice(0,10) : filteredData).map((dat) => <MovieCard key={dat.id} details={dat} />)}
        </div>
      }
    </section>
  )
}

export default MovieCollection
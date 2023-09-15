/* eslint-disable react/prop-types */
import imdb from '../assets/imdb.svg';
import tomato from '../assets/tomato.svg';
import { Link } from 'react-router-dom';
import useGenreFetcher from '../Hooks/useGenreFetcher';

const MovieCard = ({ details }) => {
  const { poster_path, original_title, release_date, vote_average, id, genre_ids } = details;
  
  const { genreNames } = useGenreFetcher(genre_ids);

  const date = new Date(release_date);

  return (
    <Link className="text-black flex flex-col gap-2 sm:gap-3" to={`/details/:${id}`} data-testid='movie-card'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} loading='lazy' className='w-full h-96 sm:h-auto' alt="movie poster" data-testid="movie-poster" />
        <p className='text-[#9CA3AF] font-semibold text-sm' data-test-id='movie-release-date'>{date.toDateString()}</p>
        <h3 className='text-[#111827] text-lg font-bold' data-testid='movie-title'>{original_title}</h3>

        <ul className="list-none flex items-center justify-between">
          <li className='flex gap-2 items-center text-sm '>
            <img src={imdb} alt="" />
            <p className="text-black text-sm">{vote_average*10}/100</p>
          </li>

          <li className='flex gap-2 items-center text-sm '>
            <img src={tomato} alt="" />
            <p className="text-black text-sm">{vote_average*10}%</p>
          </li>
        </ul>

        <p className='text-[#9ca3af] text-sm font-semibold'>
          {genreNames.join(', ')}
        </p>
    </Link>
  )
}

export default MovieCard
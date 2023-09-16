import { useState } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import MovieCollection from '../Components/MovieCollection';
import useMovieFetcher from '../Hooks/useMovieFetcher';
import useMovieSearcher from '../Hooks/useMovieSearcher';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [filteredData, setFilteredData] = useState([]);
  // const [searchLoading, setSearchLoading] = useState(false);

  const { isLoading, data, error } = useMovieFetcher();
  const { isLoading: searchLoading, data: searchData, error: searchError } = useMovieSearcher(searchQuery);
  
  const handleSearch = (val) => {
    setSearchQuery(val);
  };

  return (
    <>
      <Hero handleSearch={handleSearch} />
      <MovieCollection data={data} isLoading={isLoading} filteredData={searchData} searchLoading={searchLoading} error={error} searchError={searchError} />
      <Footer />
    </>
  )
}

export default Home
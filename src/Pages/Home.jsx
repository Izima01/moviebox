import { useState } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import MovieCollection from '../Components/MovieCollection';
import useMovieFetcher from '../Hooks/useMovieFetcher';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const { isLoading, data, error } = useMovieFetcher();

  const handleSearch = () => {
    setSearchLoading(true);
    setTimeout(() => {
      setFilteredData(data?.filter(dat => dat.original_title.toLowerCase().includes(searchInput)));
      setSearchLoading(false);
    }, 1500);
  };

  return (
    <>
      <Hero searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
      <MovieCollection data={data} isLoading={isLoading} filteredData={filteredData} searchLoading={searchLoading} error={error} />
      <Footer />
    </>
  )
}

export default Home
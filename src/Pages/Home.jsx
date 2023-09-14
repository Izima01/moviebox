import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import MovieCollection from '../Components/MovieCollection';
import useMovieFetcher from '../Hooks/useMovieFetcher';

const Home = () => {
  const { isLoading, data } = useMovieFetcher();
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data?.filter(dat => dat.original_title.toLowerCase().includes(searchInput)));
  }, [searchInput]);

  return (
    <>
      <Hero searchInput={searchInput} setSearchInput={setSearchInput} />
      <MovieCollection data={data} isLoading={isLoading} filteredData={filteredData} />
      <Footer />
    </>
  )
}

export default Home
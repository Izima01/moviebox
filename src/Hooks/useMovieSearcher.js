import axios from 'axios';
import { useState, useEffect } from 'react'

const useMovieSearcher = (query) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTI2NDBjZmM1MzUyY2RjMTNhNmRjOWYzZDJkNzA3YSIsInN1YiI6IjY1MDI0NWZlMWJmMjY2MDExYzc4ZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dC802zo92wyVG8B6N31V3xajGbotgzZd62OQlvMPTFQ'
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await axios.get(url, options);
                console.log(response.data.results);
                setData(response.data.results);
            } catch (err) {
                setError(err);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            } 
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return { isLoading, data, error }
}

export default useMovieSearcher
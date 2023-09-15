import axios from 'axios';
import { useState, useEffect } from 'react'

const useMovieFetcher = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const url2 = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc';
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
                const response = await axios.get(url2, options);
                setData(response.data.results);
            } catch (err) {
                setError(err.response.statusText);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            } 
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { isLoading, data, error }
}

export default useMovieFetcher
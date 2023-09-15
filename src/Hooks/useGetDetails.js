import axios from 'axios';
import { useState, useEffect } from 'react'

const useGetDetailsFetcher = (movieId) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setdata] = useState([]);
    const [error, setError] = useState('');

    const url = `https://api.themoviedb.org/3/movie/${movieId}?include_video=true`;

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
                setdata(response.data);
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

export default useGetDetailsFetcher
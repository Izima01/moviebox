import { useEffect, useState } from "react";

const useGenreFetcher = (genre_ids) => {
    const [genreData, setData] = useState([]);
    const genreNames = genreData.map(item => item.name);

    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTI2NDBjZmM1MzUyY2RjMTNhNmRjOWYzZDJkNzA3YSIsInN1YiI6IjY1MDI0NWZlMWJmMjY2MDExYzc4ZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dC802zo92wyVG8B6N31V3xajGbotgzZd62OQlvMPTFQ'
        }
    };

    useEffect(() => {
        async function fetchGenreList() {
            try {
                const res = await fetch(url, options);
                const result = await res.json();
                setData(result.genres.filter(item => genre_ids.includes(item.id)));
            } catch (err) {
                console.log(err);
            }
        }
        fetchGenreList();
    }, []);

    return { genreNames }
}

export default useGenreFetcher
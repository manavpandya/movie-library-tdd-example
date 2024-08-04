import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from '../components/MovieList';
// import MovieDetails from '../components/MovieDetails';
// import SearchMovies from '../components/SearchMovies';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchMovies = () => [
            { id: 1, title: 'Inception', description: 'A mind-bending thriller', director: 'Christopher Nolan' },
            { id: 2, title: 'Interstellar', description: 'A journey through space and time', director: 'Christopher Nolan' },
            { id: 3, title: 'Dunkirk', description: 'A WWII epic', director: 'Christopher Nolan' },
        ];

        const data = fetchMovies();
        console.log('Fetched Movies:', data); // Log fetched data
        setMovies(data);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList movies={movies} />} />
            </Routes>
        </>
    );
};

export default Movies;

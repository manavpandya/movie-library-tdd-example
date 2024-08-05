import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
// import SearchMovies from '../components/SearchMovies';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = () => [
            { id: 1, title: 'Inception', description: 'A mind-bending thriller', director: 'Christopher Nolan' },
            { id: 2, title: 'Interstellar', description: 'A journey through space and time', director: 'Christopher Nolan' },
            { id: 3, title: 'Dunkirk', description: 'A WWII epic', director: 'Christopher Nolan' },
        ];

        setMovies(fetchMovies());
    }, []);

    const MovieDetailsWrapper = () => {
        const { id } = useParams();
        const movie = movies.find(movie => movie.id === parseInt(id, 10));
        return <MovieDetails movie={movie} />;
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList movies={movies} />} />
                <Route path=":id" element={<MovieDetailsWrapper />} />
            </Routes>
        </>
    );
};

export default Movies;

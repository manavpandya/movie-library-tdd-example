import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import SearchMovies from '../components/SearchMovies';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2>Movie List</h2>
            <SearchMovies setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={<MovieList movies={filteredMovies} />} />
                <Route path=":id" element={<MovieDetailsWrapper />} />
            </Routes>
        </div>
    );
};

export default Movies;

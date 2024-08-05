// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p>No movies available</p>;
    }

    return (
        <div>
            <h2>Movie List</h2>
            <ul className="list-group">
                {movies.map(movie => (
                    <li key={movie.id} className="list-group-item">
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;

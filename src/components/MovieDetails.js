import React from 'react';

const MovieDetails = ({ movie }) => {
    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div>
            <h1>Movie detail</h1>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
        </div>
    );
};

export default MovieDetails;

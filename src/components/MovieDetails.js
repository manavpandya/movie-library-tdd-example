import React from 'react';

const MovieDetails = ({ movie }) => {
    if (!movie) return <div>Movie not found</div>;

    return (
        <div>
            <h2 data-testid="movie-title">{movie.title}</h2>
            <p data-testid="movie-description">{movie.description}</p>
            <p data-testid="movie-director">Director: {movie.director}</p>
            {movie.trailer && (
                <div>
                    <h3>Trailer:</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={movie.trailer}
                        title={`${movie.title} trailer`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        data-testid="movie-trailer"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;

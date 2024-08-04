import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from '../components/MovieList';

test('renders a list of movies', () => {
    const movies = [
        { id: 1, title: 'Inception' },
        { id: 2, title: 'Interstellar' },
        { id: 3, title: 'Dunkirk' },
    ];

    render(
        <Router>
            <MovieList movies={movies} />
        </Router>
    );

    const movieTitles = movies.map(movie => screen.getByText(movie.title));
    movieTitles.forEach(title => expect(title).toBeInTheDocument());
});

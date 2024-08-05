import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Movies from '../pages/Movies';
import MovieDetails from '../components/MovieDetails';

const mockMovies = [
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', director: 'Christopher Nolan' },
    { id: 2, title: 'Interstellar', description: 'A journey through space and time', director: 'Christopher Nolan' },
    { id: 3, title: 'Dunkirk', description: 'A WWII epic', director: 'Christopher Nolan' },
];

jest.mock('../components/MovieDetails', () => (props) => (
    <div>
        <p>Mocked Movie Details: {props.movie ? props.movie.title : 'Movie not found'}</p>
    </div>
));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

const mockUseParams = require('react-router-dom').useParams;

test('renders movie list and search components', () => {
    render(
        <MemoryRouter initialEntries={['/movies']}>
            <Routes>
                <Route path="movies/*" element={<Movies />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText(/Movie List/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search movies.../i)).toBeInTheDocument();
});

test('filters movies based on search input', () => {
    render(
        <MemoryRouter initialEntries={['/movies']}>
            <Routes>
                <Route path="movies/*" element={<Movies />} />
            </Routes>
        </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/Search movies.../i);
    fireEvent.change(input, { target: { value: 'Inception' } });

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.queryByText(/Interstellar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Dunkirk/i)).not.toBeInTheDocument();
});

test('displays no movies message when search does not match any movie', () => {
    render(
        <MemoryRouter initialEntries={['/movies']}>
            <Routes>
                <Route path="movies/*" element={<Movies />} />
            </Routes>
        </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/Search movies.../i);
    fireEvent.change(input, { target: { value: 'Nonexistent Movie' } });

    expect(screen.getByText(/No movies available/i)).toBeInTheDocument();
});

test('navigates to movie details page', async () => {
    render(
        <MemoryRouter initialEntries={['/movies']}>
            <Routes>
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails movie={mockMovies.find(movie => movie.id === 1)} />} />
            </Routes>
        </MemoryRouter>
    );

    const inceptionLink = screen.getByText(/Inception/i);
    fireEvent.click(inceptionLink);

    mockUseParams.mockReturnValue({ id: '1' });

    expect(await screen.findByText(/Mocked Movie Details: Inception/i)).toBeInTheDocument();
});

test('renders MovieDetails component correctly with valid movie ID', () => {
    mockUseParams.mockReturnValue({ id: '1' });

    render(
        <MemoryRouter initialEntries={['/movies/1']}>
            <Routes>
                <Route path="movies/:id" element={<MovieDetails movie={mockMovies[0]} />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText(/Mocked Movie Details: Inception/i)).toBeInTheDocument();
});

test('renders "Movie not found" for invalid movie ID', () => {
    mockUseParams.mockReturnValue({ id: '999' });

    render(
        <MemoryRouter initialEntries={['/movies/999']}>
            <Routes>
                <Route path="movies/:id" element={<MovieDetails movie={null} />} />
            </Routes>
        </MemoryRouter>
    );

    expect(screen.getByText(/Mocked Movie Details: Movie not found/i)).toBeInTheDocument();
});

test('handles route changes and displays correct components', async () => {
    render(
        <MemoryRouter initialEntries={['/movies']}>
            <Routes>
                <Route path="movies/*" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails movie={mockMovies.find(movie => movie.id === 2)} />} />
            </Routes>
        </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/Search movies.../i);
    fireEvent.change(input, { target: { value: 'Interstellar' } });

    const interstellarLink = screen.getByText(/Interstellar/i);
    fireEvent.click(interstellarLink);

    mockUseParams.mockReturnValue({ id: '2' });

    expect(await screen.findByText(/Mocked Movie Details: Interstellar/i)).toBeInTheDocument();
});

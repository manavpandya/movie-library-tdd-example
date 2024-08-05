import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';

const mockMovie = {
    id: 1,
    title: 'Inception',
    description: 'A mind-bending thriller',
    director: 'Christopher Nolan',
};

test('renders movie details', () => {
    render(<MovieDetails movie={mockMovie} />);

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.getByText(/A mind-bending thriller/i)).toBeInTheDocument();
    expect(screen.getByText(/Christopher Nolan/i)).toBeInTheDocument();
});

test('renders movie not found message', () => {
    render(<MovieDetails movie={null} />);
    expect(screen.getByText(/Movie not found/i)).toBeInTheDocument();
});

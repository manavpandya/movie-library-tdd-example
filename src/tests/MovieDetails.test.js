import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';

const mockMovie = {
    id: 1,
    title: 'Inception',
    description: 'A mind-bending thriller',
    director: 'Christopher Nolan',
    trailer: 'https://www.youtube.com/embed/YoHD9XEInc0'
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

test('renders movie details and trailer', () => {
    render(<MovieDetails movie={mockMovie} />);

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.getByText(/A mind-bending thriller/i)).toBeInTheDocument();
    expect(screen.getByText(/Director: Christopher Nolan/i)).toBeInTheDocument();

    const iframe = screen.getByTitle(/Inception trailer/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toContain('https://www.youtube.com/embed/YoHD9XEInc0');
});

test('renders movie details without trailer', () => {
    const movieWithoutTrailer = { ...mockMovie, trailer: '' };

    render(<MovieDetails movie={movieWithoutTrailer} />);

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.getByText(/A mind-bending thriller/i)).toBeInTheDocument();
    expect(screen.getByText(/Director: Christopher Nolan/i)).toBeInTheDocument();

    expect(screen.queryByTitle(/Inception trailer/i)).not.toBeInTheDocument();
});
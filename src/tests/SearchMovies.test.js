import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchMovies from '../components/SearchMovies';

test('renders search input', () => {
    const mockSetSearchTerm = jest.fn();
    render(<SearchMovies setSearchTerm={mockSetSearchTerm} />);
    expect(screen.getByPlaceholderText(/Search movies.../i)).toBeInTheDocument();
});

test('calls setSearchTerm on input change', () => {
    const mockSetSearchTerm = jest.fn();
    render(<SearchMovies setSearchTerm={mockSetSearchTerm} />);
    const input = screen.getByPlaceholderText(/Search movies.../i);
    fireEvent.change(input, { target: { value: 'Inception' } });
    expect(mockSetSearchTerm).toHaveBeenCalledWith('Inception');
});

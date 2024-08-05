import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from '../pages/Movies';

test('renders movie list and search components', () => {
    render(
        <Router>
            <Routes>
                <Route path="*" element={<Movies />} />
            </Routes>
        </Router>
    );

    expect(screen.getByText(/Movie List/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search movies.../i)).toBeInTheDocument();
});

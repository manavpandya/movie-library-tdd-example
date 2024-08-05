import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

test('renders About Us page with text and image', () => {
    render(
        <MemoryRouter initialEntries={['/about']}>
            <AboutUs />
        </MemoryRouter>
    );

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/We are a team of dedicated professionals committed to delivering high-quality software solutions./i)).toBeInTheDocument();
    expect(screen.getByAltText(/About Us/i)).toBeInTheDocument();
});

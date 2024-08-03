import { render, screen } from '@testing-library/react';
import SideNav from '../components/SideNav';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders side navigation links', () => {
    render(
        <Router>
            <SideNav />
        </Router>
    );

    const homeLink = screen.getByText(/home/i);
    const moviesLink = screen.getByText(/movies/i);
    const aboutLink = screen.getByText(/about/i);

    expect(homeLink).toBeInTheDocument();
    expect(moviesLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
});

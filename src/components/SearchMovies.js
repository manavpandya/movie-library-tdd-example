import React from 'react';

const SearchMovies = ({ setSearchTerm }) => {
    return (
        <div>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search movies..."
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchMovies;

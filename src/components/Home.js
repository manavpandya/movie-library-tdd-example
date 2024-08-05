import React from 'react';
import '../Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Our Movie Library</h1>
            <p>
                Discover a wide range of movies, from the latest blockbusters to timeless classics.
                Our library has something for every movie enthusiast.
            </p>
            <img
                src="https://via.placeholder.com/800x400"
                alt="Movie Library"
                className="home-image"
            />
        </div>
    );
};

export default Home;

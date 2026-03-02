import React from 'react';
import Banner from '../features/banner/components/Banner';
import MoviesPage from '../features/movies/components/MoviesPage';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <MoviesPage />
    </div>
  );
};

export default HomePage;

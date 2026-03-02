import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import WatchlistPage from '../pages/WatchlistPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/watchlist" element={<WatchlistPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;

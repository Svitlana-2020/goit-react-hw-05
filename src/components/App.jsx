// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation.jsx";
// import HomePage from '../pages/HomePage.jsx'; 
// import MoviesPage from '../pages/MoviesPage.jsx'; 
// import MovieDetailsPage from '../pages/MovieDetailsPage.jsx'; 
// import MovieCast from './MovieCast.jsx'; 
// import MovieReviews from './MovieReviews.jsx'; 
// import NotFound from '../pages/NotFound'; 
// import css from './App.module.css'; 
// import {fetchUrl} from '../../api-movies.js'
// import { useEffect, useState } from 'react';
// import { fetchUrlTitle } from '../../api-search.js';
import { lazy, Suspense } from "react";
import MovieList from './MovieList.jsx';
// import urls from '../../urls.json'

const HomePage = lazy(() => import('../pages/HomePage.jsx'))
const MoviesPage = lazy(() => import('../pages/MoviesPage.jsx'))
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage.jsx'))
const MovieCast = lazy(() => import('../components/MovieCast.jsx'))
const MovieReviews = lazy(() => import('../components/MovieReviews.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))

function App() {

  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/query={query}" element={<MovieList />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} /> */}
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App

{/* <Route path="/" element={<HomePage movies={movies} loading={loading} error={error} />} /> */}
{/* <Route path="/movies" element={<MoviesPage movies={movies} onSearch={handleSearch}/>} /> */}
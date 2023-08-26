import React, { Suspense, lazy } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Navigation from "components/Navigation";
import SpinnerCircle from './components/Spinner/Spinner';

const Home = lazy(() => import('./Pages/HomePage'));
const Movies = lazy(() => import('./Pages/MoviesPage/MoviesPage'));
const Film = lazy(() => import('./Pages/FilmPage/FilmPage'));
const Trends = lazy(() => import('./Pages/TrendsPage/TrendsPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export default function App() {
  const location = useLocation();
  const element = useRoutes([
    {
      path: "movie-search-app",
      element: <Home />,
    },
    {
      path: 'movie-search-app/movies',
      element: <Movies />,
    },
    {
      path: "movie-search-app/movies/:moviesId/*",
      element: <Film />,
      children: [
        {
          path: "cast",
          element: < Cast />,
        },
        {
          path: "reviews",
          element: < Reviews />,
        },
      ],
    },
    {
      path: "movie-search-app/trends",
      element: <Trends />
    },
    {
      path: "*",
      element: <NotFound />
    }

  ])

  return (
    <>
      <Navigation />
      <Suspense fallback={<SpinnerCircle />}>
        <AnimatePresence>

          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>

      </Suspense>

    </>
  );
};


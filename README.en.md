# Movie Search Website

[Demo link](https://tonni004.github.io/movie-search-app/)

This repository contains the source code for a web application that allows users
to search for movies, view detailed information about them, explore cast
details, read user reviews, and check the ratings of the trending movies of the
week.

### Technologies Used

**React**: A JavaScript library for building user interfaces. **Redux Toolkit**:
A state management library for React applications. **Axios**: A promise-based
HTTP client for making API requests. **React Router DOM**: A library for
handling routing in React applications. **Framer Motion**: A library for
creating smooth animations in React. **NextUI**: A UI library for styling the
application.

### Features

1. **Movie Search**  
   Users can search for movies by entering a title in the search bar. When a
   successful search is made, a list of clickable cards (up to 20 results) is
   displayed. Users can load more results by clicking the "Load more" button. If
   users want to perform a new search, the list of cards will be replaced with
   the new results.
2. **Movie Details**  
   Clicking on a movie card takes the user to a detailed information page where
   they can view the release date, description, genres, and visit an external
   site for watching the movie (by clicking the "Watch" button).
3. **"See More" Sections**  
   The movie details page also displays the cast of the movie with a list of
   actors who starred in it. User reviews and ratings for the movie are also
   shown.
4. **Trending Movies**  
   Users can check the most popular movies of the week on a separate page with
   similar clickable cards that lead to detailed information pages.

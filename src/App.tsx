import React, { useState, useEffect } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import { IMovie, movies as initialMovies } from "./data/Movie";
import { SortingControls } from "./components/SortingControls";

export function App() {
  const [allMovies, setAllMovies] = useState<IMovie[]>([]);
  const [sortPreference, setSortPreference] = useState<'none' | 'title' | 'rating'>('none');

  useEffect(() => {
    const loadMovies = () => {
      const storedMoviesJSON = localStorage.getItem("movies");
      const storedMovies: IMovie[] = storedMoviesJSON ? JSON.parse(storedMoviesJSON) : [];
      const combinedMovies: IMovie[] = storedMovies.concat(initialMovies)
        .filter((movie, index, array) => index === array.findIndex(m => m.title === movie.title));
      setAllMovies(combinedMovies);
      console.log(combinedMovies)
    };

    loadMovies();
  }, []);

  const addNewMovie = (newMovie: IMovie) => {
    const updatedMovies: IMovie[] = [...allMovies, newMovie]
      .filter((movie, index, array) => index === array.findIndex(m => m.title === movie.title));

    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setAllMovies(updatedMovies);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setSortPreference(name as 'title' | 'rating');
    } else {
      setSortPreference('none');
    }
  };

  const displayedMovies = [...allMovies];
  if (sortPreference === 'title') {
    displayedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortPreference === 'rating') {
    displayedMovies.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="app">
      <h1>Movie Cards</h1>
   <SortingControls sortPreference={sortPreference} onSortChange={handleSortChange}/>
      <MovieList movies={displayedMovies} />
      <AddMovie onAddNewMovie={addNewMovie} />
    </div>
  );
}

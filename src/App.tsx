import AddMovie from "./components/AddMovie";
import { movies } from "./data/Movie";
import MovieList from "./components/MovieList";

export function App() {
 
  return (
    <div className="app">
      <h1>Movie Cards</h1>
      <MovieList movies={movies}/>
      <AddMovie/>
    </div>
  );
}

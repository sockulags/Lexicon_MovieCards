import  { useState, ChangeEvent, FormEvent } from "react";
import "./AddMovie.css";
import { IMovie, genres } from "../data/Movie";
import placeHolder from "../assets/placeholder.png";

interface AddMovieProps {
  onAddNewMovie: (newMovie: IMovie) => void;
}

const AddMovie: React.FC<AddMovieProps> = ({ onAddNewMovie }) => {
  const [movie, setMovie] = useState<IMovie>({
    title: "",
    rating: 1,
    genre: genres[0],
    image: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMovie((currentValues) => ({ ...currentValues, [name]: value }));
  };

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMovie((currentValues) => ({ ...currentValues, rating: Number(value) }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (movie.title.trim() && movie.description.trim()) {
  
      const updatedMovie = {
        ...movie,
        image: movie.image.trim() ? movie.image : placeHolder,
      };

      const existingMoviesJSON = localStorage.getItem("movies");
      const existingMovies: IMovie[] = existingMoviesJSON ? JSON.parse(existingMoviesJSON) : [];
      const updatedMovies = [...existingMovies, movie];
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      
      onAddNewMovie(updatedMovie);

      setMovie({
        title: "",
        rating: 1,
        genre: genres[0],
        image: "",
        description: "",
      });
    } else {
      alert("Please fill out all fields.");
    }
  };


  return (
    <div id="addMovie">      
        <form onSubmit={handleSubmit}>
          <h2>Add Movie</h2>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={movie.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Rating: {movie.rating}
            <input
              type="range"
              min="1"
              max="5"
              name="rating"
              step="0.1"
              value={movie.rating}
              onChange={handleRatingChange}
              style={{ "--thumb-position": `${((movie.rating - 1) / (5 - 1)) * 100}%` } as React.CSSProperties}
            />
          </label>
          <label>
            Image Url
            <input
              type="text"
              name="image"
              placeholder="Optional"
              value={movie.image}
              onChange={handleChange}
            />
          </label>
          <label>
            Genre
            <select name="genre" value={movie.genre} onChange={handleChange}>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>
          <label>
            Description
            <textarea
              name="description"
              value={movie.description}
              onChange={handleChange}              
            />
          </label>
          <button type="submit">Add Movie</button>
        </form>         
    </div>
  );
};

export default AddMovie;

import React, { useState, ChangeEvent, FormEvent } from "react";
import "./AddMovie.css";
import { IMovie, genres } from "../data/Movie";

const AddMovie: React.FC = () => {
  const [movie, setMovie] = useState<IMovie>({
    title: "",
    rating: 1,
    genre: genres[0],
    image: "",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevVisibility) => !prevVisibility);
  };

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
      console.log(movie);
      alert(JSON.stringify(movie));
      generateAndDownloadJSON(movie);
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

  const generateAndDownloadJSON = (movie: IMovie) => {
    const data = JSON.stringify([movie]);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "movies.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="addMovie" className={isFormVisible ? "" : "minimized"}>
      {isFormVisible && (
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
      )}
      <button id="minimizeButton" onClick={toggleFormVisibility}>
        {isFormVisible ? "-" : "Add Movie"}
      </button>
    </div>
  );
};

export default AddMovie;

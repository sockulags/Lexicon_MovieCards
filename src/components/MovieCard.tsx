import React from "react";
import { IMovie } from "../data/Movie";
import "./MovieCard.css";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const starsArray = new Array(5).fill(null);

  return (
    <div
      id="movieCard"
      className="movie-card"     
    >
      <div className="movie-image"  style={{ backgroundImage: `url(${movie.image})` }}></div>
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>          
          <div className="stars-container"> 
            {starsArray.map((_, index) => (
              <span
                key={index}
                className={`star ${index < movie.rating ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="movie-genre">{movie.genre}</p> 
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;

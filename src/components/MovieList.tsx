import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { IMovie } from '../data/Movie'; 
import "./MovieList.css";

interface MovieListProps {
  movies: IMovie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const container = document.querySelector('.movie-card-list') as HTMLElement;
    const checkScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.offsetWidth);
    };
 
    checkScroll();

    container.addEventListener('scroll', checkScroll);
    return () => container.removeEventListener('scroll', checkScroll);
  }, [movies]); 
 
  const scrollMovies = (direction: 'previous' | 'next') => {
    const container = document.querySelector('.movie-card-list') as HTMLElement;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); 
    const cardWidth = 330; 
    const cardsInView = vw / cardWidth; 
    const scrollAmount = cardsInView * cardWidth; 
    const currentScroll = container.scrollLeft;
    container.scrollTo({     
      left: direction === 'next' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className="movie-list-container">
    <div className={`previous-movies ${!showLeftArrow ? 'hide-arrow' : ''}`} onClick={() => scrollMovies('previous')}>←</div>
    <div className="movie-card-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
    <div className={`next-movies ${!showRightArrow ? 'hide-arrow' : ''}`} onClick={() => scrollMovies('next')}>→</div>
  </div>
  
  );
};



export default MovieList;

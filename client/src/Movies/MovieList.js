import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { runInContext } from 'vm';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  console.log('props', props)
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log('reee',response.data)
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}   
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
    return(
      <div className='movie-card'>
        <Link to={`movies/${movie.id}`} >
        <MovieCard movie={movie} />
        </Link>
      </div>
    )

}

export default MovieList;

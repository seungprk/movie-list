import React from 'react';
import ReactDOM from 'react-dom';

var MovieList = (props) => {
  return (
    props.movies.map(movie => <div>movie!</div>)
  );
};

export default MovieList;
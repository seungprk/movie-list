import React from 'react';
import ReactDOM from 'react-dom';

var MovieListEntry = (props) => {
  return (
    <div>{props.movie.title}</div>
  );
};

export default MovieListEntry;
import React from 'react';
import ReactDOM from 'react-dom';

var MovieListEntry = (props) => {
  var watchedText = props.movie.watched ? 'Watched' : 'To Watch';

  return (
    <div className="movie-list-entry">
      <span>{props.movie.title}</span>
      <span>{watchedText}</span>
    </div>
  );
};

export default MovieListEntry;

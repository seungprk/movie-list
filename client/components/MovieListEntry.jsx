import React from 'react';
import MovieListEntryDrawer from './MovieListEntryDrawer.jsx';

const MovieListEntry = (props) => {
  return (
    <div className="movie-list-entry">
      <div>{props.movie.title}</div>
      <MovieListEntryDrawer movie={props.movie} onToggleWatched={props.onToggleWatched} />
    </div>
  );
};

export default MovieListEntry;

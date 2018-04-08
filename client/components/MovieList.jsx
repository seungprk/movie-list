import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';
import MovieListTabs from './MovieListTabs.jsx';

var MovieList = (props) => {
  var entries = props.movies.map(movie => <MovieListEntry movie={movie} />);
  if (entries.length === 0) {
    entries = <div>Movie Not Found...</div>;
  }
  return (
    <section className="movie-list">
      <div>
        <MovieListTabs />  
      </div>
      <div>
        {entries}
      </div>
    </section>
  );
};

export default MovieList;
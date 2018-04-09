import React from 'react';

var MovieListEntryDrawer = (props) => {
  return (
    <div className="entry-drawer">
      <div className="entry-drawer-info">
        <div>{props.movie.year}</div>
        <div>{props.movie.runtime}</div>
        <div>{props.movie.metascore}</div>
        <div>{props.movie.imdbrating}</div>
        <div>{props.movie.watched ? 'watched' : 'not watched'}</div>
        <button onClick={() => props.onToggleWatched(props.movie.title)}>{watchedText}</button>
      </div>
      <img src={props.movie.imgUrl} />
    </div>
  );
};

export default MovieListEntryDrawer;
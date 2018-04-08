import React from 'react';

var MovieListTabs = (props) => {
  var handleClick = (e) => {
    props.onSwitchTab(e.target.textContent);
  };

  return (
    <div>
      <span className={props.selected === 'Watched' ? 'selected' : ''} onClick={handleClick}>Watched</span>
      <span className={props.selected === 'To Watch' ? 'selected' : ''} onClick={handleClick}>To Watch</span>
    </div>
  );
};

export default MovieListTabs;

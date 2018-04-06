import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>The Best Movie List Around</h1>
        </header>
        <Search />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
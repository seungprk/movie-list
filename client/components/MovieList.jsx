import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';
import MovieListTabs from './MovieListTabs.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'Watched' 
    };
  }

  switchTab(tab) {
    this.setState({
      tab: tab
    });
  }

  render() {
    var movies = this.props.movies.filter(movie => this.state.tab === 'Watched' ? movie.watched : !movie.watched);
    var entries = movies.map(movie => <MovieListEntry movie={movie} />);
    if (entries.length === 0) {
      entries = <div>Movie Not Found...</div>;
    }

    return (
      <section className="movie-list">
        <div>
          <MovieListTabs selected={this.state.tab} onSwitchTab={this.switchTab.bind(this)} />  
        </div>
        <div>
          {entries}
        </div>
      </section>
    );
  }
}

export default MovieList;

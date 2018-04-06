import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearchMovie(this.state.query);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type="text" 
          value={this.state.query} 
          onChange={this.handleChange.bind(this)} 
        />
        <button>Search</button>
      </form>
    );
  } 
}

export default Search;
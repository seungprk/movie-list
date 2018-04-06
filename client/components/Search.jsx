import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange.bind(this)} 
        />
        <button>Search</button>
      </form>
    );
  } 
}

export default Search;
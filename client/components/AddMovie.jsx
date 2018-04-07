import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddMovie(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button>Add</button>
      </form>
    );
  }
}

export default AddMovie;
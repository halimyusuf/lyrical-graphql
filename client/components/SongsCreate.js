import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addSong from '../queries/addSong';
import fetchSong from '../queries/fetchSongs';

class SongsCreate extends Component {
  //   state = { title: '' };

  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = { title: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    this.props
      .mutate({
        variables: {
          title,
        },
        refetchQueries: [{ query: fetchSong }],
      })
      .then(() => {
        this.props.router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Add songs</p>
          <input
            type='text'
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSong)(SongsCreate);

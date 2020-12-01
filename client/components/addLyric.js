import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AddLyricQuery from '../queries/AddLyric';

class AddLyric extends Component {
  constructor(props) {
    super(props);
    this.state = { lyricContent: '' };
    this.addSongLyric = this.addSongLyric.bind(this);
  }

  addSongLyric() {
    console.log(this.state.lyricContent);
    this.props
      .mutate({
        variables: {
          content: this.state.lyricContent,
          songId: this.props.songId,
        },
      })
      .then(() => {
        this.setState({ lyricContent: '' });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className='form-group medium'>
          <input
            className='form-control'
            value={this.state.lyricContent}
            onChange={(e) =>
              this.setState({ lyricContent: e.currentTarget.value })
            }
          />
        </div>
        <div>
          <button className='btn btn-primary' onClick={this.addSongLyric}>
            {' '}
            Add lyric
          </button>
        </div>
      </div>
    );
  }
}

export default graphql(AddLyricQuery)(AddLyric);

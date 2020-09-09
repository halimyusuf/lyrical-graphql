import React from 'react';
import { graphql } from 'react-apollo';
import AddLyricQuery from '../queries/AddLyric';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import fetchLyric from '../queries/fetchLyrics';

const SongDetail = (props) => {
  console.log(props);
  const { song } = props.data;
  console.log(song);
  if (!song) {
    return <div>Loading.....</div>;
  }

  const addSongLyric = () => {};

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>{song.title}</h3>
      <button onClick={addSongLyric}> Add lyric</button>
    </div>
  );
};

export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);

// export default SongDetail;

import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import AddLyric from './addLyric';
import fetchSong from '../queries/fetchSong';
import LyricList from './LyricsList';

const SongDetail = (props) => {
  const { song } = props.data;

  console.log(song);
  if (song) console.log(song.lyrics);
  if (!song) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>{song.title}</h3>

      <div>
        <AddLyric songId={props.params.id} />
      </div>

      <div>
        <div>
          <h4>Lyrics</h4>
        </div>
        <div>
          <LyricList lyrics={song.lyrics} />
        </div>
      </div>
    </div>
  );
};

export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);

// export default SongDetail;

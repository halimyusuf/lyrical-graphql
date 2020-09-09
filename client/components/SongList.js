import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';

const SongList = (props) => {
  const onDelete = (id) => {
    props
      .mutate({
        variables: { id },
      })
      .then(() => {
        props.data.refetch();
      });
  };

  const renderSongsList = () =>
    props.data.songs.map((s) => (
      <li key={s.id}>
        <Link to={`/song/${s.id}`}> {s.title} </Link>
        <button onClick={() => onDelete(s.id)}>delete</button>
      </li>
    ));

  return (
    <div>
      <div>Song list</div>
      {!props.data.songs ? <p>loading.....</p> : <div>{renderSongsList()}</div>}
      <Link to='/new'>Add</Link>
    </div>
  );
};

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));

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
      <li
        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
        key={s.id}
      >
        <Link to={`/song/${s.id}`}> {s.title} </Link>
        <button
          className='btn btn-danger btn-sm'
          onClick={() => onDelete(s.id)}
        >
          delete
        </button>
      </li>
    ));

  return (
    <div>
      <div>Song list</div>
      {!props.data.songs ? (
        <p>loading.....</p>
      ) : (
        <div>
          <ul className='list-group'> {renderSongsList()} </ul>
        </div>
      )}
      <div className='p-l-20'>
        <Link className='btn btn-primary' to='/new'>
          Add
        </Link>
      </div>
    </div>
  );
};

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));

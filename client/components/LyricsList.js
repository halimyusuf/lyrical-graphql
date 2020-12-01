import React from 'react';
import { graphql } from 'react-apollo';

import likeLyric from '../queries/LikeLyric';

const LyricList = (props) => {
  const { lyrics, mutate } = props;
  const onLike = (id, likes) => {
    mutate({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          likes: likes + 1,
          __typename: 'LyricType',
        },
      },
    }).then(() => {
      console.log('liked');
    });
  };

  return (
    <div>
      <div className='my-3'>
        <ul className='list-group'>
          {lyrics.map((a) => (
            <li
              className='list-group-item d-flex justify-content-between align-items-center'
              key={a.id}
            >
              <div>{a.content}</div>
              <div>
                <span className='badge badge-primary badge-pill mx-3'>
                  {a.likes}
                </span>
                <button
                  onClick={() => onLike(a.id, a.likes)}
                  className='btn btn-primary btn-sm'
                >
                  Like
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default graphql(likeLyric)(LyricList);

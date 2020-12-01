import React from 'react';

const LyricList = ({ lyrics }) => {
  return (
    <div className='pt-10'>
      <ul className='list-group'>
        {lyrics.map((a) => (
          <li
            className='list-group-item d-flex justify-content-between align-items-center'
            key={a.id}
          >
            <div>{a.content}</div>
            <button className='btn btn-primary btn-sm'>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LyricList;

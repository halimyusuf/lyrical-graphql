import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import SongList from './components/SongList';
import SongsCreate from './components/SongsCreate';
import SongDetail from './components/SongDetail';

const App = () => {
  return (
    <div>
      <Router history={hashHistory}>
        <Route path='/' exact component={SongList} />
        <Route path='/new' exact component={SongsCreate} />
        <Route path='/song/:id' exact component={SongDetail} />
      </Router>
    </div>
  );
};

export default App;

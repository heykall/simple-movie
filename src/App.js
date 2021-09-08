import React from 'react';
import './App.css'
import { Home, MovieList, MyList, DetailMovie, NotFound } from './pages'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie-list" component={MovieList} />
        <Route path="/my-list" component={MyList} />
        <Route path="/detail-movie" component={DetailMovie} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

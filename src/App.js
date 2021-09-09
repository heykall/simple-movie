import React from 'react';
import './App.css'
import { Home, MovieList, MyList, DetailMovie, NotFound } from './pages'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/list" component={MovieList} />
        <Route path="/movie/my-list" component={MyList} />
        <Route path="/movie/detail/:id" component={DetailMovie} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

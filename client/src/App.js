import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList}/>
      {/* <Link to='/movies/:id'>Movie</Link> */}
      <Switch>
        <Route path='/movies' exact render={props => {return <MovieList {...props} />}}/>
        <Route path='/movies/:id'  render={props => {return <Movie {...props}/>}}/>

      </Switch>    
     
    </div>
  );
};

export default App;

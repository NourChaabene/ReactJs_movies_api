import React from 'react';
import Movie from '../Components/Movie'
import MovieDetail from '../Components/MovieDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Routers = () => {
  return (
    <Router  >
      <Switch>
        <Route exact path='/'  >
          <Movie />
        </Route>
        <Route exact path='/detail/:id' component={MovieDetail}/>
      </Switch>
    </Router>
  );
};


export default Routers;
